import bcrypt from 'bcryptjs';
import db from '../models/connect.js';
import jwt from 'jsonwebtoken';
const JWT_SECRET = 'vwegtrgAS';
function details(req,res) {
    const token = req.cookies.token;
    try {const user = jwt.verify(token, JWT_SECRET);
        res.send('you got access, the secret to success is consistency')}
    catch {res.send('bad try better luck next time');}
    // console.log(user);
}


export default details;