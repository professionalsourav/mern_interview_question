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

//4. what is closure ?

function ouerf(x,y){
    
    
   const z = 45

    function innerf(){
        return {x,y,z}

    }
    return innerf
}

let g = ouerf(12,56);

let {x,y,z} = g();
console.log(x,y,z)


//5. what is callback function ?

function tyt(callback){

    var mk = 56; 
    return callback(mk)
}

function tyu(info){
    console.log("hello world "+info)
}

tyt(tyu)

//implementing timeout

function alr(callback){
    console.log("immplement timeout");

    setTimeout(()=>{
        callback("here i am implementing for last time")
    },1000)
}

function ooo(data){

    console.log(`here i am getting data which is ${data}`)

}

alr(ooo)

//using foreach

var xarr = [1,2,3,4];

function jku(callback){

    console.log("we are performing callback");

    xarr.forEach(callback)
}

function itt(number){

    console.log(`numbers are ${number}`)
}

jku(itt)


//6. what is hoisting ?


console.log(sdt(12))
whatdo()
console.log(ho)
var ho;

ho = 6;

function whatdo (){
    console.log("hiii")
}

function sdt (x){
  return x
}

// console.log(xvbn)

// let xvbn = 56;

// console.log(nmhj)
// const nmhj = 67;

let bnbn = 678;
console.log(bnbn)

