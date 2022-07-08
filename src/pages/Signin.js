import React from 'react';
import Signinform from '../components/Signinform';
import Signinpic from '../components/Signinpic';
import './signin.css';

function Signin() {
  return (
    <div className='signin-grid'>
      <Signinform />
      <Signinpic />            
    </div>
  )
}

export default Signin