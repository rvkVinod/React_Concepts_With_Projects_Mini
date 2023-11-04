import React, { useEffect, useRef } from "react";

const UseRefHook = () => {

  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit =(a)=>{
  console.log(email.current.value);
  console.log(password.current.value)
  a.preventDefault()
  }

  useEffect(()=>{
    password.current.focus();

  },[])
  return (
    <div>

      <h4>useRef hook</h4>
      <form onSubmit={handleSubmit}>
      <input type='text' ref={email} name="email" placeholder='enter ur name' />
      <input type='password' ref={password} name="email" placeholder='enter ur password' />

    <input type="submit" />
    </form>
      
    </div>
  )
}

export default UseRefHook
