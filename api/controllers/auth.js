import User from "../models/User.js";
import bcrypt from "bcryptjs";

// আগের মত লিখতে পারতাম পাসওয়ার্ড নিয়ে কাজ করবো দেখে এভাবে ও লিখতে পারি
export const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User has been created");
  } catch (err) {
    next(err);
  }
};
