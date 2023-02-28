const { Router } = require('express');
const axios = require("axios")
const { Foods } = require("../../src/db.js")
const router = Router();

router.get("/home", async(req, res)=>{
    res.status(200).send("Home")
})

module.exports = router;