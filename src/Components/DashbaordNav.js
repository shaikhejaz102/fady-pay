import React, { useState } from 'react'
import centerLogo from "./Svgs/logo.svg fill.svg"
import bell from "./Svgs/bell-03.svg"
import logout from "./Svgs/log-in.svg"
//Dash icons
import coins from "./Svgs/DashIcons/coins-swap-02.svg"
import currency from "./Svgs/DashIcons/currency-rupee-circle.svg"
import folder from "./Svgs/DashIcons/folder-download.svg"
import headphones from "./Svgs/DashIcons/headphones-02.svg"
import qr from "./Svgs/DashIcons/qr-code-02.svg"
import user from "./Svgs/DashIcons/user-circle.svg"
import wallet from "./Svgs/DashIcons/wallet-03.svg"
import Home from "./Svgs/DashIcons/Icon (1).svg"
import banking from "./Svgs/DashIcons/Icon.svg"

import profileImg from "./Images/Image 4.png"

import { Link, Outlet } from 'react-router-dom'

const DashbaordNav = () => {

    const [navCollapse, setNavCollapse] = useState(false)
    return (
        <>
            <div class="navbar d-flex justify-content-between mx-2 fixed-top">
                <div class="">
                    <Link className='notificationBtn'>
                        <img src={bell} alt="" />
                    </Link>
                </div>
                <div class="">
                    <Link class="" to="/"><img style={{width:'15rem'}} src={centerLogo} alt="" /></Link>
                </div>
                <div class="">
                    <Link to="/signin" className='LightBtn d-flex'>
                        Logout<img className='mx-1' src={logout} alt="" />
                    </Link>
                </div>
            </div>
            <section className='d-flex'>
                <section>
                    <nav className='navbar-expand-lg '>

                        <div className="container-fluid" style={{ padding: "0rem" }}>
                            <button
                                style={{ margin: "2rem 0.5rem", background: "#e5d4ff99", padding:'0.5rem', borderRadius:'50px' }}
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasDarkNavbar"
                                aria-controls="offcanvasDarkNavbar"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div
                                style={{ left: "0", transform: "translateX(-100%)" }}
                                className="offcanvas offcanvas-end text-bg-dark"
                                tabIndex="-1"
                                id="offcanvasDarkNavbar"
                                aria-labelledby="offcanvasDarkNavbarLabel"
                            >
                                {/* <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                                        <Link className="navbar-brand" to="/">
                                            <img
                                                src={centerLogo}
                                                alt="Logo"
                                                style={{ left: "0px" }}
                                                className="Logo"
                                            />
                                        </Link>
                                        <br />
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close btn-close-white"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    ></button>
                                </div> */}


                                <div className={`DashbaordNav my-4 mx-2  ${navCollapse ? "navCollaspe" : ''}`}>

                                    <div className='d-flex justify-content-between align-items-center' style={{ borderBottom: '1px solid #fff' }}>
                                        <img className='mb-3 dashLogo' style={{ position: 'relative', left: '-20px' }} src={centerLogo} alt="" />
                                        <div>
                                            <Link className="d-flex align-items-center" style={{ background: '#000', padding: '1.5rem 1rem', borderRadius: '200px' }} onClick={() => setNavCollapse(!navCollapse)}>
                                                <img src={centerLogo} alt="Logo" style={{ width: "20px" }} className="" />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="offcanvas-body flex-column" style={{ left: "0px" }}>
                                        <div className='my-3'>
                                            <div class="dropdown">
                                                <a class="nav-link dropdown-toggle d-flex justify-content-between align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <div className='d-flex align-items-center'>
                                                        <img src={profileImg} alt="" />
                                                        <h3 className='mx-2'>Hele Voizhik</h3>
                                                    </div>
                                                    <div>
                                                        <i class="fa-solid fa-chevron-down" style={{ color: '#000', background: '#E5D4FF', padding: '7px', borderRadius: '50px' }}></i>
                                                    </div>
                                                </a>
                                                <ul class="dropdown-menu my-3">
                                                    <div>
                                                        <span>Current Balance <i class="fa-solid fa-retweet mx-2"></i></span>
                                                        <h2><i class="fa-solid fa-indian-rupee-sign me-2"></i>1,00000</h2>
                                                        <div className='innerDrop'>
                                                            <div className='my-3'>
                                                                <span>Name</span>
                                                                <h3>Hele Voizhik</h3>
                                                            </div>
                                                            <div className='my-3'>
                                                                <span>Mobile Number</span>
                                                                <h3>98000000000000</h3>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex justify-content-end'>
                                                            <div className='innerDrop my-1 ' style={{ width: '42%', padding: '0px 10px' }}>
                                                                <Link className='text-center' style={{ fontSize: '10px', textDecoration: 'none', color: '#fff' }} to="/dashbaordNav/profile">view Full Profile <i class="fa-solid fa-arrows-left-right mx-2"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <ul class="d-flex flex-column navbar-nav me-auto mb-2 mb-lg-0">
                                                <li class="nav-item d-flex my-2" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                                                    <img className='me-3' src={Home} alt="" />
                                                    <Link class="nav-link active" aria-current="page" to="/dashbaordNav/dashHome">Home</Link>
                                                </li>
                                                <li class="nav-item d-flex my-2" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                                                    <img className='me-3' src={banking} alt="" />
                                                    <Link class="nav-link" to="/dashbaordNav/banking">Banking</Link>
                                                </li>
                                                <li class="nav-item d-flex my-2" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                                                    <img className='me-3' src={qr} alt="" />
                                                    <Link class="nav-link" to="/dashbaordNav/utility">Utility Payments</Link>
                                                </li>
                                                <li class="nav-item d-flex my-2" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                                                    <img className='me-3' src={currency} alt="" />
                                                    <Link class="nav-link" to="/dashbaordNav/pay">Pay Bills & Recharge</Link>
                                                </li>
                                                <li class="nav-item d-flex my-2" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                                                    <img className='me-3' src={user} alt="" />
                                                    <Link class="nav-link" to="/dashbaordNav/profile">Profile</Link>
                                                </li>
                                                {/* <li class="nav-item d-flex my-2" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                                    <img className='me-3' src={folder} alt="" />
                                    <Link class="nav-link" to="/">My Business Report</Link>
                                </li>
                                <li class="nav-item d-flex my-2" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                                    <img className='me-3' src={wallet} alt="" />
                                    <Link class="nav-link" to="/">My Earnings</Link>
                                </li>
                                <li class="nav-item d-flex my-2" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                                    <img className='me-3' src={coins} alt="" />
                                    <Link class="nav-link" to="/">Return M-Cash</Link>
                                </li> */}
                                                <li class="nav-item d-flex my-2" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                                                    <img className='me-3' src={headphones} alt="" />
                                                    <Link class="nav-link" to="/dashbaordNav/help">Help & Support</Link>
                                                </li>
                                            </ul>

                                        </div>

                                    </div>
                                </div></div>

                        </div >
                    </nav>


                </section>
                <section className='my-4 w-100'>
                    <Outlet />
                </section>
            </section>

        </>
    )
}

export default DashbaordNav