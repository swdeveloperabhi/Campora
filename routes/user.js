// import express from 'express';
// import catchAsync from "../utils/catchAsync.js"
// import passport from 'passport';
// import { storeReturnTo } from '../middleware.js';
// import { renderRegisterForm, createUser, renderLoginForm, loginUser, logoutUser } from '../controllers/user.js';

// const router = express.Router();

// router.route("/register")
//   .get(renderRegisterForm )
//   .post(catchAsync(createUser))

// router.route("/login")
//   .get(renderLoginForm)
//   .post(storeReturnTo,passport.authenticate("local", {failureFlash: true, failureRedirect: "/login",}), loginUser)

// router.get('/logout',logoutUser);

// export default router;