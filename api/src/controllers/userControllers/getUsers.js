const { User } = require("../../db");

module.exports = getUsers = async (req, res) => {
  try {
    const uses = await User.findAll();
    if (uses) {
      res.status(200).send(uses);
    } else {
      res.status(200).send({ message: "No users" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
