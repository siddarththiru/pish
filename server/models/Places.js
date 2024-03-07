const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const PlaceModel = mongoose.model("places", PlaceSchema);
module.exports = PlaceModel;
