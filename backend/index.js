import express from 'express';
import './env.js';
import cors from 'cors';

const PORT = process.env.PORT;
const app = express();

// Middleware for handling CORS policy
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);

app.get('/', (req, res) => {
  return res.send('Start of my project');
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
