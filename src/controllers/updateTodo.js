const firestore = require('../config/dbConexion');

async function updateTodo(req, res) {

  try {
    const updateTodo = {
      name: req.body.name,
      priority: req.body.priority,
      dueDate: req.body.dueDate
    }
    const result = await firestore.collection('todos').doc(req.body.id).update(updateTodo);
    if (result) {
      res.status(200).send({message: 'todo updated'});
    } else {
      res.status(500).send({message: 'server internal error'});
    }

  } catch (error) {
    console.log('*** error: ', error);
  }
}

module.exports = updateTodo;