import React from 'react'
import Card from '../components/Card'
import Updateform from '../components/Updateform';
import { auth } from '../firebaseConfig';
import './details.css'

function Details() {
    const [Update, setUpdate] = React.useState(false);
  return (
    <>
    <div className='details'>
        <div className='blur'></div>
        <h3 className='user-details'>
            User details
        </h3>
        <Card/>
        <div className='card-footer'>
        <button className='btn' onClick={() =>{
            window.scrollTo(0,280)
            setUpdate(!Update);
        }}>Update</button>
        <button className='btn' onClick={() =>{
            auth.signOut().then(() =>{
                alert(`signed out successful`);
            }).catch(err =>{
                alert(`signed out failed`);
            })
        }}>Log-out</button>
        </div>
    </div>
    {Update? <Updateform />: null}
</>
  )
}

export default Details