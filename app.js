const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



const userRoutes = require("./api/routes/users");
const groupRoutes = require("./api/routes/groups");
const messageRoutes = require("./api/routes/messages");
const friendshipRoutes = require("./api/routes/friendship");
const groupMemberRoutes = require("./api/routes/groupMembers");
const notificationRoutes = require("./api/routes/notifications");



//require("dotenv").config();

mongoose.connect("mongodb://127.0.0.1:27017/chatApp");

//app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/users", userRoutes);
app.use("/groups", groupRoutes);
app.use("/messages", messageRoutes);
app.use("/groupMembers", groupMemberRoutes);
app.use("/friendship", friendshipRoutes);
app.use("/notifications", notificationRoutes);


app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });


module.exports= app;
