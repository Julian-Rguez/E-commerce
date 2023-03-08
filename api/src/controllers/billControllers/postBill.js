const { Bill, User } = require("../../db");

module.exports = postBill = async (req, res) => {
  try {
    const { id, numeroFactura, productos, valor, descuento, estado, pagado, idUsuario } = req.body;
    if (id) {
        const user = await User.findByPk(idUsuario)
      const bill = await Bill.create({ id, numeroFactura, productos, valor, descuento, estado, pagado });
      await user.addBill(bill)
      return res.status(200).json({ message: "Successfully created" });
    } else {
      return res.status(400).json({ message: "Roll and mail is required" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
