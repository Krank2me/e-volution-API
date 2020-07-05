const firestore = require('../config/dbConexion');

async function getAllTodo(req, res) {

  const {id} = req.params;

  try {
    const getTodoById = await firestore.collection('todos').doc(id).get()

    if (getTodoById) {
      res.status(200).send(getTodoById.data());
    } else {
      res.status(400).send({message: 'no data found'});
    }
  } catch (error) {
    res.status(500).send({message: 'server internal error'});
  }

}

module.exports = getAllTodo;