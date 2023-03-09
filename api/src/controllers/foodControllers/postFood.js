const { Food } = require("../../db");

module.exports = postFood = async (req, res) => {
  try {
    const {
      name,
      id,
      image,
      review,
      discount,
      description,
      price,
      sugar,
      sodium,
      fat,
      type,
      available,
      qualification,
      amount,
      favorite,
    } = req.body;
    if (name) {
      const use = await Food.create({
        name,
        id,
        image,
        review,
        discount,
        description,
        price,
        sugar,
        sodium,
        fat,
        type,
        available,
        qualification,
        amount,
        favorite
      });
      return res.status(200).json({ message: "Successfully created" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
