const app = require('./app');

const port = process.env.port || 3000;

app.listen(app.get('port'), () => {
  console.log('Server started on port ', app.get('port'));

});