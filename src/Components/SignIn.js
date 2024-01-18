import React from 'react'
import google from "./Images/google-svg.3e3038a624d49c6df6efc1f35745d366.svg"
import logo from "./Svgs/login.svg.svg"
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <>
            <div style={{ background: '#21182F' }}>
                <div class="container col-xxl-10 col-xxl-8 px-4 py-5 d-flex justify-content-center align-items-center" style={{ height: '100vh', width:'100%' }}>
                    <div class="row align-items-center g-lg-5 py-5 w-100" >
                        <div class=" mx-auto w-100 d-flex justify-content-center align-items-center">
                            {/* col-lg-6 col-lg-5 */}
                            <form class="signIn-form p-4 p-md-5 border rounded-3" style={{ background: '#E5D4FF', width:'33vw' }}>
                                <div className='text-center mt-3 mb-5'>
                                    <div>
                                        <Link className='text-center' to="/"><img style={{width:'10rem'}} src={logo} alt="" /></Link>
                                    </div>
                                    <h2 style={{ fontWeight: 'bold' }}>Welcome Back</h2>
                                    <span>Don’t have any account?<span><Link className='mx-2' to="/signup">Join now</Link></span></span>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                    <Link className='d-flex justify-content-end' style={{ textDecoration: 'none',color:'#000' }}>Forget Password?</Link>
                                </div>
                                <Link class="w-100 btn btn-lg btn-primary d-flex justify-content-center align-items-center" type="submit" to="/dashbaordNav/dashHome" style={{padding:'1.5rem 0'}}>Join</Link>
                                <hr class="my-4" />
                                <div>By clicking Sign up, you agree to the terms of use.</div>
                                {/* <Link class="w-100 btn btn-lg btn-light d-flex justify-content-center align-items-center" type="submit" style={{ color: '#000', background: '#fff', height: '8vh' }}> <img src={google} alt="" /> Sign up with Google</Link>   */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn