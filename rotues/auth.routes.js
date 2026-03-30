import { Router } from "express";

const router = Router();
import { login, register } from "../contollers/auth.controller.js";

router.post("/login", login);
router.post("/register", register);

export default router;
