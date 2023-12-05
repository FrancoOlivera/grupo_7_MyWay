const express = require("express");
const path = require("path")
const app = express();
app.use(express.static(path.join("public")));
const PORT = 3030;


app.set("view engine", "ejs");
app.set("views", "views")

app.listen(PORT, ()=>{
    console.log("Servidor "+ PORT + " iniciado")
});

app.get("/", (req,res)=>{
    res.render("index")
 });

 app.get("/productDetail", (req,res)=>{
    res.render("productDetail")
 });


app.get("/register", (req,res)=>{
   res.render("register")
});

app.get("/login", (req,res)=>{
    res.render("login")
})

app.get('/shopping-bag', (req,res)=>{
    res.render("shopping-bag")
});

app.get('/crear', (req,res)=>{
    res.render("crear")
});