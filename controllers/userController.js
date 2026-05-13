const User = require("../models/User");

exports.getAllUsers = async (req, res) => {

    const users = await User.find();

    res.json(users);
};

exports.getProfile = async (req, res) => {

    const user = await User.findById(req.user.id);

    res.json(user);
};

exports.updateProfile = async (req, res) => {

    const updatedUser = await User.findByIdAndUpdate(
        req.user.id,
        req.body,
        { new: true }
    );

    res.json(updatedUser);
};

exports.deleteUser = async (req, res) => {

    await User.findByIdAndDelete(req.params.id);

    res.json({
        message: "User deleted"
    });
};