import dotenv from "dotenv";
dotenv.config({ path: ".env" }); 


import express from "express";
import mongoose from "mongoose";
import path from 'path';
import session from "express-session";
import flash from "connect-flash";
import { fileURLToPath } from 'url';
import methodOverride from "method-override";
import ejsMate from "ejs-mate";
import ExpressError from "./utils/ExpressError.js";
import campgroundsRoute from "./routes/campgrounds.js"
import reviewsRoute from "./routes/reviews.js";
import usersRoute from "./routes/auth.js";
import passport from "passport";
import LocalStrategy from 'passport-local';
import User from "./Models/user.js";
import MongoSanitize from "express-mongo-sanitize";
import { sanitizeV5 } from "./utils/mongoSanitizeV5.js";
import MongoStore from "connect-mongo";



 


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.set('query parser', 'extended');



app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, 'views'));
app.use(express.static("public"));
app.use(sanitizeV5({ replaceWith: '_' }));

const dbUrl = 'mongodb://localhost:27017/campora';
 

async function startServer() {
  try {
    await mongoose.connect(dbUrl);
    console.log("Database Connected");

    app.listen(3000, () => {
      console.log(`Server running on port ${3000}`);
    });
  } catch (err) {
    console.error("DB connection failed:", err);
  }
}

startServer();

const store = MongoStore.create({
  mongoUrl: dbUrl,
  secret : 'thisshouldbettersecret!',
  touchAfter: 24 * 3600, 
});

store.on("error", function(e) {
  console.log("SESSION STORE ERROR",e)
})

const sessionConfig = {
  MongoStore,
  name : 'session',
  secret : 'thisshouldbettersecret!',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    // secure : true,
    expires : Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  }
}

app.use(session(sessionConfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
})

app.use("", usersRoute)
app.use('/campgrounds', campgroundsRoute);
app.use('/campgrounds/:id/reviews', reviewsRoute);


app.all(/(.*)/, (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});


app.use((err, req, res, next) => {
  if (typeof err === "string") {
    err = new Error(err);
  }

  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Oh No, Something Went Wrong!";
  res.status(statusCode).render("campgrounds/error", { err });
});




