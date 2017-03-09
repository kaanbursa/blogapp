const sequelize = require('sequelize');
const dbseq = new sequelize('blogapp', 'kaanbursa', '', {
	host: 'localhost',
	dialect: 'postgres'
	})

let db = {}

db.User = dbseq.define('user', {
	name: sequelize.STRING,
	email: sequelize.STRING,
	password: sequelize.STRING
})

db.Post = dbseq.define('post', {
	title: sequelize.STRING,
	content: sequelize.STRING,
	
})

db.Comment = dbseq.define('comment', {
	content: sequelize.STRING,
})

db.Comment.belongsTo( db.User, db.Post)
db.Post.hasMany( db.Comment)
db.Post.belongsTo( db.User )
db.User.hasMany( db.Post )



dbseq.sync({force: true}).then(f => { console.log( 'db synced' ) })

module.exports = db;
