const { Router } = require('express');
const axios = require("axios")
const { Food, User } = require("../../src/db.js")
const router = Router();
const foods = require('../../src/fileTemp');

router.get("/foods", async(req, res)=>{
    try {
        const uses = await Food.findAll()
        if(uses.length > 0){
            for(var i = 0; i < uses.length; i++){
                foods.push(uses[i])
            }
        }
        res.status(200).send(foods)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.get("/users", async(req, res)=>{
    try {
        const uses = await User.findAll()
        if(uses){
            res.status(200).send(uses)
        } else {
            res.status(200).send({message: "no users"})
        } 
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post("/createFood",async (req, res)=>{
    try {
        const { name, id, image, review, discount, description, price, sugar, sodium, fat, type, available } = req.body
        if( name ){
            const use = await Food.create({ name, id, image, review, discount, description, price, sugar, sodium, fat, type, available })
            return res.status(200).send({message: "successfully created"})
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post("/createUser",async (req, res)=>{
    try {
        const { mail, id, password } = req.body
        if( mail && id && password){
            const use = await User.create({ mail, id, password })
            return res.status(200).send({message: "successfully created"})
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.get("/food/:id", async (req, res)=>{
    const { id } = req.params
    try {
        const useSql = await Food.findAll({where: {id: id}})
        const useArray = foods.filter(e => e.id === id)
        if(useSql.length > 0){
            res.status(200).send(useSql)
        } else if(useArray.length > 0){
            res.status(200).send(useArray)
        } else {
            res.status(200).send({message: "It was not found"})
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;