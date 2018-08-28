var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Recipe = require('./recipe')

var MeatSchema = new Schema({
  meat: String
},{
  discriminatorKey: 'kind',
  
});

var Meat = Recipe.discriminator('Meat', MeatSchema)
module.exports = Meat