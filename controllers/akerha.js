const express = require("express")
const router = express.Router()


// routes go here
// favourite movies
router.get("/movies", (req, res)=> {
    const worestMovies = ["RomComs", "Anything Romantic", "Anything with animals dying"]
    res.render('movies.ejs', {movies: worestMovies})
})

// favourite products
router.get("/products", (req, res)=> {
    const worestProducts = ["coal", "olive oil", "blah"]
    res.render('products.ejs', {products: worestProducts})
})




module.exports = router 