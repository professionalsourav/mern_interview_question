// let x = 1;

// function sourav(){
//     return new Promise(function(res,rej){
      
//         setTimeout(()=> {
//             if (x> 9){
//                 res("i am bigger");
//             }
//             else{
//                 rej("i am not")
//             }
//         }, 5000)

//     })
// };


// console.log("panding setate");

// sourav().then((val)=> {
//     console.log(val)
// }).catch((err)=> console.log(err))


// const babu = fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "GET",
//     mode: "cors",
//     headers: {
//         "content-type": "application/json"
//     }
    
// }).then((res)=>res.json()).then((res)=> {
//     console.log("hello world")
//     for(let value of res){
//         console.log(`${value.id} is ${value.title}.`)
//     }
    
//     console.log(res)})




    // const sourw= async()=>{

     
    //     try {
    //         const info = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // method: "GET",
    // mode: "cors",
    // headers: {
    //     "content-type": "application/json"
    // }});

    // const intr = await info.json();
    // console.log(intr)
            
    //     } catch (error) {

    //         console.log(`here is my error: ${error}`)
            
    //     }




    // }


    // sourw()



    // let x = 10;

    // let y = 12;
    // let z = 15;


    // const lipun = new Promise(function(res, rej){
    //     if(x>5){
    //         res("sucessful")
    //     }
    // })

    //  const babunu = new Promise(function (res, rej) {
    //    if (y > 5) {
    //      rej("suc");
    //    }
    //  });

    //   const sour = new Promise(function (res, rej) {
    //     if (x > 5) {
    //       res("sucessful");
    //     }
    //   });


    //   Promise.all([lipun,babunu,sour]).then((res)=> console.log(res)).catch((er)=> console.log(er));


// class sourav{
//     constructor(value, valy){
//          this.x = value;
//          this.y = valy
//       console.log("hello world")
//     }
//    sum(){
//      let sum = this.x + this.y;
//      console.log(sum)
      
//    }

//    static burra (){
   
//     console.log("working")
//    }
// }

// let a = new sourav(123, 234);



// let b = new sourav(567, 887);

// let c = new sourav(9567, 9887);
// a.sum()

// sourav.burra()


// a.sum();
// b.sum();
// c.sum();


// class hero extends sourav{

// }

// let z = new hero()



// function sour(x,y){


//     return x+y;

// }

// let t = 23;
// let o = 65;

// console.log(sour(t,o));

// const tyu = (u,m) => {
//     return u-m;
// }

// console.log(tyu(o,t));


//3rd question

// function mnu(min){



//     if(min<= 0){
//         return `min can't be in nagative.`
//     }
//     else{
//     let  sec = min* 60;
    

//     return `${min} min = ${sec} sec.`
//     }
// }


// let vbt = 34;
// let ghy = -67;

// console.log(mnu(vbt));

// console.log(mnu(ghy))


//4th question

// const incre = (value)=> {

//     return value+1;


// }

// let x = -12;

// console.log(incre(x))


//5th question

// let sourav = (a,b)=> {

//     if(a <= 0 || b<= 0){
//         return `this is not a triangle`
//     }
//     else{
  
//     let rty = a*b;
//     return 0.5*rty;
//     }

// };

// let x = 0;
// let y = 7;


// console.log(sourav(x,y))


//6th question

// function suro (yr){

//     if(yr< 0){
//         return `year can't be nagative`
//     }
//     else{
//             let day = yr * 365;
            
        
//         return `${yr} years = ${day} days`
//     }
// };


// let y = 0
// console.log(suro(y))


//7th question

// function sourav(a){
   
//     return a[0];



// }

// let a = [11,2,3,5,7,8,45];

// console.log(sourav(a))

//8th question
// function sot (v,c){
//     return v*c
// }

// console.log(sot(23,56));

//9th q

// function ht(hr){
//     return hr*60;

// }

// console.log(ht(5))


//10th question

// function range(f,s){

//     if(f<=0 || s<=0){
//         return `not possible`
//     }else{
      
//          let x = (f + s) - 1;
//          return x;
//     }
    

// }

// console.log(range(3,4))


//11th question

// function rtyo(p1,p2){
//     return p1 % p2

// }

// console.log(rtyo(5,4))

//12th question

// function heii(l,w){
//     if(l<=0 || w<=0){
//         return`not possible`;
//     }else{
//         return l*w;
//     }
// }

// console.log(heii(23,-45));


//13th question


// function sourav(nasme){
//     return`something is ${nasme}`
// };

// let name ="better than nothing"

// console.log(sourav(name))


//14th question

// function sourt(nu){
//     if(nu<= 0){
//         return true
//     }
//     else {
//         return false
//     }
// }

// let x = -8;

// console.log(sourt(x))

//15th question

// function poly(n){
//     if(n<=2){
//         return `not possible`;
//     }

//     else{
//     let angle_value = (n-2)*180;
//     return `the polygon value is ${angle_value}`;
//     }

// };


// console.log(poly(2))


//16th question

// function bask(two, three){

//     if(two<0 || three < 0){
//         return `not possible`
//     }
//     else{

//     let x = (two* 2)+(three*3);
//     return x
//     }

// }

// let x = 6; let y = 3;

// console.log(bask(x,y));

//17th question

// function dfr(name){
//     if(name == ""){
//         return `error`
//     }

//     else{
//     return `${name}kumar`;
//     }
// }

// let n = "sourav";
// let c = "";

// console.log(dfr(n));


// console.log(dfr(c))

//18th question

// function name(a,b)

// {

//     let sum = a+b;

//     if(sum<100){
//         return true
//     }

//     else{
//         return false
//     }

// }

// console.log(name(80,23))

//19th question


// function rrti(a,b,c){

//     if(a<0 || b<0 || c< 0 ){
//         return `put a valid number`;
//     }
//     else{

//     let sum = (a*2)+ (b*4)+ (c*4);

//     return `number of leg is ${sum}`;

//     }

// };

// console.log(rrti(0,3,3));

//20th question

// function nummm(a,b){
//     if(a===b){
//         return `true`
//     }

//     else{
//         return `false`
//     }
// };


// console.log(nummm(3,3))




