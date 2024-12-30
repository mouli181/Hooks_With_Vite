import React, { useEffect, useState } from 'react'
import './App.css'
import Timer from './components/Timer'

function App() {
  const [count,setCount]=useState(0)
  const [color,setColor]=useState('orange')

  useEffect(()=>{
    console.log("useeffct");
    
    document.title = `Title Changed ${color} times`
  },[color])

  return (
    <>
      <div>
        <h2>Welcome to Hooks</h2>
        <p>Count {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        <button onClick={()=>{setCount(count-1)}}>decrement</button>
      </div>
      <div className='mydiv'style={{backgroundColor:color}}>
        <button onClick={()=>{setColor('blue')}}>Blue</button>
        <button onClick={()=>{setColor('green')}}>Green</button>
        <button onClick={()=>{setColor('darkmagenta')}}>DarkMagenta</button>
        
      </div>
      <Timer />
    </>
  )
}

export default App
