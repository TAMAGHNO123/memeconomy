const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const memeSchema = new mongoose.Schema({
  memeId: { type: mongoose.Schema.Types.ObjectId, ref: "Meme" },
  quantity: { type: Number, default: 0 },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  portfolio: [memeSchema],
  virtualCurrency: { type: Number, default: 1000 }, // Initial virtual currency
  profile: {
    bio: { type: String, default: "" },
    avatar: { type: String, default: "" }
  }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", userSchema);