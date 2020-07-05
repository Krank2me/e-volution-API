const firestore = require('../config/dbConexion');

async function getPriorities(req, res) {

  try {
    const priotities = await firestore.collection('priorities').get();

    if (priotities) {
      const docs = [];
      priotities.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      });
      res.status(200).send(docs);
    } else {
      res.status(400).send({message: 'no data found'});
    }

  } catch (error) {
    res.status(500).send({message: 'server internal error'});
  }

}

module.exports = getPriorities;