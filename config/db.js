//  fichier qui sert à faire la connection à la base de données :) 
let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat_node'
});
connection.connect();


module.exports = connection
