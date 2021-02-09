import React from 'react'
import{useState, useEffect} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
  
    useEffect(() => {})

  return (
    <>
      <div className="Counter">
        <h3>This is the count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </>
  )
}

export default Counter
