import mysql from 'mysql2';

const config = {
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "database": process.env.DATABASE,
  "user": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
}

const connection = mysql.createPool(config);

// let connection;
// const handleDisconect = () => {
  
//   connection.connect((err) => {
//     if(err){
//       console.error(err);
//       setTimeout(handleDisconect, 2000);
//     }
//   });

// }

// handleDisconect();

// connection.on('error', (err) => {
//    handleDisconect();
// })


export default connection;
