import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
import cookieParser from 'cookie-parser';
app.use(cookieParser()); //parses the cookies

import details from "./controllers/details.js";

// Imports routes
import router from './routes/authRoute.js';

// FIltering Requests
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Connect DB
import db from './models/connect.js';
db();

//Serving Static files
app.use('/', express.static(path.join(__dirname, 'static')))

//Creating Login Page
app.use('/api/v1/auth',router);
app.get('/details',details); // app.use bhi chalega
app.get('/',(req,res)=>{
    res.send("Hello welcome, send POST request to login or signup, then get request to /details");
});







app.listen(3000, ()=>{console.log('Server started on port 3000')});