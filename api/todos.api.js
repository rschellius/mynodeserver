// routes_v1.js
var express = require('express');
var routes = express.Router();

var db = require('../config/db');

module.exports = {}

routes.get('/todos', function (req, res) {
	db.query('SELECT * FROM todos', function (error, rows, fields) {
		if (error) {
			res.status(401).json(error);
		} else {
			res.status(200).json({
				result: rows
			});
		};
	});
});

routes.get('/todos/:id', function (req, res) {
	const id = req.params.id;
	db.query('SELECT * FROM todos WHERE ID=' + id, function (error, rows, fields) {
		if (error) {
			res.status(401).json(error);
		} else {
			res.status(200).json({
				result: rows
			});
		};
	});
});


routes.all('/todos', function (req, res, next) {
	res.status(404);
	res.json({
		message: 'Deze endpoint bestaat nog niet'
	});
	res.end();
});

module.exports = routes;