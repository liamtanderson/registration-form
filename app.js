const express = require('express') // import npm package express

const bodyParser = require('body-parser') // import npm package bodyparser to parse query string for all HTTP requests

const path = require('path') // node.js native path module to join directories containing scripts and style

const app = express() // instantiating the instance of the express package as app


const request = require('request')

app.use(express.static(path.join(__dirname, 'js'))) // using express middleware to server js as static directory

app.use(bodyParser({urlencoded: true})) // middleware to support url parsing in body parser middleware
app.use(bodyParser.json()) // middleware to support json format in body parser middleware


app.set('view engine', 'ejs') // set ejs as templating engine for the express app



// GET request to /register to render the registration form

app.get('/register', (req, res) => {

	  res.render('register')
})

// GET request to / (default or index) to render the registration form

app.get('/', (req, res)=> {

	 res.render('register')
})

app.post('/hello', (req, res)=>{

	res.send({name:'sandesh'})
})

// POST request to /register to process the posted form data and pass JS objects to the display page and embed JS to the display page

app.post('/register', (req, res)=> {


	// use of body property accessible through the bodyparser middleware for express

	let firstname = req.body.first
	let lastname = req.body.last
	let address = req.body.address
	let income = req.body.income
	let education = req.body.education
	let zipcode = req.body.zipcode
	let lat = ''
	let lng = ''
	let street_number = req.body.street
	let street_name = req.body.street_name
	let state = req.body.state
	let phone = req.body.phone
	let email = req.body.email


	console.log(req.body)

	

	request('https://maps.googleapis.com/maps/api/geocode/json?address='+ street_number + ',' + street_name + ','+ req.body.city + ','+req.body.state + '&key=AIzaSyCiug74pt7jFl5VYdDfXhFLYJdkZ1maj2Y', function(err, response, body){
	 lat = (JSON.parse(body).results[0].geometry.location.lat)
	 lng = (JSON.parse(body).results[0].geometry.location.lng)

	console.log(lat)
	console.log(lng)
	 res.render('display', {firstname: firstname, lastname: lastname, address: address, income: income, education: education, zipcode: zipcode, lat: lat, lng: lng, phone: phone, email:email})
})


})

// set up server port for deployment and test environments



app.listen(process.env.PORT || 2000, () => {

	console.log('Server Running')
})

module.exports.app = app;

