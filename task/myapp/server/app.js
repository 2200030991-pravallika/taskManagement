const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const fileupload = require('express-fileupload');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.json());
app.use(cors());
app.use(fileupload());

const PORT = process.env.PORT || 5000;
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle MongoDB connection errors
client.connect()
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Add a new endpoint for adding tasks
app.post('/addTask', async function(req, res){
  try
  {
      // Connect to the MongoDB database
      const conn = await client.connect();
      const db = conn.db('s22'); // Change 'your_database_name' to your actual database name
      const tasks = db.collection('tasks'); // Change 'tasks' to your actual collection name

      // Insert the new task into the database
      const data = await tasks.insertOne(req.body);

      // Close the database connection
      conn.close();

      // Send a success response
      res.json("Task added successfully...");
  } catch(err) {
      // Send an error response if something goes wrong
      res.json(err).status(404);
  }
});

// Add an endpoint to fetch tasks
app.get('/tasks', async function(req, res){
  try
  {
      // Connect to the MongoDB database
      const conn = await client.connect();
      const db = conn.db('s22'); // Change 'your_database_name' to your actual database name
      const tasks = db.collection('tasks'); // Change 'tasks' to your actual collection name

      // Fetch all tasks from the database
      const data = await tasks.find({}).toArray();

      // Close the database connection
      conn.close();

      // Send tasks as JSON response
      res.json(data);
  } catch(err) {
      // Send an error response if something goes wrong
      res.json(err).status(404);
  }
});

module.exports = app;
