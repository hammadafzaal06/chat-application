const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User =require("../models/users");
const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } = require("../controllers/users");


router.post("/users", createUser);

router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

router.patch("/users/:id", updateUserById);

router.delete("/users/:id", deleteUserById);


module.exports = router;