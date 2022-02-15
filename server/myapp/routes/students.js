var express = require('express');
var router = express.Router();
router.use(express.urlencoded({ extended:false}));

var students = [{
  "id": "1",
  "name": "Jackkkkk"
},
{
  "id": "2",
  "Name": "Peterrrrr"
},
{
  "id": "3",
  "name": "O Moooooo"
}]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(students);
});
// GET student by id
router.get('/:id', function(req, res, next) {
  const studentId = req.params.id;
  const student = students.find(_student => _student.id === studentId);
   if (student) {
      res.send(student);
   } else {
      res.send({ message: `item ${studentId} doesn't exist`})
   }
});

// Put a single student by id
router.put('/:id', function(req, res, next) {
  const studentId = req.params.id;
   const student = req.body;
   console.log("Editing item: ", studentId, " to be ", student);

   const updatedListItems = [];
   // loop through list to find and replace one item
   students.forEach(oldItem => {
      if (oldItem.id === studentId) {
         updatedListItems.push(student);
      } else {
         updatedListItems.push(oldItem);
      }
   });
   // replace old list with new one
   students = updatedListItems;
   res.json(students);
});


// Post a single student by id
router.post('/', function(req, res, next) {
  const student = req.body;
  // add new item to array
  students.push(student)
  res.send(students);
});

// delete a single student by id
router.delete('/:id', function(req, res, next) {
  const studentId = req.params.id;

   console.log("Delete item with id: ", studentId);

   // filter list copy, by excluding item to delete
   const filtered_list = students.filter(item => item.id !== studentId);

   // replace old list with new one
   students = filtered_list;
   res.send(students);
});
module.exports = router;