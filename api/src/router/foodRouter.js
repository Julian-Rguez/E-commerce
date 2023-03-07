const { Router } = require("express");
const foodRouter = Router();

const getFoods = require("../controllers/foodControllers/getFoods");
const getFoodById = require("../controllers/foodControllers/getFoodById");
const postFood = require("../controllers/foodControllers/postFood.js");
const deleteFood = require("../controllers/foodControllers/deleteFood.js");

foodRouter.get("/", getFoods);
foodRouter.get("/:id", getFoodById);
foodRouter.post("/", postFood);
foodRouter.delete("/:id", deleteFood);

module.exports = foodRouter;
