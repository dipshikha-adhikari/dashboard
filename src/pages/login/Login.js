import React, { useState } from 'react'
import './login.css'
import {login} from '../../redux/apiCalls'
import {useDispatch} from 'react-redux'
const Login = () => {
    const [username, setUserName] = useState('')
    const  [password, setPassword] = useState('')
const dispatch = useDispatch()

    const handleClick = (e) => {
      e.preventDefault()
      login(dispatch,{ username, password})
    }
  return (
<div className="login_container">
   <form action="">
   <input type="text" placeholder='username' onChange={(e) => setUserName(e.target.value)} />
    <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
    <button onClick={handleClick}>Login</button>
   </form>
</div>
  )
}

export default Login