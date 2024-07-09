require('dotenv').config();
const express = require('express');
const authrouter = require('./router/authroute');
const contactrouter = require('./router/contact-route');
const cors = require('cors'); // Import the cors middleware

const connectdb = require('./utils/db');
const errmid = require('./middlewares/error-mid');
const app = express();
app.use(cors());


app.use(express.json());
app.use("/api/auth",authrouter);
app.use("/api/form",contactrouter);

app.use(errmid);

const corsOptions = {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  };
  
  app.use(cors(corsOptions));
const port = 5000;

connectdb().then(()=>{
    app.listen(port,()=>{
        console.log(`this is running on ${port} `)
    })
});
