const mysql      = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nodejs',
  password : 'Node1234!',
  database : 'travel'
});

module.exports = connection