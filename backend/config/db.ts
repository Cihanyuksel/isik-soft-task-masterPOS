import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await await mongoose.connect(process.env.DATABASE_URL);
    console.log("✅ MongoDB bağlantisi basarili");
  } catch (err) {
    console.error("❌ MongoDB bağlanti hatasi:", err);
    process.exit(1);
  }
};
