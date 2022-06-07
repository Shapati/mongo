const express = require('express')
const router = express.Router()
const {getData,postData,updateData,deleteData} = require('../controller/appController')

router.route('/').get(getData).post(postData)
router.route('/:id').put(updateData).delete(deleteData)

module.exports=router