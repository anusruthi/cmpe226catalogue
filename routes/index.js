var express = require('express');
var path = require('path');
var router = express.Router();
var mongoose = require('mongoose');

var SchemaPath = path.normalize(__dirname + '../../schema/db');
var models = require(SchemaPath);
var cat = mongoose.model('cat');

// build login page
exports.index = function(req, res){
	cat.find().exec( function(error, data) {
		var sendData = {data: data}
		res.render('index' , sendData);
	});
};

//Build a page for each category
exports.cat = function(req, res){
	cat.find({category: req.param("cat")}, function(error, data) {
		var sendData = {data: data}
		res.render('index' , sendData);
	});
};

//Build register page
exports.search = function(req, res){
// new RegExp(req.param("query").toString(), 'i') THATS is the method 'LIKE' in SQL
    cat.find({title: new RegExp(req.query['search'].toString(), 'i')}, function(error, data) {
        var sendData = {data: data}
        res.render('index' , sendData);
    });
};
