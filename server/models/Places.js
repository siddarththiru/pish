const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  timings: {
    type: String,
    required: true,
  },
  phone: {
    type: {
      location1: String,
      location2: String,
      location3: String,
    },
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  discounts: {
    type: String,
    required: true,
  },
  images: {
    type: {
      link1: String,
      link2: String,
      link3: String,
    },
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  mealOptions: {
    type: String,
    required: true,
  },
  diningOptions: {
    type: String,
    required: true,
  },
  rating: {
    type: Number, 
    default: 0, 
  },
});

const PlaceModel = mongoose.model("places", PlaceSchema);
module.exports = PlaceModel;
