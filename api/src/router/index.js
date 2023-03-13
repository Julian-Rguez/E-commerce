const { Router } = require("express");
const router = Router();
const getFoods = require("../controllers/foodControllers/getFoods.js");
const getFoodById = require("../controllers/foodControllers/getFoodById");
const postFood = require("../controllers/foodControllers/postFood.js");
const deleteFood = require("../controllers/foodControllers/deleteFood.js");
const getUsers = require("../controllers/userControllers/getUsers.js");
const getUserById = require("../controllers/userControllers/getUserById.js");
const postUser = require("../controllers/userControllers/postUser.js");
const deleteUser = require("../controllers/userControllers/deleteUser.js");
const postBill = require("../controllers/billControllers/postBill");
const putBill = require("../controllers/billControllers/putBill");
const putFood = require("../controllers/foodControllers/putFood.js");
const welcomeMail  = require("../mail/emailer.js");
const postPayment = require("../payment/index.js");

const foodRouter = require("./foodRouters.js");
const userRouter = require("./userRouter.js");
const billRouter = require("./billRouters.js");

router.use("/foods", foodRouter);
router.use("/users", userRouter);
router.use("/bills", billRouter);

router.post("/bill", postBill);
router.put("/billPut", putBill);

router.post("/payment", postPayment);
module.exports = router;
