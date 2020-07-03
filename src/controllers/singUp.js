const firebase = require('../config/appConection');

async function singUp(req, res) {

  firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
  .then(userCredential => {
    res.status(200).send({message: 'user created'});
  })
  .catch(function(error) {
    res.status(500).send({message: error.message});
  });
}

module.exports = singUp;