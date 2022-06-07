const mongoose = require('mongoose')

const appSchema = mongoose.Schema({
    text: {
      type:String,
      required: true
    }

},{
  timestamps:true
})

module.exports=mongoose.model('test',appSchema)