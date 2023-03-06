const { User } = require("../../db");

module.exports = postUser = async (req, res) => {
  try {
    const { mail, id, password } = req.body;
    if (mail && id && password) {
      const use = await User.create({ mail, id, password });
      return res.status(200).json({ msg: "successfully created" });
    } else {
      return res.status(400).json({ msg: "id, mail and password is required" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
