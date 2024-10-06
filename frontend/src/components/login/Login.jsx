import React from 'react'
import { useForm } from "react-hook-form"
import Navbar from '../shared/navbar/Navbar'
import googleImage from '../../../images/google.png';
import githubImage from '../../../images/github.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';



const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location?.state?.from?.pathname || '/products';

  const {user,google,github,login,error} = useAuth();
  user.email && navigate(from,{replace:true});
  const { register,handleSubmit,formState: { errors },} = useForm();
  const onSubmit = (data) =>{
    login(data.email,data.password)

  } 
  return (
    <section className='bg-brand bg-brand-container'>
      <Navbar/>
      <div className='container'>
        <h1 className='fs-4 text-center mt-5'>Sign In</h1>
       
        <div className='col-md-6 col-sm-8 mx-auto d-block'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mt-2">
              <label htmlFor="email1" className='p-1'>Email</label>
              <input type="email" className="form-control p-2" id="email1" aria-describedby="emailHelp" placeholder="Enter email"{...register("email",{ required: true })}/>
              {errors.email && <span className='text-danger'>This Field is required</span>}
            </div>

            <div className="form-group mt-2">
              <label htmlFor="password" className='p-1'>Password</label>
              <input type="password" className="form-control p-2" id="password" placeholder="Password"{...register("password",{ required: true })}/>
              {errors.password && <span className='text-danger'>This Field is required</span>}
            </div>
            <br />
            <p><small className="form-text text-muted">We'll never share your information with anyone else.</small></p>          
            <input className="btn btn-dark p-2" type="submit" value="Sign In" />
          
         </form>
            <div className="mt-3">
                <Link to="/register" className='text-black text-decoration-none'>
                  Dont't have an account? <span className='text-decoration-underline text-primary'>Register as a new user</span>
                </Link>
            </div>
      </div>
       <p>{error}</p>

       <div className='d-flex justify-content-center align-items-center mt-3'>
          <div className='col-sm-2'>
            <hr />
          </div>
          <p className='text-center mt-3 px-3'>Or Sign up using</p>
          <div className='col-sm-2'>
            <hr />
          </div>

       </div>
       <div className='d-flex justify-content-center align-items-center p-2'>
          <button onClick={google} style={{minHeight:'60px'}} className='btn d-flex justify-content-center align-items-center mt-2 p-2'>
            <img src={googleImage} width={50} className='mx-auto d-block' alt="google"/>Google
          </button>
          <button onClick={github} style={{minHeight:'60px'}} className='btn d-flex justify-content-center align-items-center mt-2 ms-2 '>
            <img src={githubImage} width={40} className='mx-auto d-block' alt="github"/><p className='mt-3 ms-2'>Github</p>
          </button>
       </div>
        
      </div>
    </section>
  )
}

export default Login