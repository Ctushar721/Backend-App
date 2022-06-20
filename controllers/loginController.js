import bcrypt from 'bcryptjs';
import db from '../models/connect.js';
import jwt from 'jsonwebtoken';
import Cookies from 'universal-cookie';
const JWT_SECRET = 'vwegtrgAS';
async function login(req,res) {
    const {username,password} = req.body;
    const user = await db.findOne({username:username});
    console.log(user);
    try{
    const verify = bcrypt.compare(password, user.password)
        const jwt_token = jwt.sign({name: user.name, username: username}, JWT_SECRET);
        res.cookie("token",jwt_token);
        res.send('You have loggedin succesfully');
        return
    }
    catch {res.send('Something went wrong')}
    res.send('Something went wrong');
}

export default login;