import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/devcase");
    console.log("✅ MongoDB bağlantisi basarili");
  } catch (err) {
    console.error("❌ MongoDB bağlanti hatasi:", err);
    process.exit(1);
  }
};
