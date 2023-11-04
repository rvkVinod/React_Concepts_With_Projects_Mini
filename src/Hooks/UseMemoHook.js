import React from 'react'

const useMemoHook = () => {
  return (
    <div>
      <p>the memo hook is helps to memorize the results and stop at re-rendering while update .
        for suppose if we have two functions and after component update we need only one component to update 
        and avoid unnecessary rendering of 2fns what we do hee we use useMemo to memorize the value of another function 
        to prevent unnecessary render of that fn we can even render when the value of certain value lessthan or morethan that after it render after that.
        *prevents re-rending at update ofg content 
        *helps in optimization
      </p>
    </div>
  )
}

export default useMemoHook
