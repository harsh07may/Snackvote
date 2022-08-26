const express = require('express')
const app = express()
const port=3000

//Middleware
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//db 
var users =[{
    id: 1,
    name: "John Doe",
    password:"12345"
},{
    id: 2,
    name: "John Doe",
    password:"12345"
}];

//HTTPGET All users from db 
app.get('/users',(req,res)=>{
    res.status(200).json(users)
})


//HTTPGET ID user from db 
app.get('/users/:id',(req,res)=>{
    const { id } = req.params;

    res.status(200).json(users[id-1])
})
//HTTPPOST New user to db
app.post('/users/:id',(req,res)=>{
    const { id } = req.params;
    const { username } = req.body;
    var user = req.body;
    users.push(user);

    res.send(`${username} with id ${id} was added`)
})


app.listen(port,()=>console.log('Listening on '+port))