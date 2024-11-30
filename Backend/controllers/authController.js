const User = require("../models/User");
const Token = require("../models/Token");
const { sendEmail } = require("../utils/sendEmail");
const { generateToken } = require("../utils/generateToken");

exports.register = async (req, res) => {
  try {
    const { name, email, password, bio, avatar } = req.body;
    const user = new User({ name, email, password, profile: { bio, avatar } });
    await user.save();

    const token = new Token({ userId: user._id, token: generateToken(user._id) });
    await token.save();

    const verificationUrl = `${process.env.CLIENT_URL}/verify/${token.token}`;
    await sendEmail(user.email, "Verify your email", `Click here to verify your email: ${verificationUrl}`);

    res.status(201).json({ message: "User registered successfully. Please check your email to verify your account." });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;

    const verificationToken = await Token.findOne({ token });
    if (!verificationToken) return res.status(400).json({ message: "Invalid or expired token." });

    const user = await User.findById(verificationToken.userId);
    if (!user) return res.status(404).json({ message: "User not found." });

    user.isVerified = true;
    await user.save();

    await verificationToken.deleteOne();

    res.status(200).json({ message: "Email verified successfully. You can now log in!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};