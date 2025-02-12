

// foo();

// function foo(){
//     console.log("hello");
// }

// var arr = [1,3,4,5,6,7];


// for(let i = 0; i< arr.length; i++){
//     console.log(arr[i])
// }

// console.log(arr);



// var fg = {
//     nae: "skff",
//     age: 34,
//     gendr: "M",
//     emp: true,
//     life: function(gr){
//         return `hello ${gr}`
//     }
// };


// console.log(fg.nae);
// console.log(fg.age);
// console.log(fg.gendr);
// console.log(fg.life(34))


// function dree(artt){



//     for(let i=0; i<artt.length;i++){
//         if(artt[i]> 10){
            
//             continue
//         }

//        console.log(artt[i]);
//     }


// }
// var a =[1,5,7,8,15,9];

// dree(
//     a
// )


// const urlobj = new URL("http://sourav.com?path=56");

// console.log(urlobj.hostname);



// async function sourav(){
//     try {

//           const res = await fetch(
//             "https://jsonplaceholder.typicode.com/posts",
//             {
//               method: "GET",
//               mode: "cors",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//             }
//           );

//           const result = await res.json();
//            console.log(result)

//           for(let data of result){
//             console.log(` ${data.id}. ${data.title}`)
//           }


           
//     } catch (error) {
//         console.log(error)
//     }
  
// }

// const ress = sourav();



// const queryhead = document.querySelector("#heading");

//  console.log(queryhead);

//  queryhead.style.color = "red";

// const wreap = document.querySelectorAll("li");

// console.log(wreap);


// for(let i = 0; i< wreap.length; i++){
//     wreap[i].style.color = "blue"
//     wreap[i].style.backgroundColor = "#FA709F"
// }





//sibling node traversal

const sibli = document.querySelector(".filmname");

console.log(sibli)