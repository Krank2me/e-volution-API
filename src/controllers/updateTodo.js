const firestore = require('../config/dbConexion');

async function updateTodo(req, res) {

  const {id, name, priority, dueDate} = req.body;

  console.log('*** req:', req.body);

  try {
    const updateTodo = {
      name,
      priority,
      dueDate
    }

    const result = await firestore.collection('todos').doc(id).set({...updateTodo}, {merge: true});

    if (result) {
      res.status(200).send({message: 'todo updated'});
    } else {
      res.status(500).send({message: 'server internal error'});
    }

  } catch (error) {
    console.log('*** error: ', error);
  }
};

module.exports = updateTodo;