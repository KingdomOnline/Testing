//mysql
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "website",
    password: "IU*(&THHGkjhgfkjg&",
    database: "kingsroyale"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Successfully connected to the database!");
});

//getInstance should return the con variable
//or some other substitute variable

//query should just simple run the code passed
//should return the result. 
//  var db = Database.getInstance();
//  db.query("SELECT * FROM users");

module.exports = class Database {

     /**
      * @returns {Connection}
      * */

    static getInstance() {
        return con;
    }

    /**
     * 
     * @param {String} query
     * @param {Array} variables
     * @returns {Promise}
     */

    static query(query, variables) {
        promise = new Promise();
        con.query(query, variables, (err, result, fields) => {
            if (err) console.log(err)
            promise.
        });
    }

}