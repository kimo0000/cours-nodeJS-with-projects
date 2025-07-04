const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
var methodOverride = require("method-override");
app.use(methodOverride("_method"));
const routers = require('./routes/AllRoutes');
const AddRouters = require('./routes/AddUser');
const editRouters = require('./routes/EditUser');
const dotenv = require('dotenv');

dotenv.config();

// Link To my Database:
mongoose
.connect(process.env.MONGO_URL)
.then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
  });
})
.catch((err) => {
  console.log(err, "Failed to connect to MongoDB");
});


// auto reload Page:
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});


app.use(routers);
app.use("/user", AddRouters);
app.use("/edit", editRouters);

