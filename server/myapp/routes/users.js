var express = require('express');
var router = express.Router();
var users = [{
  "id": 1,
  "name": "Jack"
},
{
  "id": 2,
  "Name": "Peter"
},
{
  "id": 3,
  "name": "O Moo"
}]



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
