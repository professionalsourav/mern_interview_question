# nodejs interview question

## all nodejs interview question is in server folder

question
```
1. what is eventemitter in nodejs ?
```
answer

```
it is a class which is aquired from default module of nodejs "events"

it has two functionality 

event.emit for emitting event

event.on for listening event


# code

import Eventemitter from "events";

const event = new Eventemitter();
event.on("click",(data)=>{
    console.log(`eevnt listened ${data.mess}`)
})
event.emit("click", {mess:"clicked"})
```
question 
```
2. why nodejs is single threaded ?
````
answer

- [answer is in this link](https://www.geeksforgeeks.org/why-node-js-is-a-single-threaded-language/)


question

```
3. how to read files in nodejs ?
```

answer

```
Using fs.readFile (Asynchronous)
The fs.readFile method reads the file asynchronously. This is the preferred method for reading files in Node.js because it does not block the event loop.

Using fs.readFileSync (Synchronous)
The fs.readFileSync method reads the file synchronously. This method blocks the event loop, so it should be used only when necessary, such as during initialization of a script.

Using fs.promises.readFile with async/await
The fs.promises API provides promise-based versions of the fs methods. This allows you to use async/await for a cleaner asynchronous code.
```
question

```
4.what is multer ?
```

answer

```
Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files in Node.js applications. It is an essential part of working with file uploads in web applications built with Express.js. Multer makes it easy to handle form data that includes files, allowing you to upload single or multiple files to your server.

Key Features of Multer
File Upload Handling: Multer provides a simple and efficient way to handle file uploads. It processes the multipart/form-data and makes the files available on the req.file or req.files object.
Customizable Storage: Multer supports two types of storage: DiskStorage (saving files directly to disk) and MemoryStorage (storing files in memory as Buffer objects).
File Filtering: You can set filters to accept only specific types of files.
Limits: Multer allows you to set limits on the size and number of files being uploaded.
```