import React from 'react'
import './login.css'
import Error from '../../components/error/Error'

const Login = () => {
   
  return (
<div className="login_container">
   {/* <form action="">
   <input type="text" placeholder='username' onChange={(e) => setUserName(e.target.value)} />
    <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
    <button onClick={handleClick}>Login</button>
   </form> */}
  <Error/>
</div>
  )
}

export default Login