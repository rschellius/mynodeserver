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

    getStatus(req, res, next) {

        res.header('Cache-Control: no-cache, no-store, must-revalidate');

        const db_config = db.config;
        delete db_config.password;
        var status = {
            server: 'OK',
            db: {
                status: db.state,
                config: db_config
            }
        }
        res.status(200).json(status).end();
    }

}