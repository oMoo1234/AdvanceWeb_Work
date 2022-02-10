var express = require('express');
var router = express.Router();

const students = [
  {"id": 2,
  "name": "O Moo"
}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(students);
});

module.exports = router;
