import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const handleClick=()=>
    {
        navigate('/layout/home');
    }
  return (
    <div>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login