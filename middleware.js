import { campgroundSchema , reviewSchema } from "./validationSchema.js";
import ExpressError from "./utils/ExpressError.js";
import Campground from "./Models/campground.js";
import Review from "./Models/review.js";

export const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    req.flash('error', 'You must be signed in first!');
    return res.redirect('/login');
  }
  next();
};

export const storeReturnTo = (req, res, next) => {
  if (req.session.returnTo) {
    res.locals.returnTo = req.session.returnTo;
  }
  next();
};

export const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(el => el.message).join(',');
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
}

export const isAuthor = async(req,res,next) =>{
  const {id} = req.params;
  const camp = await Campground.findById(id);
  if(!camp.author.equals(req.user._id)){
    req.flash('error','You do not have permission to do that!');
    return res.redirect(`/campgrounds/${id}`);
  }
  next();
}

export const isReviewAuthor = async(req,res,next) =>{
  const { reviewId , id} = req.params;
  const review = await Review.findById(reviewId);
  if(!review.author.equals(req.user._id)){
    req.flash('error','You do not have permission to do that!');
    return res.redirect(`/campgrounds/${id}`);
  }
  next();
}

export const validateReview = (req,res,next) => {
  const { error } = reviewSchema.validate(req.body);
    if (error) {
    const msg = error.details.map(el => el.message).join(',');
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
}

export const isVerified = (req, res, next) => {
  if (!req.user.isVerified) {
    req.flash("error", "Please verify your email first");
    return res.redirect("/login");
  }
  next();
};
