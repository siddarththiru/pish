const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PlaceModel = require("./models/Places.js");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://pish-admin:admin@pish.kt4ch8v.mongodb.net/pish?retryWrites=true&w=majority&appName=Pish"
);

app.get("/getPlaces", (req, res) => {
  PlaceModel.find()
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/createPlace", async (req, res) => {
  const place = req.body;
  const newPlace = new PlaceModel(place);
  await newPlace.save();

  res.json(place);
});

app.listen(3001, () => {
  console.log("sever running");
});
