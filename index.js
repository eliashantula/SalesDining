const express = require('express')
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose');
var recipeRouter = require('./routers/foods')

app.use((req, res, next) => {
  if (mongoose.connection.readyState) {
    next();
  } else {
    require('./mongo')().then(() => next());
  }
});


app.use('/', recipeRouter)

var port = process.env.PORT ||
  process.argv[2] ||
  3000;
var host = 'localhost';


var args;
process.env.NODE_ENV === 'production' ?
  args = [port] :
  args = [port, host];

args.push(() => {
  console.log(`Listening: http://${ host }:${ port }`);
});


app.listen.apply(app, args);




module.exports = app;
