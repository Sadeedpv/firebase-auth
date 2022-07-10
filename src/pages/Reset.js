import React, { useState } from 'react'
import { auth } from '../firebaseConfig'
import { sendPasswordResetEmail } from 'firebase/auth'
import { Link } from 'react-router-dom'


function Reset() {
    const [email, setemail] = useState('')
  return (
    <div style={{
        display: 'grid',
        placeItems: 'center',
        marginTop:'7em'
    }}>
        <div style={{
            border:'3px solid gray',
            borderRadius:'10px',
            padding:'1em',
            display:'flex',
            flexDirection:'column',
            ailgnItems:'center',
        }}>
        <div className='label'>Enter you Registered Email-id </div>
        <input type='email' className='inputs' autoComplete='off' autoFocus
         value={email}
         onChange={(e)=>{
            setemail(e.target.value)
         }}
        />
        <button className='btn' onClick={async () =>{
            await sendPasswordResetEmail(auth, email)
            .then(() =>{
                alert('Password reset link has been sent to your email. Please check you spam folder if you do not see it in your inbox.')
            })
            .catch((error) =>{
                alert(error.message)
            })
        }}>Send</button>
        <Link to='/login'><button className='btn'>Back to Login</button></Link>
        </div>
    </div>
  )
}

export default Reset