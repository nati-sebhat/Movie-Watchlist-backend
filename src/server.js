import express from "express"
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db.js";

import movieRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js";

config();
connectDB();

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/movies", movieRoutes);
app.use("/auth", authRoutes);


const PORT = 5001;
const server = app.listen(PORT, () => {
   console.log(`Server running on PORT ${PORT}`);
});

// Handle unhandled promise rejections (e.g., database connection errors)
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  await disconnectDB();
  process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM signal received. Closing server gracefully...");
  server.close(async () => {
    await disconnectDB();
    console.log("Server and database connection closed.");
    process.exit(0);
  });
});