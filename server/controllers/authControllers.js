const Places = require("../models/Places");
const test = (req, res) => {
  res.json("test is working");
};
//register page
const registerPlace = async (req, res) => {
  try {
    const { name, location, description } = req.body;
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    if (!type) {
      return res.json({
        error: "type is required",
      });
    }
    if (!description) {
      return res.json({
        error: "lname is required",
      });
    }
    const eExist = await User.findOne({ location });
    if (eExist) {
      return res.json({
        error: "location already exist",
      });
    }
    const places = await Places.create({
      name,
      location,
      description,
    });
    return res.json(places);
  } catch (error) {
    console.log(error);
  }
};

//login page

module.exports = {
  test,
  registerPlace,
};
