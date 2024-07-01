//3.  question promise


//simple example of promise
const sourav = new Promise(
    (resolve,reject)=>{
        let x = 71;
if(x<10){
    resolve(x)
}else{
    reject(x)
}
    }
    
)

sourav.then((data)=>{console.log("yeah it is true "+data)}).catch((x)=>{
    console.log("that's not true "+x)
})

//////////// promise with conventional function

function krit (){
    return new Promise((reslove,reject)=>{
        const data = { message: "fata fetch" };
        setInterval(()=>{
            
            reslove(data)
            
        },2000)
    })
}
console.log("dicision under processing");

krit().then((info)=>{
console.log(info.message)
}).catch((e)=>{
   console.log(e)
})


//4. what is promise.all ?


//first example
const hello = new Promise((reslove,reject) => setTimeout(reslove,100,"first"));
const hii = new Promise((reslove,reject)=> setTimeout(reslove,200,"second"));
const hye = new Promise((reslove,reject)=> setTimeout(reslove,300,"third"));

Promise.all([hello, hii, hye])
  .then((ans) => {
    console.log(ans);
  })
  .catch((e) => console.log(e));


  //2nd example
const first = new Promise((reslove,reject)=>{ setTimeout(
    reslove,5000,"why"
)})

const send = new Promise((reslove, reject) => {
  const tyty = 34;
  if (false) {
    reslove(tyty);
  } else {
    reject(new Error("not possible"));
  }
});


Promise.all([first, send]).then((data)=>{console.log(data)}).catch((e)=>{console.log(e.message)})


