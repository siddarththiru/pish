const Places = require("../models/Places");
const test = (req, res) => {
  res.json("test is working");
};
const registerPlace = async (req, res) => {
  try {
    const { name, location, description,rating } = req.body;
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    if (!location) {
      return res.json({
        error: "location is required",
      });
    }
    if (!description) {
      return res.json({
        error: "description's is required",
      });
    }if (!rating) {
      return res.json({
        error: "description's is required",
      });
    }
    const eExist = await Places.findOne({ location });
    if (eExist) {
      return res.json({
        error: "location already exist",
      });
    }
    const places = await Places.create({
      name,
      location,
      description,
      rating
    });
    return res.json(places);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  test,
  registerPlace,
};
