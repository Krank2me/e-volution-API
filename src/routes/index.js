const { Router } = require('express');
const newTodo = require('../controllers/newTodo');
const getAllTodo = require('../controllers/getAllTodo');
const deleteTodo = require('../controllers/deleteTodo');
const updateTodo = require('../controllers/updateTodo');
const singUp = require('../controllers/singUp');
const singIn = require('../controllers/singIn');

const router = Router();

router.post('/add', newTodo);
router.get('/getAll', getAllTodo);
router.delete('/delete', deleteTodo);
router.post('/update', updateTodo);
router.post('/singUp', singUp);
router.post('/singIn', singIn);

module.exports = router;