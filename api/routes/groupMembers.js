const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const GroupMember = require("../models/groupMember");
const { createGroupMember, getAllGroupMembers, getGroupMemberById, updateGroupMemberById, deleteGroupMemberById } = require("../controllers/groupMembers");

router.post("/groupMembers", createGroupMember);

router.get("/groupMembers", getAllGroupMembers);

router.get("/groupMembers/:id", getGroupMemberById);

router.patch("/groupMembers/:id", updateGroupMemberById);

router.delete("/groupMembers/:id", deleteGroupMemberById);


module.exports = router;