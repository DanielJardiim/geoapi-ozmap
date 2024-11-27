import express from 'express';
import dotenv from 'dotenv';

// Load Environment Variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API is working!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
