const Notification = require("../models/notification");

const getAllNotifications = async (req, res, next) => {
  try {
    const docs = await Notification.find();
    if (docs.length === 0) {
      res.status(404).json({
        message: "Not found Notification",
        notification: [],
      });
    } else {
      console.log(docs);
      res.status(201).json({
        message: "Here is all the Notification",
        notification: docs,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getNotificationById = async (req, res, next) => {
  try {
    const doc = await Notification.findById(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Not found Notification",
      });
    } else {
      console.log(doc);
      res.status(201).json({
        message: "Here is  Notifications",
        notification: doc,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createNotification = async (req, res, next) => {
  try {
    const notification = new Notification(req.body);
    const doc = await notification.save();
    console.log(doc);
    res.status(201).json({
      message: "Notification created",
      notification: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateNotificationById = async (req, res, next) => {
  try {
    const result = await Notification.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!result) {
      res.status(404).json({
        message: "Not found Notification",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "Notification updated",
        notification: result,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteNotificationById = async (req, res, next) => {
  try {
    const result = await Notification.findOneAndDelete(req.params.id);
    if (!result) {
      res.status(404).json({
        message: "Not Found Notification",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "Notification deleted",
        notification: result,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  getAllNotifications,
  getNotificationById,
  createNotification,
  updateNotificationById,
  deleteNotificationById,
};
