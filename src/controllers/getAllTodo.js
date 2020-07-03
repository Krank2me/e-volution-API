const firestore = require('../config/dbConexion');

async function getAllTodo(req, res) {

  try {
    const getTodos = await firestore.collection('todos').get();

    if (getTodos) {
      const todos = getTodos.docs.map(todoData => todoData.data());
      res.status(200).send({todos: todos});
    } else {
      res.status(400).send({message: 'no data found'});
    }

  } catch (error) {
    res.status(500).send({message: 'server internal error'});
  }

}

module.exports = getAllTodo;