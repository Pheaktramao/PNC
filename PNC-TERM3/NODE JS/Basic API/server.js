const express = require('express')
const app = express()
app.get('/products',(req,res)=>{
    res.send("Hello Product");
})
// app.post('/posts',(req,res)=>{
//     res.send(req);
// })
app.post('/posts',(req,res)=>{
    res.send("HELLO POST");
})
app.listen(3000,()=>{
    console.log("Server run port:3000");
})