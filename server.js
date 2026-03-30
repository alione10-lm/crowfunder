import express from "express";
import connectDB from "./config/db.js";

import authRoutes from "./rotues/auth.routes.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

// for testing
app.get("/", (req, res) => {
    res.json({ message: "done" });
});

// auth routes

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
    console.log("server runnig on ", process.env.PORT);
});
