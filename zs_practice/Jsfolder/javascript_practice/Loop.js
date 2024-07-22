
//for loop

const x = 34;

for(let i=0; i<34;i++){
    console.log(i)
}

//if else

function ifelsefun(x){

    if(x>100){
        console.log("it is greater then 100");
    }
    else if(x<100 && x>80){
        console.log("it is in between 100 and 80");
    }
    else if(x<80 && x>60){
        console.log("it is in between 80 and 60");
    }
    else{
        console.log("it is below 60")
    }

}

ifelsefun(80)

//ternary operator

var lx = 34 > 56 ? true : false;

let xt = lx ? "it is true": "it is false" ;
console.log(xt)


console.log(lx)

var terx = 100;

var tery = terx === 1000 ? 100 : 200;
console.log(tery);


function terop(x){
    var y = x === true ? 34 : 66;
    return y
}

var teropval = true;
console.log(terop(teropval)); 


//switch case

//using value directly in switch  

function swcfn(day){
   switch(day){
    case 1: console.log("monday")
    break;
    case 2: console.log("tue")
    break
    case 3: console.log("wed")
    break
    case 5 :case 6 :case 7: console.log("i rember everything")
    break
    default:
        console.log("hyeee guys, it is out of our reach")

   }
}

swcfn(90)

// using comparsion operator inside switch case

function cwtcfn(value){
    switch(true){
        case(value>100):
        console.log("it is greater then 100");
        break;

        case(value>80 && value<100):
        console.log("it is in between 100  and 80")
        break;

        case(value>60 &&  value <80):
        console.log("it is lesser then 60")
        break;

        default:
            console.log("it is a value i like to conside");
    }
}

cwtcfn(78)


//checking odd and even number

function coaen(n){

    var evarr= [];
    var oddarr = [];
    for(let i = 1;i<=n; i++){
if(i % 2 === 0){
    evarr=[...evarr,i]
    
}else{
    oddarr = [...oddarr,i]

}
    }

    return {"even array":evarr,"oddarr":oddarr}

}


console.log(coaen(8)); 


//using while loop

function wlilopfn(x){

    while(x<10){

          console.log(x);
        
          x++;

          if(x === 5){
            continue
          }




   
  
      
    }
}
wlilopfn(1)


//using do while loop


function dwhillopfn(x){

    do{
      console.log(x)
      x--

      
    }while(x>10)

}

dwhillopfn(13)


// call function


function calfn(grreet, appi){
    console.log(`${grreet}, ${this.name}${appi}`)
};

const person = {name: "sourav"};

calfn.call(person,"hello","!");

// apply

function applfn(name, adress){
    console.log(`my name is ${name} ${this.surname} , i am from ${adress}.`)

}
var valname = {name: "sourav", surname: "kumar"} ;

applfn.apply(valname,["sourav", "odisha"])

//bind


function bindfn(name, age){
    console.log(`hye this is ${name} ${this.express} and my age is ${age}`)
}

const wha = {
    express: "smile"
}


// nested for loop

function nefolofn(x,y){

    for(let i =0; i< x;i++){
        for(let j=0; j< y; j++){

            console.log(i,j)
        }
    }

}

nefolofn(3,3);

// for each loop

var foreloar = ["sourav","lipun","jadeja", "dhoni", "aswin"];

foreloar.forEach(function(value,index, arr){
    console.log(`the number is ${index} and value is ${value} and an array [${arr}]`); 
});

// for each loop with separate function

var foreclosp = ["value", "system","info","life"];

const foeavar =  foreclosp.forEach(loophii)

function loophii (value, index){

    console.log(`hello guys the value is ${value} and index is ${index}`);

}


// for in loop

var foinobj = {
    name: "sourav",
    age: 27,
    gender: "male",
    maretial_status: false
}

for(let i in foinobj){
    console.log(`the key is ${i} and the value is ${foinobj[i]} `)
}


// for of loop

var forofarr = ["hello",34,true, "tutu"]



for (let i of forofarr) {
  console.log(`the index is ${i} `);
}


//map loop

let mparr = [1,2,3,4,5,6];

let resmparr = mparr.map(mapfn
);

function mapfn(value){

return value * 5

}


console.log(resmparr)

for(let i of resmparr){
    console.log(`the value is ${i}`)
}

//map loop for array of object

var mplofoobj = [{
    sec:1,
    min:5,
    hr:67,
    day:"monday"
},
{sec:"sourav"}];

let xcv =mplofoobj.map((value,index)=>{


    return value.sec


})

console.log(xcv);

for(let i of xcv){
    console.log(i)
}

//filter 

let filterarr  =  [1,2,3,4,56,89];

let resfilarr = filterarr.filter((value,index, arr)=>{



    if(value < 50){
        return value ;
    }
  
})
console.log(resfilarr)

//reducer

let reduarr = [1,2,3,4,56,7,8];

let resredval = reduarr.reduce((prev, curv, curin)=>{

    
   
    return prev + curv
})

console.log(resredval)

// clouser

function outerfn (x,y){
    var z = "hello world";
    function innerfn(as){

        let nas = as * 20;
        return {x,y,z,nas}
    }

    return innerfn(2)
}

const cls = outerfn(12,34);


console.log(cls)

for(let i in cls){
    console.log(`${i} : ${cls[i]}`)
}






