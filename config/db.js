const mysql = require('mysql2/promise');


const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
     
  })
 
  
  module.exports = db;
   