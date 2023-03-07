const { Food } = require("../../db");

module.exports = deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const use = await Food.destroy({ where: { id: id } });
      if (use === 0) {
        return res.status(200).send({ message: "Food not found" });
      }
      return res.status(200).send({ message: "Successfully removed" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
