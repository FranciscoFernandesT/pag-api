const express = require("express");
const path = require("path")
const app = express()
app.use(express.json());
app.use(express.static(path.join(__dirname,"views")))

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});


app.get("/",(req,res)=>{
    return res.sendFile(path.join(__dirname,"views","index.html"))  
})
//app.use(middlewareDeAutenticacao);
app.listen(5500, () => {
    console.log("Servidor rodando!");
});