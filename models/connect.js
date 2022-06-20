import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/starWars1', {useNewUrlParser: true});
var conn = mongoose.connection;
var schema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    token: String 
})
console.log("db db db")
const db = mongoose.model("userTable",schema);
export default db;