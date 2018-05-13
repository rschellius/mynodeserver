//
//
//
var mysql = require('mysql')

const reconnectTimeout = 2000 // ms.

class Database {

    constructor(connectionSettings) {
        console.log('Constructor called')
        this.settings = connectionSettings
    }

    connect() {
        console.log('connect called')
        this.connection = mysql.createConnection(this.settings)
        this.connection.connect(function (error) {
            if (error) {
                console.error('Error connecting to database ')
                this.connection.end()
            } else {
                console.log('Connected to database ')
            }
        })
    }
}

module.exports = Database