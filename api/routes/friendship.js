const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Friendship = require ("../models/friendship");
const { createFriendship, getAllFriendships, getFriendshipById, updateFriendshipById, deleteFriendshipById } = require("../controllers/friendShip");



router.post("/friendship", createFriendship);

router.get("/friendship", getAllFriendships);

router.get("/friendship/:id", getFriendshipById);

router.patch("/friendship/:id", updateFriendshipById);

router.delete("/friendship/:id", deleteFriendshipById);


module.exports = router;