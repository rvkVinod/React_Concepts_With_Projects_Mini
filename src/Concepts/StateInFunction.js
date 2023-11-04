import React, { useState } from "react";


const  StateInFunction =()=>{
const [data,setData] = useState({
  name:"devaki",
  gender:"female",
  age:"54"
})
const {name ,gender,age} = data
    return(
        <div>
            <h1>hello from StateInFunction </h1>
            <h5>how to use state in function  by using usestate </h5>
            {/* <h4>My Name :{data.name} age:{data.age} gender:{data.gender} </h4> */}
           {/* without destructure we need use the above method to state  */}
           <h4>Name:{name} age:{age} </h4>
           {/* by destructure only we can use in in single name other wise we need use .operator  */}

        
        </div>
    )
}


export default StateInFunction;