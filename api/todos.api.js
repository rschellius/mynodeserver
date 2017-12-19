//
// todos.api.js
//
var express = require('express');
var routes = express.Router();
var todoController = require('../controllers/todo.controller');

module.exports = {}

// 
// andere benadering dan je tot nu toe zag - routes zijn gescheiden van de controllers;
// de controllers verzorgen de afhandeling. 
//
routes.get('/todos', todoController.getAll);
routes.get('/todos/:id', todoController.getOneById);
routes.get('/todos/errordemo', todoController.errorDemo);
routes.all('/todos*', todoController.catchAll);

module.exports = routes;