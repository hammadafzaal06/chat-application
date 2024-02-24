const Message = require("../models/message");

const getAllMessages = async (req, res, next) => {
  try {
    const docs = await Message.find();
    if (docs.length === 0) {
      res.status(404).json({
        message: "There is Message found",
        message: [],
      });
    } else {
      console.log(docs);
      res.status(201).json({
        message: "Here is the All Messages",
        message: docs,
      });
    }
  } catch (err) {
    console.log(err);
    res.status.json({
      error: err,
    });
  }
};

const getMessageById = async (req, res, next) => {
  try {
    const doc = await Message.findById(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Not found any messsage",
      });
    } else {
      console.log(doc);
      res.status(201).json({
        message: "Here is the message",
        message: doc,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createMessage = async (req, res, next) => {
  try {
    const message = new Message(req.body);
    const doc = await message.save();
    console.log(doc);
    res.status(201).json({
      message: "Message is created",
      message: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateMessageById = async (req, res, next) => {
  try {
    const result = await Message.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!result) {
      res.status(404).json({
        message: "Not found message",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "Message updated",
        message: result,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteMessageById = async (req, res, next) => {
  try {
    const result = await Message.findOneAndDelete(req.params.id);
    if (!result) {
      res.status(404).json({
        message: "not Found Message",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "Message deleted",
        message: result,
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
  getAllMessages,
  getMessageById,
  createMessage,
  updateMessageById,
  deleteMessageById,
};
