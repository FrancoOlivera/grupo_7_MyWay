const express = require("express");
const app = express();
app.use(express.static("public"));
const PORT = 3030;


app.set("view engine", "ejs");
app.set("views", "./views")

app.listen(PORT, ()=>{
    console.log("Servidor "+ PORT + " iniciado")
});

app.get("/index", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
 });

 app.get("/productDetail", (req,res)=>{
    res.sendFile(__dirname + "/views/productDetail.html")
 });


app.get("/register", (req,res)=>{
   res.render("register")
});

app.get("/login", (req,res)=>{
    res.render("login")
})

app.get('/shopping-bag', (req,res)=>{
    res.sendFile(__dirname + '/views/shopping-bag.html');
});