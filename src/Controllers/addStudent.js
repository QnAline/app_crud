const Students = require("../models/Users")

const createUser = (req, res) =>{
    const student = new Students({
        first_name: req.body.first_name,
        last_name : req.body.last_name,
        age : req.body.age,
        gender : req.body.gender,
    }
    )
    console.log(student)
    student.save()
  .then(student => res.json(student))
}

const getAllStudents = (req,res) =>{
    Students.find()
   .then(students => res.json(students))
}

const getStudentById = (req,res) =>{
    Students.findById(req.params.id)
   .then(student => res.json(student))
}

const updateStudentById = (req,res) =>{
    Students.findByIdAndUpdate(req.params.id,req.body,{new:true})
  .then(student => res.json(student))
}

const deleteStudentById = async (req,res) =>{
  try{
    const studentId = req.params.id
    const existingStudent = await Students.findById(studentId)
    if(!existingStudent){
        return res.status(404).json({message:"Student not found"})
    }
    else{
    await Students.findByIdAndDelete(studentId)
    .then(student => res.json(student))
    }
  } catch(err){
    return res.status(500).json({message:"Internal server error"})
  }
}

module.exports = {
    createUser,
    getAllStudents,
    getStudentById,
    updateStudentById,
    deleteStudentById
}