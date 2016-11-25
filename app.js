/**
 * Created by Administrator on 2016/11/3.
 */
var express = require("express");
var path = require("path");
var http = require("http");
var app = new express();
var routes = require("./routes/index");
app.use(express.static(path.join(__dirname, 'build')));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", routes);
app.listen(4000, function () {
    console.log("listen on port 4000");
});