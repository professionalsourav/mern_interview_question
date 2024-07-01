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
