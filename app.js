const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express()

const users = require( __dirname + '/routes/users')
const posts = require(__dirname + '/routes/posts')

app.use( session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: false,
	cookie: { secure: false,
	maxAge: 1000 * 60 * 60 }
}))
app.use(bodyParser.urlencoded( { extended: false }));



app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/static'))

app.use('/', users);
app.use('/posts', posts)

app.listen(3000, f => {
	console.log('Your app is now on localhost 3000')
})