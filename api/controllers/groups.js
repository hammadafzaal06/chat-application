const Group = require("../models/group");

const getAllGroups = async (req, res, next) => {
  try {
    const docs = await Group.find();
    if (docs.length === 0) {
      res.status(404).json({
        message: "Not found Group",
        group: [],
      });
    } else {
      console.log(docs);
      res.status(201).json({
        message: "Here is all the Groups",
        group: docs,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getGroupById = async (req, res, next) => {
  try {
    const doc = await Group.findById(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Not found Group",
      });
    } else {
      console.log(doc);
      res.status(201).json({
        message: "Here is the Searched Group",
        group: doc,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createGroup = async (req, res, next) => {
  try {
    const group = new Group(req.body);
    const doc = await group.save();
    console.log(doc);
    res.status(201).json({
      message: "Group is created",
      group: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateGroupById = async (req, res, next) => {
  try {
    const result = await Group.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!result) {
      res.status(404).json({
        message: "Not Found Group",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "Group updated",
        group: result,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteGroupById = async (req, res, next) => {
  try {
    const result = await Group.findOneAndDelete(req.params.id);
    if (!result) {
      res.status(404).json({
        message: "Not Found Group",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "Group Deleted",
        group: result,
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
  getAllGroups,
  getGroupById,
  createGroup,
  updateGroupById,
  deleteGroupById,
};
