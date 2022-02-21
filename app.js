const express = require("express");
const app = express();
const path = require("path");


const pathStatic = path.resolve(__dirname , "./public")
app.use( express.static(pathStatic))
app.listen(3000 , () => console.log("Servidor corriendo"));

app.get('/' , (req , res) =>{
    res.sendFile(path.join(__dirname , '/views/home.html'))

})

app.post('/' , (req , res) =>{
    res.sendFile(path.join(__dirname , '/views/home.html'))

})


app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});


app.post('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});


app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
