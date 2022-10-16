const express = require("express")
const router = express.Router()

// favourite animals 
router.get("/animals", (req, res)=> {
    const faveAnimals = ["sand crab", "corny jokes", "benedict the sea cucumber"]
    res.render('animals.ejs', {animals: faveAnimals})
})

// favourite foods
router.get("/foods", (req, res)=> {
    const faveFoods = ["sushi", "cinnabon", "manago"]
    res.render('foods.ejs', {foods: faveFoods})
})

module.exports = router 