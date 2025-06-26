import app from "./app";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Sunucu http://localhost:${PORT} adresinde calisiyor`);
  });
});
