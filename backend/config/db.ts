import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB bağlantisi basarili");
  } catch (err) {
    console.error("❌ MongoDB bağlanti hatasi:", err);
    process.exit(1);
  }
};
