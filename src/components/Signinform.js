import React from 'react'
import '../pages/signin.css'
import {HiOutlineScale} from 'react-icons/hi'

function Signinform() {
  return (
    <div className='signinform'>
      <div className='logo'>
        <HiOutlineScale size={40} color='#6603FC' className='logo-flex'/>
      </div>
      <div className='form'>
        <div className='form-title'>
          <h1>Sign up</h1>
          <p className='dark-sub'>Sign-in to see the user details</p>
        </div>
        <div className='input'>
          <div className='label'>Enter you Email-id *</div>
          <input type='text' placeholder='' className='inputs' />
          <div className='label'>Enter Password *</div>
          <input type='password' placeholder='' className='inputs' />
          <div className='label'>Confirm Password *</div>
          <input type='password' placeholder='' className='inputs' />
        </div>
        <div className='checkbox'>
          <div className='check-psuedo'><input type='checkbox'/></div> <p className='p-check'>Remember me</p>
        </div>
        <div className='buttons'>
          <button className='btn btn-signin'>Sign up</button>
        </div>
        <div className='form-footer'>
          Already have an account? <a href='/login' className='form-link'>Login</a>
        </div>
      </div>
    </div>
  )
}

export default Signinform