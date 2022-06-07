const User = require('../model/appModel')
const asycnHandler = require('express-async-handler')

const getData = asycnHandler( async (req,res)=>{
  const user = await User.find()
  res.status(200).json(user)
})
const postData =asycnHandler(async (req,res)=>{
  if(!req.body.text){
    res.status(400)
    throw new Error('please add a text field')
  }
  const user = await User.create({text:req.body.text})
  res.status(200).json(user)
})
const updateData =asycnHandler(async (req,res)=>{

  const user = await User.findById(req.params.id)

  if(!user){
    res.status(400)
    throw new Error('couldnt find id')
  }
  const updateduser = await User.findByIdAndUpdate(req.params.id,req.body)
  res.status(200).json(updateduser)
})
const deleteData =asycnHandler( async(req,res)=>{
  const user = await User.findById(req.params.id)

  if(!user){
    res.status(400)
    throw new Error('couldnt find id')
  }
  await user.remove()
  res.status(200).json({id:req.params.id})
})

module.exports={
  getData,
  postData,
  updateData,
  deleteData
}
