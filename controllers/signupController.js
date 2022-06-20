import bcrypt from 'bcryptjs';
import db from '../models/connect.js';
import jwt from 'jsonwebtoken';
import Cookies from 'universal-cookie';
// import jso
const JWT_SECRET = 'vwegtrgAS';
async function signup(req,res) {
    // console.log(req.body);
    // console.log(req.headers);
    const {name,username,password} = req.body;
    const hashedPass = await bcrypt.hash(password,10);
    const data = {
        name: name,
        username: username,
        password: hashedPass
    } 
    await db.create(data);
    
    //create cookie jwt
    const cookies = new Cookies();
    const jwt_token = jwt.sign({name: name, username: username}, JWT_SECRET);
    res.cookie("token",jwt_token);
    console.log(name);
    res.send('Request Recieved');
}

export default signup;