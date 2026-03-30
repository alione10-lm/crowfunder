import { Router } from "express";

const router = Router();
import { login, register } from "../contollers/auth.controller.js";
import {
    handleValidation,
    validateLogin,
    validateRegister,
} from "../middlewares/userValidator.middleware.js";

router.post("/login", validateLogin, handleValidation, login);
router.post("/register", validateRegister, handleValidation, register);

export default router;
