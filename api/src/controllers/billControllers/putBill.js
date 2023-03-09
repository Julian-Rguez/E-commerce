const { Bill } = require("../../db");

module.exports = putBill = async (req, res) => {
  try {
    const { id, pagado} = req.body;
    if (id) {
        const bill = await Bill.update({ pagado: pagado }, {
            where: {
              id: id
            }
          });
          if(bill[0] == 1){
            return res.status(200).json({ message: "Updated information" });           
          }
          return res.status(200).json({ message: "Invoice not found" });         
    } else {
        return res.status(400).json({ message: "Requires id" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};