import crypto from "crypto";
import User from "../Models/user.js";
import { sendVerificationEmail, sendWelcomeEmail } from "../utils/email.js";
import passport from "passport";

// ===== SIGNUP =====
export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const token = crypto.randomBytes(32).toString("hex");

    const user = new User({
      username,
      email,
      isVerified: false,
      verificationToken: token,
    });

    await User.register(user, password); // Passport-local

    const verifyLink = `${process.env.BASE_URL}/verify/${token}`;
    await sendVerificationEmail(user.email, verifyLink);

    req.flash("success", "Account created! Please verify your email to continue.");
    res.redirect("/login");
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/register");
  }
};

// ===== EMAIL VERIFICATION =====
export const verifyUser = async (req, res) => {
  try {
    const user = await User.findOne({ verificationToken: req.params.token });

    if (!user) {
      req.flash("error", "Invalid or expired verification link");
      return res.redirect("/login");
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    await sendWelcomeEmail(user.email, user.username);

    req.flash("success", "Email verified successfully!");
    res.redirect("/login");
  } catch (err) {
    req.flash("error", "Verification failed");
    res.redirect("/login");
  }
};

// ===== LOGIN =====
export const loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      req.flash("error", "Invalid username or password");
      return res.redirect("/login");
    }
    if (!user.isVerified) {
      req.flash("error", "Please verify your email first!");
      return res.redirect("/login");
    }
    req.login(user, (err) => {
      if (err) return next(err);
      req.flash("success", `Welcome back, ${user.username}!`);
      res.redirect("/campgrounds");
    });
  })(req, res, next);
};

// ===== LOGOUT =====
export const logoutUser = (req, res) => {
  req.logout(() => {
    req.flash("success", "Logged out successfully!");
    res.redirect("/campgrounds/home");
  });
};

export const renderRegisterForm = (req,res) =>{
  res.render('users/register');
}

export const renderLoginForm = (req,res) => {
  res.render('users/login');
}
