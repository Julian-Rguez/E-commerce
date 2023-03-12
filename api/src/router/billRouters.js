const { Router } = require("express");
const billRouter = Router();

const getBills = require("../controllers/billControllers/getBills");
const postBill = require("../controllers/billControllers/postBill");
const putBill = require("../controllers/billControllers/putBill");
const nodemail  = require("../mail/emailer.js");

billRouter.get("/", getBills);
billRouter.post("/", postBill);
billRouter.put("/", putBill, nodemail);

module.exports = billRouter