require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./config/db");
const studentRouter = require("./Routers/StudentRouter");   
const PORT = process.env.port || 4000;
const API = process.env.api


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// Routes
app.use(`${API}`, studentRouter); 
  
// Database connection

db.getConnection()
  .then(conn => {
    console.log('Connected to MySQL database');
    conn.release();
  })
  .catch(err => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}${API}`);
});
    

