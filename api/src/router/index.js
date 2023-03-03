const { Router } = require('express');
const axios = require("axios")
const { Food, User } = require("../../src/db.js")
const router = Router();
const foods = require('../../src/fileTemp');

function joins(name, names){
    const name1 = name.toLowerCase()
    const name2 = names.toLowerCase()
    let co = []
    for(var i = 0; i < name.length; i++){
      co.push(name2[i])
    }
    let cc = co.join("")
    if(name1 == cc){
      return names
    } else {
      return "no se encontro"
    }
  }

router.get("/foods", async(req, res)=>{
    try {
        const {name} = req.query
        let resp = []
        let rep = []
        if(name){
            resp = []
            let mape = foods.map((i)=> de={
                id: i.id,
                available: i.available,
                type: i.type,
                name: joins(name, i.name),
                fat: i.fat,
                image: i.image,
                review: i.review.map((j)=> j.name),
                sodium: i.sodium,
                sugar: i.sugar,
                price: i.price,
                description: i.description,
                discount: i.discount,
                qualification: i.qualification,
                amount: i.amount
            })
            const filds = mape.filter(e=> e.name !== "no se encontro");
            const users = await Food.findAll()
            let mape2 = users.map((i)=> de={
                id: i.id,
                available: i.available,
                type: i.type,
                name: joins(name, i.name),
                fat: i.fat,
                image: i.image,
                review: i.review.map((j)=> j.name),
                sodium: i.sodium,
                sugar: i.sugar,
                price: i.price,
                description: i.description,
                discount: i.discount,
                qualification: i.qualification,
                amount: i.amount
            })
            const fild = mape2.filter(e=> e.name !== "no se encontro");
            if(fild.length > 0){
                for(var i = 0; i < fild.length; i++){
                    resp.push(fild[i])
                }
            }
            if(filds.length > 0){
                for(var i = 0; i < filds.length; i++){
                    resp.push(filds[i])
                }
            } 
            if(resp.length < 1){
                resp[0] = {message:"no breed was found by that name"}
            }
            return res.status(200).send(resp)
        }
        rep = []
        const uses = await Food.findAll()
        if(uses.length > 0){
            for(var i = 0; i < uses.length; i++){
                rep.push(uses[i])
            }
        }
        if(foods.length > 0 ){
            for(var i = 0; i < foods.length; i++){
                rep.push(foods[i])
            }
        }
        res.status(200).send(rep)
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
        const { name, id, image, review, discount, description, price, sugar, sodium, fat, type, available, qualification, amount } = req.body
        if( name ){
            const use = await Food.create({ name, id, image, review, discount, description, price, sugar, sodium, fat, type, available, qualification, amount })
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

router.get("/user/:id", async (req, res)=>{
    const { id } = req.params
    try {
        const useSql = await User.findAll({where: {id: id}})
        if(useSql.length > 0){
            res.status(200).send(useSql)
        } else {
            res.status(200).send({message: "It was not found"})
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.delete("/user/:id", async (req, res)=>{
    try {
        const { id } = req.params
        if( id ){
            const use = await User.destroy({where: {id: id}})
            if(use === 0){
                return res.status(200).send({message: "It was not found"})
            }
            return res.status(200).send({message: "deleted successfully"})
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.delete("/food/:id", async (req, res)=>{
    try {
        const { id } = req.params
        if( id ){
            const use = await Food.destroy({where: {id: id}})
            if(use === 0){
                return res.status(200).send({message: "It was not found"})
            }
            return res.status(200).send({message: "deleted successfully"})
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;