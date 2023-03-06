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
      });
      return res.status(200).json({ message: "successfully created" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
