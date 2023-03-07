const { Router } = require("express");
const userRouter = Router();

const getUsers = require("../controllers/userControllers/getUsers.js");
const getUserById = require("../controllers/userControllers/getUserById.js");
const postUser = require("../controllers/userControllers/postUser.js");
const deleteUser = require("../controllers/userControllers/deleteUser.js");

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", postUser);
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
