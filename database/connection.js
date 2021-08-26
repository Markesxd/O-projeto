import mysql from 'mysql2';

const connection = mysql.connect({
  "host": "localhost",
  "port": "3306",
  "database": "OBanco",
  "user": "rafa",
  "password": "Cr6)sTYp:UfJ}4)",
})

export default connection;
