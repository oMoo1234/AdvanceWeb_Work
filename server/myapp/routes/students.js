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


module.exports = router;
