import React from 'react';
import Signinform from '../components/Signinform';
import Signinpic from '../components/Signinpic';
import './signin.css';

function Signin({user}) {
  return (
    <div className='signin-grid'>
      <Signinform user={user}/>
      <Signinpic />            
    </div>
  )
}

export default Signin