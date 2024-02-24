const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Group = require("../models/group");
const { createGroup, getAllGroups, getGroupById, updateGroupById, deleteGroupById } = require("../controllers/groups");


router.post("/groups", createGroup);

router.get("/groups", getAllGroups);

router.get("/groups/:id", getGroupById);

router.patch("/groups/:id", updateGroupById);

router.delete("/groups/:id", deleteGroupById);



module.exports = router;