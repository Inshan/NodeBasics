const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
    name: String,
    content: String,
    author: String,
    brand:String,
    age:String
})

module.exports = mongoose.model('comments', commentSchema)
