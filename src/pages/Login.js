import React from 'react'
import Loginform from '../components/Loginform';
import Loginpic from '../components/Loginpic';
import './signin.css';

function Login() {
  return (
    <div className='signin-grid'>
      <Loginform />
      <Loginpic />
    </div>
  )
}

export default Login