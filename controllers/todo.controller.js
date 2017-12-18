var db = require('../config/db');

module.exports = {

    getAll(req, res, next) {
        console.log('todo.controller getAll');
        db.query('SELECT * FROM todos', function (error, rows, fields) {
            if (error) {
                next(error);
            } else {
                res.status(200).json({
                    status: {
                        query: 'OK'
                    },
                    result: rows
                }).end();
            };
        });
    },

    getOneById(req, res, next) {
        const id = req.params.id;
        db.query('SELECT * FROM todos WHERE ID=' + id, function (error, rows, fields) {
            if (error) {
                next(error);
            } else {
                res.status(200).json({
                    status: {
                        query: 'OK'
                    },
                    result: rows
                }).end();
            };
        });
    },

    create(req, res, next) {
        console.log('todo.controller create');
        res.status(200).json({
            status: 'index create okee'
        }).end();
    },

    update(req, res, next) {
        console.log('todo.controller update');
        res.status(200).json({
            status: 'index update okee'
        }).end();
    },

    delete(req, res, next) {
        console.log('todo.controller delete');
        res.status(200).json({
            status: 'index delete okee'
        }).end();
    },

    catchAll(req, res, next) {
        res.status(404)
            .json({
                message: 'Deze ToDos endpoint bestaat nog niet!'
            }).end();
    }

}