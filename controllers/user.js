import User from "../Models/user.js";
import passport from "passport";

// ===== SIGNUP =====
export const createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const user = new User({
      username,
      email,
      isVerified: true, // verification bypassed for now
    });

    const registeredUser = await User.register(user, password);

    req.login(registeredUser, (err) => {
      if (err) return next(err);

      const redirectUrl = req.session.returnTo || "/campgrounds";
      delete req.session.returnTo;

      req.flash("success", `Welcome to Campora, ${registeredUser.username}!`);
      res.redirect(redirectUrl);
    });

  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/register");
  }
};

// ===== LOGIN =====
export const loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) return next(err);
    if (!user) {
      req.flash("error", "Invalid username or password");
      return res.redirect("/login");
    }

    req.login(user, (err) => {
      if (err) return next(err);

      
      const redirectUrl = res.locals.returnTo || "/campgrounds";
      delete req.session.returnTo;

      req.flash("success", `Welcome back, ${user.username}!`);
      res.redirect(redirectUrl);
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

export const renderRegisterForm = (req, res) => {
  res.render("users/register");
};

export const renderLoginForm = (req, res) => {
  res.render("users/login");
};
