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

router.get("/foods", getFoods);
router.get("/food/:id", getFoodById);
router.post("/food", postFood);
router.delete("/food/:id", deleteFood);

router.get("/users", getUsers);
router.get("/user/:id", getUserById);
router.post("/user", postUser);
router.delete("/user/:id", deleteUser);

router.post("/bill", postBill)
router.put("/billPut", putBill)
module.exports = router;
