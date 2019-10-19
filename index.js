const express = require('express')
const handlebars  = require('express-handlebars')

const app = express()
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')

app.get('/',(_req,res) => res.render('home'))
app.use(express.static('public'))
app.listen(3000,() => undefined)
