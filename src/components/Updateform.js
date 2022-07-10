import React, { useState } from 'react'
import { auth, db } from '../firebaseConfig';

function Updateform({Data}) {

  const [Profession, setProfession] = useState(Data?Data.Profession:'');
  const [Age, setAge] = useState(Data?Data.Age:'');
  const [Name, setName] = useState(Data?Data.Name:'');

  const handleSubmit = async () =>{
    await db.collection("UserDetails").doc(auth.currentUser.uid).update({
      Profession: Profession,
      Age: Age,
      Name: Name,
    }).then(() =>{
      alert(`Updated Successfully`)
    })
  }

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
        <input type='text' placeholder='' className='inputs' 
        value={Name}
        onChange={(e)=>{
          setName(e.target.value)
        }}
        />
        <div className='label'>Enter Age</div>
        <input type='text' placeholder='' className='inputs' 
        value={Age}
        onChange={(e)=>{
          setAge(e.target.value)
        }}
        />
        <div className='label'>Enter your Profession</div>
        <input type='text' placeholder='' className='inputs'
        value={Profession}
        onChange={(e)=>{
          setProfession(e.target.value)
        }}
        />
      </div>
      <div className='buttons'>
        <button className='btn btn-signin' style={{
            textAlign:'center',
            margin:0,
            padding:0,
            marginTop:'1em'
        }} onClick={handleSubmit}>Update</button>
      </div>
    </div>
  )
}

export default Updateform