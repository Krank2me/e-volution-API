const firestore = require('../config/dbConexion');

async function getAllTodo(req, res) {

  const {uid} = req.query;

  try {
    const getTodos = await firestore.collection('todos').where('uid', '==', uid).get();
    const getPriorities = await firestore.collection('priorities').get();
    const priorities = getPriorities.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))

    if (getTodos) {

      const todos = getTodos.docs.map(doc => {
        const todo = doc.data();
        const prioritySelected = priorities.find(priority => priority.id === todo.priority);

        return {
          name: todo.name,
          dueDate: todo.dueDate,
          priority: prioritySelected,
          id: doc.id
        }
      });
      res.status(200).send(todos);
    } else {
      res.status(400).send({message: 'no data found'});
    }

  } catch (error) {
    res.status(500).send({message: error});
  }

}

module.exports = getAllTodo;