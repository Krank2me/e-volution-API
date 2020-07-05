const { Router } = require('express');
const newTodo = require('../controllers/newTodo');
const getAllTodo = require('../controllers/getAllTodo');
const getTodoById = require('../controllers/getTodoById');
const deleteTodo = require('../controllers/deleteTodo');
const updateTodo = require('../controllers/updateTodo');
const getPriorities = require('../controllers/getPriorities');
const singUp = require('../controllers/singUp');
const singIn = require('../controllers/singIn');

const router = Router();

router.post('/add', newTodo);
router.get('/getAll', getAllTodo);
router.get('/getPriorities', getPriorities);
router.get('/getTodoById/:id', getTodoById);
router.delete('/delete/:id', deleteTodo);
router.put('/update', updateTodo);

router.post('/singUp', singUp);
router.post('/singIn', singIn);

module.exports = router;