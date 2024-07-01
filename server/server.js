import express from "express";
import Eventemitter from "events";
const app = express();


const event = new Eventemitter();
event.on("click",(data)=>{
    console.log(`eevnt listened ${data.mess}`)
})
event.emit("click", {mess:"clicked"})

let count = 0;


app.get("/",(req,res)=>{

    count++;

    res.send(`number of cliked is ${count}`)
});

const port = 8971;
app.listen(port,()=>{
    console.log(`listening port on number ${port}`)
})