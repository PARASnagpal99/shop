const mongoose = require('mongoose')

const temp = new mongoose.Schema({
  title : String ,
  content : String
})

module.exports = mongoose.model('Article',temp)
