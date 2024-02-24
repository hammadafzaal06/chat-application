const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Notification = require("../models/notification");
const { createNotification, getAllNotifications, getNotificationById, updateNotificationById, deleteNotificationById } = require("../controllers/notifications");


router.post("/notifications", createNotification);

router.get("/notifications", getAllNotifications);

router.get("/notifications/:id", getNotificationById);

router.patch("/notifications/:id", updateNotificationById);

router.delete("/notifications/:id", deleteNotificationById);



module.exports = router;