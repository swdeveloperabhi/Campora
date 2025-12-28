import express from "express";
import { createUser, loginUser, logoutUser, renderRegisterForm, renderLoginForm } from "../controllers/user.js";
import { storeReturnTo, isLoggedIn } from "../middleware.js";

const router = express.Router();


// ===== REGISTER =====
router.get('/register', renderRegisterForm)
router.post("/register", createUser);

// ===== LOGIN =====
router.get("/login",renderLoginForm)
router.post("/login", storeReturnTo,loginUser);

// ===== LOGOUT =====
router.get("/logout", logoutUser);



export default router;
