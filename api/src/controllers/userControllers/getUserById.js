const { User } = require("../../db");

module.exports = getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const useSql = await User.findAll({ where: { id: id } });
    if (useSql.length > 0) {
      res.status(200).send(useSql);
    } else {
      res.status(200).send({ message: "It was not found" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
