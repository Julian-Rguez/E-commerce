const { Food } = require("../../db");

module.exports = deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const use = await Food.destroy({ where: { id: id } });
      if (use === 0) {
        return res.status(200).send({ message: "It was not found" });
      }
      return res.status(200).send({ message: "deleted successfully" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
