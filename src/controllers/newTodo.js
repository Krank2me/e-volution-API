const firestore = require('../config/dbConexion');

async function newTodo(req, res) {

  try {
    const newTodo = {
      name: req.body.name,
      priority: req.body.priority,
      dueDate: req.body.dueDate
    }
    const result = await firestore.collection('todos').add(newTodo);

    if (result) {
      res.status(200).send({message: 'todo added'});
    } else {
      res.status(500).send({message: 'an error ocurred while adding new todo'});
    }

  } catch (error) {
    res.status(500).send({erroMessage: 'server internal error'});
  }
}

module.exports = newTodo;