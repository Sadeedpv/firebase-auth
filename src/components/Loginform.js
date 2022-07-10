import React from 'react'
import {HiLightningBolt} from 'react-icons/hi'
import '../pages/signin.css'
import {Link} from 'react-router-dom'
import * as Yup from 'yup'
import {Formik, Field, ErrorMessage} from 'formik'
import { auth } from '../firebaseConfig'
import {useNavigate} from "react-router-dom";


function Loginform() {

  const [error, seterror] = React.useState('');

  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Please provide a valid Email').required('Email is required'),
    password: Yup.string().min(8, "Minimum 8 characters are required").matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ).required('Password is required'),
  })

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
        {error && <div className='error'>Please check your password and username.</div>}

      </div>
      <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={LoginSchema}
      onSubmit={(values)=>{
        auth.signInWithEmailAndPassword(values.email, values.password)
        .then(() =>{
          alert('Login Successful')
          seterror('')
        }).catch((error) => {
          seterror(error.message)
        })
      }}

      >
        {({handleSubmit}) => (
            <form>
            <div className='input'>
              <div className='label'>Enter you Email-id *</div>
              <Field type='email' name='email'  placeholder='' className='inputs' />
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
            </div>
            <div className='checkbox'>
            <p className='p-check' style={{
                color:'#6603FC',
                fontWeight:'600',
                fontSize:'1.1rem'
            }}
            onClick={() =>{
              navigate('/login/resetpassword')
            }}
            >Forgot your Password ?</p>
          </div>
          <div className='buttons'>
            <button className='btn btn-signin' type='submit' onClick={handleSubmit}>Login</button>
          </div>
            </form>
        )}
      </Formik>
      <div className='form-footer'>
        Don't have an account? <Link to='/signup' className='form-link'>Sign-up</Link>
      </div>
    </div>
  </div>
  )
}

export default Loginform