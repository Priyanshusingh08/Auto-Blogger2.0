const express = require("express");
const res = require("express/lib/response");
const userRouter = require("./routers/userRouter");

const app = express();
const port = 5000;

app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send("you got a response");
});

app.get('/home', (req, res) => {
    res.send("you have reached home");
});

new Module(req,body).save()
.then((data)=>{
    console.log('User saved!');
    res.json({message:"success"});
});

app.get('*', (req, res) => {
    
});

app.listen(port,()=>{
    console.log("server started");
});