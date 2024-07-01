import React, { useEffect, useState } from 'react'
import axios from "axios"

const ThirdLessson = () => {

const [product, setProduct] = useState([]);

const [categor, setCategor] = useState([]);
//     https://fakestoreapi.com/products/categories
// https://fakestoreapi.com/products


useEffect(() => {
   


    const res =  axios.get("https://fakestoreapi.com/products");

    res.then((res)=> {setProduct(res.data)}).catch((err)=>{
        console.log(err)
    })
} , [])

useEffect((()=> {

    const cat = axios.get("https://fakestoreapi.com/products/categories");

    cat.then((cate) => {setCategor(cate.data)}).catch((err) => {
        console.log(err)
    })

}),[])

console.log(categor);

// console.log(product)

const handleClick = () => {

   

}


  return (
    <>
      ThirdLessson
      <h1>product</h1>

      <button onClick={handleClick}>men</button>
      {product.map((p) => (
        <div key={p.id}>
          <div>title :-{p.title}</div>
          <div>price :- {p.price}</div>
          <div>desc :- {p.description}</div>
          <div> catagory :- {p.category}</div>
          <br/>
        </div>
      ))}
    </>
  );

}


export default ThirdLessson