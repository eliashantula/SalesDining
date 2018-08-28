var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Recipe = require('./recipe')

var VegetableSchema = new Schema({
  vegetable: String
},{
  discriminatorKey: 'kind',
  
});

var Vegetable = Recipe.discriminator('Vegetable', VegetableSchema)