const firestore = require('../config/dbConexion');

async function deleteTodo(req, res) {
  try {

    const getTodo = await firestore.collection('todos').doc(req.body.id).get();

    if (getTodo.data()) {
      const result = await firestore.collection('todos').doc(req.body.id).delete();
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