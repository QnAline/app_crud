const Router = require('express')
const router = Router()
const {getAllStudents, createUser, getStudentById, updateStudentById, deleteStudentById} = require('../Controllers/addStudent')

router.get('/students', getAllStudents)
router.post('/students/add', createUser)
router.put('/student/update/:id', updateStudentById)
router.get('/student/:id', getStudentById)
router.delete('/student/delete/:id', deleteStudentById)

module.exports = router



