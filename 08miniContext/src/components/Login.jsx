
import React,{useState,useContext} from 'react'
import UserContext from '../context/userContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault() 
        // By default jab bhi ham submit karenge to value url ke through khi na kahi chali jati hai
        // Ya firr post mrthod ke through chali jati hai or ham chahte hai vo na jaye isliye preventDefault kiye 
        setUser({username,password})
    }


  return (
    <div>
        <h2>Login</h2>

        <input type="text" 
        value={username}  // value govern from username
        onChange= {(e) => setUsername(e.target.value)}  // if any change in field then update that state
        placeholder='username' />

        {" "}

        <input type="text" 
        value={password}  
        onChange= {(e) => setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login