import React, { useEffect, useState } from 'react'
import { auth, db, storage } from '../firebaseConfig';
import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';

function Updateform({Data}) {

  const [Profession, setProfession] = useState(Data?Data.Profession:'');
  const [Age, setAge] = useState(Data?Data.Age:'');
  const [Name, setName] = useState(Data?Data.Name:'');
  const [Image, setImage] = useState(Data?Data.imgUrl:'https://cdn-icons-png.flaticon.com/512/149/149071.png');
  const [prevImage, setprevImage] = useState(Data?Data.imgUrl:'https://cdn-icons-png.flaticon.com/512/149/149071.png');

  const handleSubmit = async () =>{
    // Upload image to firebase storage
    if (Image !== null){
      const Imageref = ref(storage, `${auth.currentUser.uid}/profile.png`);
      uploadBytes(Imageref, Image).then(() =>{
        console.log( `image uploaded`)
        const Imageref2 = ref(storage, `${auth.currentUser.uid}/`);
        listAll(Imageref2).then((response) =>{
          getDownloadURL(response.items[0]).then((url) =>{
            const FinalImage = url;
            db.collection("UserDetails").doc(auth.currentUser.uid).update({
              Profession: Profession,
              Age: Age,
              Name: Name,
              imgUrl: FinalImage,
            }).then(() =>{
              alert(`Updated Successfully`)
        
            })
          })
          .catch(err =>{
            alert('Something went wrong while uploading image')
          })
        })
    
      });
    }

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
        <div className='label'>Add an Image</div>
        <input type='file' className='inputs' accept='image/*' name="image" id="file"
        onChange={(e) =>{
          var image = e.target.files[0];
          var prevImage = URL.createObjectURL(image);
          setImage(image);
          setprevImage(prevImage);
        }}
        />
        <div style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
        }}><img src={prevImage} alt='Preview' height={80} width={80}/></div>

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