import React, {  useState } from 'react'
import '../pages/signin.css'
import {HiOutlineScale} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import * as Yup from 'yup'
import {Formik, Field, ErrorMessage} from 'formik'
import {auth, db} from '../firebaseConfig'


function Signinform({user}) {
  const [error, seterror] = useState('');
  
  const Signinschema = Yup.object().shape({
    email: Yup.string().email('Please provide a valid Email').required('Email is required'),
    password: Yup.string().min(8, "Minimum 8 characters are required").matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ).required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
  })

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
        <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={Signinschema}
        onSubmit={(values)=>{
          auth.createUserWithEmailAndPassword(values.email, values.password)
          .then(() =>{
            alert('Signup Successful')
            user.sendEmailVerification().then(() =>{
              alert(`An Email has been sent to ${user.email} to verify your account. Please check your spam folder if you don't see it in the inbox.`)
              db.collection("UserDetails").doc(user.uid).set({
                EmailId: user.email,
                Name:'Not given',
                Age:'Not given',
                Profession:'Unknown',
                imgUrl:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
              })
            })
          })
          .catch(error => {
            seterror(error.message)
          })
        }}
        validator={() => ({})}
        >
          {({handleSubmit, isSubmitting}) => (
                      <form>
                      <div className='input'>
                        {error && <div className='invalid-feedback'>{error}</div>}              
                        <div className='label'>Enter you Email-id *</div>
                        <Field type='email' name='email' placeholder='' className='inputs' />
                        <ErrorMessage
                                        component="div"
                                        name="email"
                                        className="invalid-feedback"
                                      />
              
                        <div className='label'>Enter Password *</div>
                        <Field type='password' name='password' placeholder='' className='inputs' />
                        <ErrorMessage
                                        component="div"
                                        name="password"
                                        className="invalid-feedback"
                                      />
                        <div className='label'>Confirm Password *</div>
                        <Field type='password' name='confirmPassword' placeholder='' className='inputs' />
                        <ErrorMessage
                                        component="div"
                                        name="confirmPassword"
                                        className="invalid-feedback"
                                      />
                      </div>
                      <div className='checkbox'>
                        <div className='check-psuedo'><input type='checkbox'/></div> <p className='p-check'>Remember me</p>
                      </div>
                      <div className='buttons'>
                        <button className='btn btn-signin' type='submit' disabled={isSubmitting} onClick={handleSubmit}>Sign up</button>
                      </div>
                      </form>

          )}

        </Formik>

        <div className='form-footer'>
          Already have an account? <Link to='/login' className='form-link'>Login</Link>
        </div>

      </div>
    </div>
  )
}

export default Signinform