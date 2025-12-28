import express from "express";
const router = express.Router();
import catchAsync from "../utils/catchAsync.js";
import {isLoggedIn}from "../middleware.js";
import { validateCampground, isVerified } from "../middleware.js";
import { isAuthor } from "../middleware.js";
import { index ,newCampgroundForm, createCampground, showCampground, renderEditForm, updateCampground, deleteCampground } from "../controllers/campground.js";
import multer from "multer";
import { storage } from "../cloudinary/index.js";
const upload = multer({ storage })
import { home } from "../controllers/campground.js";

router.route('/home')
  .get(home)

router.route('/')
  .get(catchAsync(index))
  .post(isLoggedIn, upload.array('images'), validateCampground, catchAsync(createCampground));
 

router.get("/new", isLoggedIn, isVerified, newCampgroundForm)

router.route("/:id")
  .get(catchAsync(showCampground))
  .put(isLoggedIn,isAuthor,upload.array("images"),validateCampground, catchAsync(updateCampground))
  .delete(catchAsync(deleteCampground))

router.get("/:id/edit",isLoggedIn,isAuthor,catchAsync(renderEditForm))

export default router;
