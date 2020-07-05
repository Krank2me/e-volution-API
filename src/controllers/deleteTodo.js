const firestore = require('../config/dbConexion');

async function deleteTodo(req, res) {

  const {id} = req.params;

  try {

    const getTodo = await firestore.collection('todos').doc(id).get();

    if (getTodo.data()) {
      const result = await firestore.collection('todos').doc(id).delete();
      if (result) {
        res.status(200).send({message: 'todo deleted'});
      }
    } else {
      res.status(500).send({message: 'todo for deleted not found'});
    }

  } catch (error) {
    console.log('*** error: ', error);
  }
}

module.exports = deleteTodo;