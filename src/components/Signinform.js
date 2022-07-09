import React from 'react'
import '../pages/signin.css'
import {HiOutlineScale} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import * as Yup from 'yup'
import {Formik, Field, ErrorMessage} from 'formik'
import {auth} from '../firebaseConfig'

function Signinform() {

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
          .then((user) =>{
            console.log(user)
          })
          .catch(error => {
            console.log(error)
          })
        }}
        validator={() => ({})}
        >
          {({handleSubmit, isSubmitting}) => (
                      <form>
                      <div className='input'>
              
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