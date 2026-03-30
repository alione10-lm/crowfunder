import User from "../models/User.model.js";
import { generateToken } from "../utils/generateToken.js";
import { hashPassword, comparePassword } from "../utils/hashPassword.js";

export const loginService = async (email, password) => {
    try {
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            throw new Error("Invalid credentials");
        }
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid credentials");
        }
        const token = generateToken(user);
        return { token, user };
    } catch (error) {
        throw error;
    }
};

export const registerService = async (name, email, password, role) => {
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error("Email already in use");
        }
        if (!["owner", "investor"].includes(role)) {
            throw new Error("Role must be owner or investor");
        }

        const hashedPassword = await hashPassword(password);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        });
        const token = generateToken(user);
        return { token, user };
    } catch (error) {
        throw error;
    }
};
