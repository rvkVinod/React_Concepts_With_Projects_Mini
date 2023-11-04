import React,{useEffect, useState} from 'react'

const UseEffectHook = () => {
    const [count,setCount] =useState(0);

    useEffect(()=>{console.log(count, "button clicked",[count])})

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((response)=>{
        if(!response.ok){
            console.log("netWork api err")
        }return response.json();
    })
    .then((data)=>{
       console.log("data:",data) 
    })
    .catch((err)=>{
  console.log("error",err)
    })
  },[])
  return (
    <div>

        <h3>useEffect component</h3>
        <h3>you have click {count} times </h3>
        <button onClick={()=>{setCount(count+1)}} >click</button>

        
      
    </div>
  )
}

export default UseEffectHook;

