// callback function

function calbcfn(x, callback){
    return callback(x)
    
}

function calbc(y){
    return `hello ${y} !`
}

var name = "sourav";

console.log(calbcfn(name, calbc)); 


// callback function real example

function mycalculator(x,y,callback){
    let res = x+y;
    callback(res)
};


function displayer (result){
    console.log(`the answer is ${result}`); 
};

mycalculator(12,34,displayer)


//callback function with an arrray filteraition


function clbcfnwaarfi(arr, callback){

    const newarr = [];

    for(let i of arr){
        if(callback(i)){
            newarr.push(i);
        }
    }

    return newarr

}

const vararr = [1,3,23,-89,87,-90,-7];

function clifl(x){
    if(x>0){
        return x
    }
}

const newuarr = clbcfnwaarfi(vararr,clifl)

console.log(newuarr)


//fatarrow function

const ftarwfn = (arr,callback)=>{

    var newarr = []; 
    for(let i of arr){
        if(callback(i)){
            newarr.push(i)
        }
    }
    return newarr
}

const ftarr = [1,2,3,4,-7,-4,-6];

const ftnearr = ftarwfn(ftarr, (x)=> x>0) ;

console.log(ftnearr);


// difference between conventional function and fat arrow function


/* 1. conventional function has a argument object but arrow function will not
have */

function convfunargobjfn(){
    console.log(arguments)
}
 convfunargobjfn("hello",1,3,"how are you");

/* const fatarrwargobjfn = () => {
    console.log(arguments)
}
fatarrwargobjfn("hello")

we are getting error

*/


/* 2. for single line code fat arrow function will not required {} and return */

const shtfndfn = (x) => x*3;

console.log(shtfndfn(4))

/* 3. generator function is not possible in fat arraow function */


//Promise having variable

const promvr = new Promise((resolve,reject)=>{
if(5<10){
    resolve()
}
else{
    reject();
}
})

promvr.then(()=>{console.log("sucess")}).catch(()=>{console.log("failure")})


//promise with argument

const promvrarg = new Promise((reslove,reject)=>{
    let x = 19;

    if(x<20){
        reslove(x);
    }else
    {
        reject(new Error("it is not possible"))
    }
})

promvrarg
  .then((val) => {
    console.log(`the ${val} is lesser then 20`);
  })
  .catch((e) => {
    console.log(e);
  });

  //promise with 3 state 

  const Promwithst = new Promise((reslove,reject)=>{


    let x = 56;
    let y = 76;

    setTimeout(()=>{

        if(x>y){
            reslove(x)
        }

        else{
            reject(new Error("not able to reslove"))
        }
    },[2000])

  })

  console.log("dicision pending my friend");

  Promwithst.then((x,y)=>{console.log(` greater  ${x}`);}).catch((error)=>{console.error(error.message)})


  //promise with function

  function promwifun(){
    return new Promise((reslove,reject)=>{

        let data ={
            nello: "greeting",
            kab: "tum jab bolo tab"
        }

        setTimeout(() => {

            reslove(data)

            // reject("hei paribani")
            
        }, 200);

    })
  }

  promwifun().then((data)=>{
    
    for(let i in data){
        console.log(`the key is ${i} and value is ${data[i]} `); 
    }
    }).catch((e)=>{console.error(e)})



    // promise alll


    const proma1 = new Promise(  (reslove,reject)=>setTimeout(reslove, 100, "first"));

    const proma2 = new Promise((reslove,reject)=> setTimeout(reslove,200,"second"));

    const proma3 = new Promise((reslove,reject)=>setTimeout(reslove,300,"third"))

   const promaarr = [proma1,proma2,proma3] ;

   Promise.all(promaarr).then((val)=>{
    
    console.log(val)
    val.forEach((value,index,arr)=>{
      console.log(`the index is ${index} value is ${value}`)
    })
    
    } ).catch((e)=>{console.log(e)})


    // promise all settle

    const promas1 = new Promise((resolve,reject)=>{setTimeout(resolve, 400, "promise settle 1")});
    const promas2 = new Promise((reslove,reject)=>{setTimeout(reject, 500, "promise settle 2")});
    const promas3 = new Promise((resolve,reject) =>{setTimeout(resolve, 600, "promise settle all 3");} );

    const promasarr = [promas1,promas2,promas3];

    Promise.allSettled(promasarr).then((val)=> {
        val.map((value,index)=>{
               console.log(value.status +" "+ value.value)
        })
    });


    // async await with function

    async function asawfn (x){
        try {
  const hello = await x*5;

  console.log(hello)
            
        } catch (error) {
            console.log(error)
        }
     
    }

    asawfn(10);

    //async await with arrow function

    const asawwafn = async(v)=>{
        try {

            const x = await v * 76;
            console.log(x);
            
        } catch (error) {
            console.log(error)
        }
            }

            asawfn(34)

    //fetching data in async await way

 async function fetasydaawfn(){
    try{
  
        let info = await fetch("https://jsonplaceholder.typicode.com/posts");

        if(!info.ok){
            throw new Error(`the network error : ${info.status}` )
        }
        const response = await info.json();
        console.log(response)

        const valmap =  await response.map((val, index)=>{

            let x = val.title
            return x

        })

        console.log(valmap)

        for(let i of valmap){
            console.log(i)
        }

        const idextractor = await response.map((value, id)=>{
          return  value.userId
        })
        
       console.log(idextractor)


       const reduval = await idextractor.reduce((prev,curv)=>{
            let sumation = prev+ curv;
            return sumation
       })

       console.log(reduval)

       const filterval = await response.filter((value,index)=>{

        if(value.id <= 10){
            return value
        }
        
       })
       console.log(filterval);

     

       for(let i in filterval){
        console.log(filterval[i].title)
       }
       
    }
    catch(er){
  console.log(er)
    }
 }

 fetasydaawfn()

// async await fetching data with object

async function asyawfetdawiobfn(){
    let url = "https://jsonplaceholder.typicode.com/posts"
    try{

        const rttr = await fetch(url, {
            method:"GET",
            headers:{
                "Content-Type": "application/json"            },
                mode:"cors"
        });


       

        if(!rttr.ok){
          throw new Error(`the network error: ${rttr.status}`)
        }
        else{


            const jsonfyrrt = await rttr.json();
            console.log(jsonfyrrt);

        }

        
    } catch(err){
        console.log(err)
    }
}

asyawfetdawiobfn();

//fetching data by using multiple asyn await

async function ftchasynfsfn(url){
    try{
        const data = await fetch(url,{
            method: "GET",
            mode: "cors",
            headers:{
                "Content-Type": "application/json"
            }
        });
        
        if(!data.ok){
            throw new Error(`the network error : ${data.status}`)
        }
        else{
            const reslut = await data.json();
            return reslut
           
        }

    }catch(err){
        console.log(err)
    }
}



async function slicarrfromobjfn(url){
    try {

    let info = await ftchasynfsfn(url);

   console.log(info);
  let x = await info.slice(0,10);
  
  return x;
        
    } catch (error) {
        console.log(`problem at slicarfromobjfn : ${error}`)
    }
}

async function extractobjfn(url){
    try{

        let x = await slicarrfromobjfn(url);
        console.log(x);

        for(let i in x){
            console.log(`${x[i].id} :- ${x[i].title}`)
        }
        console.log('code end')
    }catch(err){

        console.log(err)
    }
}

extractobjfn("https://jsonplaceholder.typicode.com/posts");

extractobjfn("https://fakestoreapi.com/products");


//fetching data using promise

let ftcdauspro = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((ans) => console.log(ans))
  .catch((err) => console.log(err));


function fetdausiproifn (url){
    return new Promise((reslove,reject)=>{
       fetch(url).then((res)=>{


        return res.json()
       }).then((data)=> reslove(data)).catch((err)=> {
        reject(err)
       })
    })
}

fetdausiproifn("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    console.log(data);

  })
  .catch((err) => {
    console.log(err);
  });

  //mulltiple data fetching from one asyncronus function


  async function muldafetfrooafn(url){
    try{

         const x = await fetch(url);

         const y = await x.json();
         console.log(y)

    }catch(err){
        console.log(err)
    }
   

  }


  muldafetfrooafn("https://jsonplaceholder.typicode.com/posts");

  muldafetfrooafn("https://fakestoreapi.com/products");


// async fetching using post method


async function afusipomdfn(url){
try{

     const dara = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({"userId":11,

            "that":1,
            "title":"maja a gaya",
            "body":"information"

        })
    })

    const data = await dara.json();
   console.log(data); 
    
}
catch(err){
return err
}
   

}

afusipomdfn("https://jsonplaceholder.typicode.com/posts");


// fetching multiple post data using async await

async function fetmultpodausiasyawaifn(request){
try{
const data = await fetch(request);
const info = await data.json();
console.log(info)


}catch(err){
console.log(err)
}
};


const requestFirst = new Request("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({"userId": 12,
        "id": 102,
        "title": "heelloo"
    })
});

const requsecond =new Request("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({"userId": 13,
        "id": 102,
        "title": "why heelloo"
    })
});

fetmultpodausiasyawaifn(requestFirst)
fetmultpodausiasyawaifn(requsecond)

// fetching data using update 

async function fetdausiupda(){


    try{

        const data = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1",{
            method: "PUT",
            mode:"cors",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "userId": 2,
                "id":2,
                "title": "infomartation updated",
                "body": "it is not quite immposible task"
            })
          }
        );

        const hello = await data.json();
        console.log("the data sucessfully updated:", hello);

    } catch(err){
       console.log(err)
    }
}

fetdausiupda()

//patch method of fetching api using async await

async function patmeofetapusasawfn(url){

    try{

            const x = await fetch(url,{
        method:"PATCH",
        mode: "cors",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "title":"hello friends"
        })
    })

    const y = await x.json();
    return y
    }catch(err){
        console.log(err)
    }



}

async function retriveprototypeofpatchfn(url){
    try{

        const x = await patmeofetapusasawfn(url)
        console.log(x)

       const { title} =  x;
       console.log(title);
    }catch(err){
        console.log(err)
    }

    
}

retriveprototypeofpatchfn("https://jsonplaceholder.typicode.com/posts/1");

//patch data using promise

function patdausprofn(){
    return new Promise((reslove,reject)=> {

        fetch("https://jsonplaceholder.typicode.com/posts/1",{
            method: "PATCH",
            mode:"cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": "data filtered by using promise"
            })
        }).then((data)=>  data.json()).then(reslove).catch(new Error(reject))
    })
}

patdausprofn().then((info)=>{console.log(info)


}).catch((err)=>{console.log(err)})

//delete method using async await

async function demeusasawfn(){
    try{
   const x = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
    mode: "cors",
    headers: {
        "Content-Type": "application/json"
    }
   });

   if(!x.ok){
  throw new Error(`network status:  ${x.status}` )
}

const y = await x.json();
console.log(`data delete sucessfully ${y}`);



    }catch(err){console.log(err)}
}

demeusasawfn()

//delete method using promise

function demeuspromfn(){
    return new Promise((reslove,reject)=>{
fetch("https://jsonplaceholder.typicode.com/posts/1").then((data)=>{
return data.json()
}).then(reslove).catch(reject)
    })
}

demeuspromfn().then((info)=> console.log("data delete sucessfully")).catch(
    (err)=> {console.log(err)}
)



// generator function for control over console 



function *grfnfcoovcofn(){

    console.log("generator function has resumed");
    yield 1;
    console.log("generator function is running ");
    yield 2;
    console.log("generator function has ended");
    yield 3;
}

let grfnfcoovcovar = grfnfcoovcofn();

grfnfcoovcovar.next()
grfnfcoovcovar.next()
grfnfcoovcovar.next()

// generator function for control over loop

function *gefufcoovlofn(){
    let i =0;
    while(true){
        console.log(i);
      yield  i++;
    }
}

let gefufcoovlovar = gefufcoovlofn()

gefufcoovlovar.next();
gefufcoovlovar.next();
gefufcoovlovar.next();
gefufcoovlovar.next();

// generator function for data fetching


function* fetchDataGenerator() {
  const response1 = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data1 = yield response1.json();

  const response2 = yield fetch("https://jsonplaceholder.typicode.com/posts");
  const data2 = yield response2.json();

  return { data1, data2 };
}

function run(generator) {
  const iterator = generator();

  function handle(result) {
    if (result.done) return Promise.resolve(result.value);

    return Promise.resolve(result.value)
      .then((res) => handle(iterator.next(res)))
      .catch((err) => handle(iterator.throw(err)));
  }

  return handle(iterator.next());
}

// Usage
run(fetchDataGenerator)
  .then((data) => {
    console.log("Data fetched:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });




