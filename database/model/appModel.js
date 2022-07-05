const mongoose = require('mongoose')

const appSchema = mongoose.Schema({
    text: {
      type:String,
      required: true
    },
    jobs:[{val:String}]

},{
  timestamps:true
})

module.exports=mongoose.model('test',appSchema)