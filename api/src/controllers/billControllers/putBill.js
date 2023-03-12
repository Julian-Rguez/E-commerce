const { Bill, User } = require("../../db");

module.exports = putBill = async (req, res, next) => {
  try {
    const { id, paid } = req.body;
    if (id) {
      const bill = await Bill.update(
        { paid: paid },
        {
          where: {
            id: id,
          },
        }
      );
      if (bill[0] == 1) {
        /* to mailer */
        //////////////////////////////////////////////////////////
        let billInfo = await Bill.findByPk(id);
        let userInfo = await User.findByPk(billInfo.userId);
        req.body.mail = userInfo.mail;
        req.body.roll = userInfo.roll;
        req.body.billId = billInfo.billId;
        req.body.products = billInfo.products;
        req.body.value = billInfo.value;
        req.body.discount = billInfo.discount;
        req.body.mailType = "pay";
        ////////////////////////////////////////////////////////////
        return res.status(200).json({ message: "Updated information" }), next();
      }
      return res.status(200).json({ message: "Invoice not found" });
    } else {
      return res.status(400).json({ message: "Requires id" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
