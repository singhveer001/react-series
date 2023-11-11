import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username:"veerbhan",
    age : 21
  }
  return (
    <>
   
    <h1 className='bg-green-400 text-black rounded-xl'>Tailwind Test</h1>
    {/* <Card channnel ="ChaiOrCode" someObj = {myObj}/> */}
    <Card username ="ChaiOrCode" btnClick = "Follow me"/>
    <Card username ="Veer" btnClick = "Click me"/>
    <Card username ="Mausam" btnClick = "Visit me"/>
    
   
    </>
  )
}

export default App
