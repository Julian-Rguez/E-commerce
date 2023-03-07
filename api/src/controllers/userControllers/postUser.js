const { User } = require("../../db");

module.exports = postUser = async (req, res) => {
  try {
    const { mail, roll, activename, telephone,  direction, favorites,active } = req.body;
    if (mail && roll) {
      await User.create({ mail, roll, activename, telephone,  direction, favorites,active });
      return res.status(200).json({ msg: "successfully created" });
    } else {
      return res.status(400).json({ msg: "roll and mail is required" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
