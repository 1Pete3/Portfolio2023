import express from 'express';
import './env.js';
import cors from 'cors';
import getID from './controllers/githubController.js';


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


app.get('/',(req,res)=>{

})

app.get('/api/Projects' , async (req, res) => {
  res.send(await getID());
});

app.listen(PORT, () => {
  console.log(`App is listening on  http://localhost:${PORT}`);
});
