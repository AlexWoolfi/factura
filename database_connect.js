const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "factura",
    password: "Woolfi504"

});

// conn.connect(err => {
//     if(err) {
//        console.log(err);
//        return err;
//     }
//     else {
//         console.log("database - OK");
//     }
// }); 


const sqlListPubliks = "SELECT * FROM advlay";
let b = [];
 conn.connect(function(err) {
    if(err) throw err;
    conn.query(sqlListPubliks, function(err,res) {
        if(err) throw err;
        // console.log(res);
        b.push(res);
    })
},[]);

console.log(b);