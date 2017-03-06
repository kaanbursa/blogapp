const sequelize = require('sequelize');
const db = new sequelize('blogapp', 'kaanbursa', '', {
	host: 'localhost',
	dialect: 'postgres'
	})

const User = db.define('user', {
	name: sequelize.STRING,
	email: sequelize.STRING,
	password: sequelize.STRING
})

const Post = db.define('post', {
	title: sequelize.STRING,
	content: sequelize.STRING,
	
})

const Comment = db.define('comment', {
	owner: sequelize.STRING,
	content: sequelize.STRING,
})

Comment.belongsTo( User, Post)
Post.hasMany( Comment)
Post.belongsTo( User )
User.hasMany( Post )


module.exports.addUser = function(newUser, callback){
		User.create(newUser)
};

module.exports.findUserByEmail = function(sessUser, callback){
	console.log(sessUser);
	User.findOne( {
		where: {
			email: sessUser.email
		}
	}).then( user => {

		// dont save password plain text password. hash your goods
		console.log('yay')
	})
}

module.exports.addPost = function(newPost, callback){
	Post.create(newPost)
}


module.exports.findPostsByOwner = function(sessUser, callback){
	User.findOne( {
		where: {
			email: sessUser.email
		}
	}).then( user => {

		// dont save password plain text password. hash your goods
		console.log('yay')
	})
}