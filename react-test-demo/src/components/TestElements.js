import React,{useState} from 'react'

function TestElements() {
    const [Count,setCount] = useState(0)

    const getAsyncCount = () =>{
        setTimeout(() =>{
            setCount((prevCount) => prevCount +1)
        },500)
    }
    return (
        <>
           <h1 data-testid="counter">{Count}</h1> 
           <button data-testid="button-up" onClick={() =>setCount(Count+1)}>Up</button>
           <button data-testid="button-down" disabled onClick={() => setCount(Count -1)}>Down</button>
           <button data-testid="button-aync" onClick={getAsyncCount}>Button Async</button>
        </>
    )
}

export default TestElements
