const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Message = require("../models/message");
const { createMessage, getAllMessages, getMessageById, updateMessageById, deleteMessageById } = require("../controllers/messages");


router.post("/messages", createMessage);

router.get("/messages", getAllMessages);

router.get("/messages/:id", getMessageById);

router.patch("/messages/:id", updateMessageById);

router.delete("/messages/:id", deleteMessageById);



module.exports = router;