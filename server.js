import express from "express";
import connectDB from "./config/db.js";

import authRoutes from "./rotues/auth.routes.js";

import { authMiddleware } from "./middlewares/auth.middleware.js";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

connectDB();

// for testing
app.get("/", authMiddleware, (req, res) => {
    res.json({ message: "done", user: req.user });
});

// auth routes

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
    console.log("server runnig on ", process.env.PORT);
});
