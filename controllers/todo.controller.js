const Database = require('../model/Database');
const config = require('../config/config')

const connectionSettings = {
    host: process.env.DB_HOST || config.dbHost,
    user: process.env.DB_USER || config.dbUser,
    password: process.env.DB_PASSWORD || 'secret',
    database: process.env.DB_DATABASE || config.dbDatabase,
    port: 3306,
    debug: false
}

let db = new Database(connectionSettings)

module.exports = {

    getAll(req, res, next) {
        console.log('todo.controller getAll');
        db.connect()
        db.connection.query('SELECT * FROM todos', function (error, rows, fields) {
            db.connection.end(function (err) {
                console.log('The connection is terminated now')
            })
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
        })
    },

    getOneById(req, res, next) {
        const id = req.params.id;
        db.connect()
        db.connection.query('SELECT * FROM todos WHERE ID=' + id, function (error, rows, fields) {
            db.connection.end(function (err) {
                console.log('The connection is terminated now')
            })
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

    // Deze handler laat zien hoe een error via next door de errorhandler 
    // in server.js wordt afgehandeld. 
    errorDemo(req, res, next) {
        console.log('todo.controller errorDemo');
        db.connection.query('SELECT * FROM nonExistentTable', function (error, rows, fields) {
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