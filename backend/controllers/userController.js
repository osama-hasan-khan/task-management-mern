import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs";
import createToken from "../utils/createToken.js";

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new Error("Please fill all the inputs.");
  }

  const userExists = await User.findOne({ email });
  if (userExists) res.status(400).send("User already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    createToken(res, newUser._id);

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in creating user: ", err.message);
  }
});

const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) return res.status(400).json({ error: "Invalid email" });

    if (existingUser) {
      const isPasswordValid = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (isPasswordValid) {
        createToken(res, existingUser._id);

        res.status(201).json({
          _id: existingUser._id,
          username: existingUser.username,
          email: existingUser.email,
        });

        return;
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error in loginUser: ", error.message);
  }
});

const logoutCurrentUser = asyncHandler(async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httyOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in logout user: ", err.message);
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in get all users: ", err.message);
  }
});

const updateCurrentUserProfile = asyncHandler(async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const userId = req.user._id;

    let user = await User.findById(userId);
    if (!user) return res.status(400).json({ error: "User not found" });

    if (req.params.userId !== userId.toString())
      return res
        .status(400)
        .json({ error: "You cannot update other user's profile" });

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
    }

    user.username = username || user.username;
    user.email = email || user.email;

    user = await user.save();

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in update user : ", err.message);
  }
});

export {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  updateCurrentUserProfile,
};
