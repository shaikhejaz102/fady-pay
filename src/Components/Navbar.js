import React from 'react'
import logo from "./Svgs/logo.svg.svg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='fixed-top' style={{ backgroundColor:' #21182F'}}>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/"><img style={{ width: '13rem' }} src={logo} alt="" /></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"><img style={{ width: '10rem' }} src={logo} alt="" /></h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                  <li class="nav-item1">
                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li class="nav-item1">
                    <Link class="nav-link" to="/service">Services</Link>
                  </li>
                  <li class="nav-item1">
                    <Link class="nav-link" to="/about">About</Link>
                  </li>
                  <li class="nav-item1">
                    <Link class="nav-link" to="/contact">Contact us</Link>
                  </li>
                </ul>

                <div className='nav-btns'>
                  <Link className='btn-pink btn-light' to="/signin">Sign in<i class="fa-solid fa-angles-right mx-2" style={{ color: '#21182F' }}></i></Link>
                  <Link className='btn btn-dark mx-2' to="/signup">Sign Up<i class="fa-solid fa-angles-right mx-2" style={{ color: '#E5D4FF' }}></i></Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar