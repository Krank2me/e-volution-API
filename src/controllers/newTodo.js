const firestore = require('../config/dbConexion');

async function newTodo(req, res) {

  const {name, priority, dueDate, uid} = req.body;

  try {
    const newTodo = {
      name,
      priority: priority || '1',
      dueDate,
      uid
    }
    console.log("newTodo -> newTodo", newTodo);
    const result = await firestore.collection('todos').add(newTodo);

    if (result) {
      res.status(200).send(result);
    } else {
      res.status(500).send({message: 'an error ocurred while adding new todo'});
    }
  } catch (error) {
    res.status(500).send({erroMessage: 'server internal error'});
  }
}

module.exports = newTodo;