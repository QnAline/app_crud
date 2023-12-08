const mongoose = require('mongoose')


const StudentSchema = new mongoose.Schema({
    first_name: String,
    last_name:String,
    ages:Number,
    gender:String
})

module.exports = mongoose.model("Students", StudentSchema)