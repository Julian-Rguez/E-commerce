const { Bill } = require("../../db");

module.exports = getUsers = async (req, res) => {
  try {
    const uses = await Bill.findAll();
    if (uses) {
      res.status(200).send(uses);
    } else {
      res.status(200).send({ message: "No bills" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
