
const express = require("express")
const app = express()
const PORT = 4000
const ejsLayouts = require("express-ejs-layouts")


//MIDDLEWARE
app.set('view engine', 'ejs')
app.use(ejsLayouts)
//Controllers middlerware
app.use('/akerha', require("./controllers/akerha.js"))
app.use('/ahbeh', require("./controllers/ahbeh.js"))

//ROUTES
// home
app.get("/", (req, res) => {
    res.render('home.ejs')
})




app.listen(PORT, ()=> {
    console.log("hello from the otherside")
})