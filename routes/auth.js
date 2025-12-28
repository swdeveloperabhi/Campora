import express from "express";
import { createUser, loginUser, logoutUser, verifyUser , renderRegisterForm, renderLoginForm } from "../controllers/user.js";

const router = express.Router();


// ===== REGISTER =====
router.get('/register', renderRegisterForm)
router.post("/register", createUser);

// ===== LOGIN =====
router.get("/login",renderLoginForm)
router.post("/login", loginUser);

// ===== LOGOUT =====
router.get("/logout", logoutUser);

// ===== EMAIL VERIFICATION =====
router.get("/verify/:token", verifyUser);


export default router;
