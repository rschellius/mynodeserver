var db = require('../config/db');

module.exports = {

    getStatus(req, res, next) {

        res.header('Cache-Control: no-cache, no-store, must-revalidate');

        var db_config = db.config;
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
