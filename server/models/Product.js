const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
    maxlength: 20,
  },
  price: {
    required: true,
    type: Number,
    min: 0,
    max: 10000000,
  },
  description: {
    required: true,
    type: String,
    maxlength: 100,
  },
  mainImage: {
    required: true,
    type: String,
  },
  additionalImages: [
    {
      type: String,
    },
  ],
  category: {
    required: true,
    type: String,
  },
  rating: {
    required: false,
    type: Number,
    min: 0,
    max: 5,
  },
  numReviews: {
    required: false,
    type: Number,
    min: 0,
    max: 1000,
  },
});

module.exports= mongoose.model("Product",productSchema);



