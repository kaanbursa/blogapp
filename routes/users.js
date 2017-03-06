const express = require('express');
const router = express.Router();
const User = require('../module/database');


router.get('/', (req, res) => {
	
	if(!req.session.visited){
		res.render('index');
	} else {
		res.redirect('/profile')
	}
})

router.post('/register', (req, res) =>{
	const newUser = {
		name: req.body.username,
		email: req.body.email,
		password: req.body.password
	}

	User.addUser(newUser, (err, res) => {
		if (err) throw err;
		res.json({success: true, msg:'Registered user'})
	})

	req.session.visited = true;
	req.session.user = newUser;

	res.redirect('/profile')

})

router.get('/profile', (req, res) => {
	var sessUser = req.session.user	;
	
	User.findUserByEmail(sessUser, (err, res) => {
		if (err) throw err;
		
	})

	res.render('profile', {user: sessUser});
})

router.post('/status', (req, res) => {
	const newPost = {
		owner: user.name,
		content: req.body.post
	}

	console.log(newPost);
	User.addPost(newPost, (err, res) => {
		if (err) throw err;
		res.json({success: true, msg:' Post Uploaded'})
	})
	
})



module.exports = router;