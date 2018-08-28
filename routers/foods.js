var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var models = require('./../models');
var Recipe = mongoose.model('Recipe');



router.get('/', (req,res) => {
	res.send("yum")
})

module.exports = router