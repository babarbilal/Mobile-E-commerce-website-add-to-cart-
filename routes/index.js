var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express WAD Class' });
});

router.get('/page', function(req, res, next) {
  res.render('page', { title: 'Page WAD Class 101' });
});

router.get('/add/todo', function(req, res, next) {
  res.render('add_todo', { title: 'Add todo' });
});

router.post('/create/todo', function(req, res, next) {
  console.log("post request fetch", req.body);
  res.render('todo_list', { title: 'Todo list page',data:req.body });
});


module.exports = router;
