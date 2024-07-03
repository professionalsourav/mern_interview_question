import express from "express";
import Eventemitter from "events";
const app = express();
import Fs from "fs"
import upload from "./multer.js";
import proFs from "fs/promises"
import path from "path";

// //1. what is eventEmitter and how it is used ?


// const event = new Eventemitter();
// event.on("click",(data)=>{
//     console.log(`eevnt listened ${data.mess}`)
// })
// event.emit("click", {mess:"clicked"})

// let count = 0;

// //2.read nodejs file ?

// //async way

// Fs.readFile("./read/readme.txt", "utf8", (err,data)=>{
//     if(err){
//         console.log(new Error(err))
//         return;
//     }
//         console.log( data)
    
// })

// //syncronus way
// try {

//     const data = Fs.readFileSync("./read/readme.txt", "utf8");

//     console.log({ syncdata: data });
    
// } catch (error) {

//     console.log("the error we are getting is", error)
    
// }

// //using promise async function

// async function readingpro(data){
//     try {
//         const readingfile = await proFs.readFile("./read/readme.txt", "utf8");

//         console.log({"reading file using promise": readingfile})
        
//     } catch (error) {

//         console.log(error)
        
//     }
// }

// readingpro()

//3. what is multer ?

app.use(
  "/uploads",
  express.static(
    path.join(path.dirname(new URL(import.meta.url).pathname), "read")
  )
);


app.post("/uploads", upload.single("myfile"), (req,res)=>{
    try {
        console.log(req.file);
        res.send("file uploaded sucessfully");
    } catch (error) {
        console.error(error)
        
    }
})



app.get("/",(req,res)=>{

    count++;

    res.send(`number of cliked is ${count}`)
});

const port = 8971;
app.listen(port,()=>{
    console.log(`listening port on number ${port}`)
})