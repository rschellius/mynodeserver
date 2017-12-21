//
// ./config/connection.js
//
// Configuratiebestand voor MySql database.
//
var mysql = require('mysql');
var config = require('../config/config');

const connectionSettings = {
    host: process.env.DB_HOST || config.dbHost,
    user: process.env.DB_USER || config.dbUser,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || config.dbDatabase,
    port: 3306,
    debug: false
}
const reconnectTimeout = 2000; // ms.

var connection;

function handleDisconnect() {
    connection = mysql.createConnection(connectionSettings);

    connection.connect(function (error) {
        if (error) {
            console.error('Error connecting to database ' + connectionSettings.database + ' on ' + connectionSettings.host + ': ' + error.message);
            setTimeout(handleDisconnect, reconnectTimeout);
        } else {
            console.log('Connected to database ' + connectionSettings.database + ' on ' + connectionSettings.host);
        }
    });
    connection.on('error', function (error) {
        if (error.code === 'ECONNRESET') {
            console.error('Connection reset - reconnecting');
            handleDisconnect();
        } else {
            console.error('Connection ERROR - database ' + connectionSettings.database + ' on ' + connectionSettings.host + ': ' + error.message);
            handleDisconnect();
        }
    });
}

handleDisconnect();

module.exports = connection;