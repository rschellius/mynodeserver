// routes_v1.js
var express = require('express');
var routes = express.Router();
var todoController = require('../controllers/todo.controller');

module.exports = {}

routes.get('/todos', todoController.getAll);
routes.get('/todos/:id', todoController.getOneById);
routes.all('/todos*', todoController.catchAll);

module.exports = routes;