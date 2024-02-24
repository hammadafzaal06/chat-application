const GroupMember = require("../models/groupMember");

const getAllGroupMembers = async (req, res, next) => {
  try {
    const docs = await GroupMember.find();
    if (docs.length === 0) {
      res.status(404).json({
        message: "Not Found groupMembers",
        groupMember: [],
      });
    } else {
      console.log(docs);
      res.status(201).json({
        message: "Here is all the groupMembers",
        groupMember: docs,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(err).json({
      error: err,
    });
  }
};

const getGroupMemberById = async (req, res, next) => {
  try {
    const doc = await GroupMember.findById(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Not found groupMember",
      });
    } else {
      console.log(doc);
      res.status(201).json({
        message: "Here is the searched group",
        groupMember: doc,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createGroupMember = async (req, res, next) => {
  try {
    const groupMember = new GroupMember(req.body);
    const doc = await groupMember.save();
    console.log(doc);
    res.status(201).json({
      message: "groupMember created",
      groupMember: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateGroupMemberById = async (req, res, next) => {
  try {
    const result = await GroupMember.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!result) {
      res.status(404).json({
        message: "Not found groupMember",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "Updated groupMember",
        groupMember: result,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteGroupMemberById = async (req, res, next) => {
  try {
    const result = await GroupMember.findOneAndDelete(req.params.id);
    if (!result) {
      res.status(404).json({
        message: "Not found groupMember",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "groupMember Deleted",
        groupMember: result,
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
  getAllGroupMembers,
  getGroupMemberById,
  createGroupMember,
  updateGroupMemberById,
  deleteGroupMemberById,
};
