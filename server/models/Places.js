const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  type: {
    type: String,
  },
  timings: {
    type: String,
  },
  phone: {
    type: {
      location1: String,
      location2: String,
      location3: String,
    }
  },
  email: {
    type: String,
  },
  discounts: {
    type: String,
  },
  images: {
    type: {
      link1: String,
      link2: String,
      link3: String,
    },
  },
  description: {
    type: String,
  },
  mealOptions: {
    type: String,
  },
  diningOptions: {
    type: String,
  },
  rating: {
    type: String, 
  },
});

const PlaceModel = mongoose.model("places", PlaceSchema);
module.exports = PlaceModel;
