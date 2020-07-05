const firebase = require('../config/appConection');

async function singUp(req, res) {

  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
    res.status(200).send(userCredential);

  } catch (error) {
    res.status(500).send({status: 500, message: error.message});
  }
}

module.exports = singUp;