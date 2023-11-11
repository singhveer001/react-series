import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 5;

  const addValue = () =>{  
    
    if(counter<20){
      counter += 1; 
    }
    setCounter(counter); 
    console.log("clicked",counter);
  }
  
  const remValue =()=>{
   // sir ne normal counting karaya tha maine negative
   // or positive kitna print karna hai condition dali hai
    if(counter > 0){  
      counter -= 1;
    
    }
    setCounter(counter);
    console.log("clicked",counter);
  }

  return (
    <>
      <h1>Chai Or React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={remValue}
      >Remove Value</button>
    </>
  )
}

export default App
