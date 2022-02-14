var express = require('express');
var router = express.Router();
var students = [{
  "id": 1,
  "name": "Jackkkkk"
},
{
  "id": 2,
  "Name": "Peterrrrr"
},
{
  "id": 3,
  "name": "O Moooooo"
}]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(students);
});
// GET student by id
router.get('/:id', function(req, res, next) {
  const studentId = parseInt(req.params.id);
  const student = students.find(_student => _student.id === studentId);

   if (student) {
      res.send(student);
   } else {
      res.send({ message: `item ${studentId} doesn't exist`})
   }


});

// function getStudent(req,res,next){
//   let student
//   try{
//       student = students.find(req.params.id)
//       if(s == null){
//         return req.status(404).json({message: "cannot find student"})
//       }

//   }catch(err){
//     return res.status(500).json({message: err.message})
//   }
//  res.student = student
//  next()

// }

module.exports = router;
