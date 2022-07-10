import React from 'react'

function Updateform() {
  return (

    <div className='form' style={{
        margin: '0em',
        display:'grid',
        placeItems:'center',
        marginTop:'3em'
    }}>
      <div className='form-title' style={{
            textAlign:'center',
            margin:0,
            padding:0
        }}>
        <h1>Update</h1>
        <p className='dark-sub' >Update your account info</p>
      </div>
      <div className='input'>
        <div className='label'>Enter you Username</div>
        <input type='text' placeholder='' className='inputs' />
        <div className='label'>Enter Age</div>
        <input type='text' placeholder='' className='inputs' />
        <div className='label'>Enter your Profession</div>
        <input type='text' placeholder='' className='inputs' />
      </div>
      <div className='buttons'>
        <button className='btn btn-signin' style={{
            textAlign:'center',
            margin:0,
            padding:0,
            marginTop:'1em'
        }}>Update</button>
      </div>
    </div>
  )
}

export default Updateform