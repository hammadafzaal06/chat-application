const User = require("../models/users");

const getAllUsers = async (req, res, next) => {
  try {
    const docs = await User.find();
    if (docs.length === 0) {
      res.status(404).json({
        message: "There is no user in Database",
        user: [],
      });
    } else {
      console.log(docs);
      res.status(201).json({
        message: "Here is all the Users",
        user: docs,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getUserById = async (req, res, next) => {
  try {
    const doc = await User.findById(req.params.id);
    if (!doc) {
      res.status(404).json({
        message: "Not found user",
      });
    } else {
      console.log(doc);
      res.status(201).json({
        message: "Here is the Searched user",
        user: doc,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createUser = async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      lastLoggedIn: req.body.lastLoggedIn,
      status: req.body.status,
    });
    const doc = await user.save();
    console.log(user);
    res.status(201).json({
      message: "user created",
      user: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateUserById = async (req, res, next) => {
  try {
    const result = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          lastLoggedIn: req.body.lastLoggedIn,
          status: req.body.status,
        },
      },
      { new: true }
    );
    if (!result) {
      res.status(404).json({
        message: "Not found user",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "User updated",
        user: result,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    const result = await User.findOneAndDelete(req.params.id);
    if (!result) {
      res.status(404).json({
        message: "Not found User",
      });
    } else {
      console.log(result);
      res.status(201).json({
        message: "User Deleted",
        user: result,
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
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
