const express = require('express')

const bodyParser = require('body-parser')

const path = require('path')

const app = express()


app.use(express.static(path.join(__dirname, 'js')))

app.use(bodyParser({urlencoded: true}))
app.use(bodyParser.json())


app.set('view engine', 'ejs')




app.get('/register', (req, res) => {

	  res.render('register')
})

app.get('/', (req, res)=> {

	 res.render('register')
})

app.post('/register', (req, res)=> {

	let firstname = req.body.first
	let lastname = req.body.last
	let address = req.body.address
	let income = req.body.income
	let education = req.body.education

	 res.render('display', {firstname: firstname, lastname: lastname, address: address, income: income, education: education})
})
app.listen(process.env.PORT || 2000, () => {

	console.log('Server Running')
})



