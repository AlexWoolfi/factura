'use strict'
const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "factura",
    password: "Woolfi504"

});



const sqlListPubliks = "SELECT * FROM advlay";

let globalListPabliks = [];
 conn.connect(function(err) {
    if(err) throw err;
    conn.query(sqlListPubliks, function(err,res) {
        if(err) throw err;
        globalListPabliks = JSON.parse(JSON.stringify(res));
        console.log(globalListPabliks);
    })
    conn.end();
});


exports.conn = conn;


