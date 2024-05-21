

var mysql = require('mysql');



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ethermon_final"

});


con.connect(function(err) {
  if (err) throw err;
  sql = "select email,address from user_tab where email != '' and limit 10"
  con.query(sql, function (err, result) {
    if (err) throw err;
    for (var i=0; i< result.length; i++) {
      console.log(result[i].email);
    }
  });
});