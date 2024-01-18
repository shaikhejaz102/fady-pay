import React from 'react'
import google from "./Images/google-svg.3e3038a624d49c6df6efc1f35745d366.svg"
import logo from "./Svgs/logo1.svg.svg"
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <div style={{ background: '#21182F' }}>
        <div class="container col-xxl-10 col-xxl-8 px-4 py-5 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-6 text-center text-lg-start">
              <div>
                <Link to="/"><img style={{ position: 'relative', left: '-20px', width:'15rem' }} src={logo} alt="" /></Link>
              </div>
              <h2 class="display-4 fw-bold lh-1  mb-3" style={{ color: '#fff' }}>Sign up for a free account to access the Dashbaord</h2>
              <p class="col-lg-10 fs-4" style={{ color: '#fff' }}>Make your profile to Payments directly with Fady Pay of vetted $100K+ revenue, scale-ups and Use Fady pay.</p>
            </div>
            <div class="col-lg-6 mx-auto col-lg-5">
              <form class="p-4 p-md-5 border rounded-3" style={{ background: '#E5D4FF' }}>
                <div className='text-center my-3'>
                  <h2 style={{fontWeight:'bold'}}>Join now on Fady Pay</h2>
                  <span>Already have an account?<span><Link className='mx-2' to="/signin">Log in</Link></span></span>
                </div>
                <Link class="w-100 btn btn-lg btn-light d-flex justify-content-center align-items-center" type="submit" style={{ color: '#000', background: '#fff', padding:'1.5rem 0'}}> Sign up with others</Link> {/** <img src={google} alt="" /> */}
                <hr class="my-4" />
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="Enter name" />
                  <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Password</label>
                  <span className='d-flex justify-content-end'>Minimum 8 characters</span>
                </div>
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <Link class="w-100 btn btn-lg btn-primary d-flex justify-content-center align-items-center" type="submit" style={{padding:'1.5rem 0'}}>Join</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp