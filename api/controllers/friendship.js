const Friendship = require("../models/friendship");

const getAllFriendships = async (req, res, next) => {
  try {
    const docs = await Friendship.find();
    if (docs.length === 0) {
      res.status(404).json({
        message: "Not Found friendship",
        friendship: [],
      });
    } else {
      console.log(docs);
      res.status(201).json({
        message: "Here are all Friendships",
        friendship: docs,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getFriendshipById = async (req, res, next) => {
  try {
    const doc = await Friendship.findById(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Not found friendship",
      });
    } else {
      console.log(doc);
      res.status(201).json({
        message: "Here is frindship",
        friendship: doc,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createFriendship = async (req, res, next) => {
  try {
    const friendship = new Friendship(req.body);
    const doc = await friendship.save();
    console.log(doc);
    res.status(201).json({
      message: "friendship is created",
      friendship: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateFriendshipById = async (req, res, next) => {
  try {
    const result = await Friendship.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!result) {
      res.status(404).json({
        message: "Not Found freindship",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "friendship updated",
        friendship: result,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteFriendshipById = async (req, res, next) => {
  try {
    const result = await Friendship.findOneAndDelete(req.params.id);
    if (!result) {
      res.status(404).json({
        message: "Not found friendship",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "Friendship deleted",
        friendship: result,
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
  getAllFriendships,
  getFriendshipById,
  createFriendship,
  updateFriendshipById,
  deleteFriendshipById,
};
