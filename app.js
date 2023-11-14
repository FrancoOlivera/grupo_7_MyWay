const express = require("express");
const app = express();
app.use(express.static("public"));
const PORT = 3030;

app.listen(PORT, ()=>{
    console.log("Servidor "+ PORT + " iniciado")
});

app.get("/register", (req,res)=>{
   res.sendFile(__dirname + "views/register.html")
});

app.get("/login", (req,res)=>{
    res.sendFile(__dirname + "views/login.html")
})

app.get('/shopping-bag', (req,res)=>{
    res.sendFile(__dirname + '/views/shopping-bag.html');
});