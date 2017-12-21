var db = require('../config/db');

module.exports = {

    getStatus(req, res, next) {
        console.log('status.controller getStatus');
        const db_config = db.config;
        delete db_config.password;
        const status = {
            server: 'OK',
            db: {
                status: db.state,
                config: db_config
            }
        }
        res.status(200).json(status).end();
    }

}