const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     title: {type: String, required: true},
     image: {type: String, required: true},
     content: {type: Array, required: true},
     author: {type: String, required: true},
     datePublished: {type: String, required: true}
})

module.exports = mongoose.model('article', articleSchema)