import mysql from 'mysql2';

const config = process.env.CLEARDB_DATABASE_URL || {
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "database": process.env.DATABASE,
  "user": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
}

const connection = mysql.createConnection(config);

// let connection;

// const handleDisconect = () => {
//   connection = mysql.createConnection(config);
  
//   connection.connect((err) => {
//     if(err){
//       console.error(err);
//       setTimeout(handleDisconect, 2000);
//     }
//   });

// }

// connection.on('error', (err) => {

// })


export default connection;
