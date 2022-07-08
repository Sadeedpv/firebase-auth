import React from 'react'
import {HiLightningBolt} from 'react-icons/hi'
import '../pages/signin.css'


function Loginform() {
  return (
    <div className='signinform'>
    <div className='logo'>
      <HiLightningBolt size={40} color='#6603FC' className='logo-flex'/>
    </div>
    <div className='form' style={{
        marginTop: '3em'
    }}>
      <div className='form-title'>
        <h1>Login</h1>
        <p className='dark-sub'>Login to recover your account</p>
      </div>
      <div className='input'>
        <div className='label'>Enter you Email-id *</div>
        <input type='text' placeholder='' className='inputs' />
        <div className='label'>Enter Password *</div>
        <input type='password' placeholder='' className='inputs' />
      </div>
      <div className='checkbox'>
        <p className='p-check' style={{
            color:'#6603FC',
            fontWeight:'600',
            fontSize:'1.1rem'
        }}>Forgot your Password ?</p>
      </div>
      <div className='buttons'>
        <button className='btn btn-signin'>Login</button>
      </div>
      <div className='form-footer'>
        Don't have an account? <a href='/signup' className='form-link'>Sign-up</a>
      </div>
    </div>
  </div>
  )
}

export default Loginform