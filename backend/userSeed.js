import User from "./models/User.js";
import bcrypt from "bcryptjs";
import connectToDatabase from "./db/db.js";

const seedUser = async () => {
  await connectToDatabase();

  const existingUser = await User.findOne({ email: "admin@example.com" });
  if (existingUser) {
    console.log("User already exists");
    return;
  }

  const hashedPassword = await bcrypt.hash("admin", 10);

  const newUser = new User({
    name: "Admin",
    email: "admin@example.com",
    password: hashedPassword,
    role: "admin",
  });

  await newUser.save();
  console.log("✅ User created successfully");
};

seedUser();
