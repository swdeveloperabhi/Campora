import mongoose from "mongoose";

const { Schema, model } = mongoose;

const reviewSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
  },
  author:{
    type : Schema.Types.ObjectId,
    ref : 'User'
  }
})


const Review = mongoose.models.Review || model("Review", reviewSchema);

export default Review;
