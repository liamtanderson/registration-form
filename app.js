const express = require('express')

const bodyParser = require('body-parser')

const path = require('path')

const app = express()


app.use(express.static(path.join(__dirname, '../js')))

app.use(bodyParser({urlencoded: true}))
app.use(bodyParser.json())


app.set('view engine', 'ejs')




app.get('/register', (req, res) => {

	  res.render('register')
})
app.listen(2000, () => {

	console.log('Server Running')
})



