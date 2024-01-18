import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from 'react-router-dom'
import logo from "./Svgs/logo.svg.svg"

const Contact = () => {
    return (
        <>
            <section>
                <Navbar />
            </section>
            <section style={{ backgroundColor: '#21182F', padding: '10rem 0' }}>
                <div className='ps-5 py-5'>
                    <h1 style={{ color: '#fff' }}>Contact & Company Information</h1>
                </div>

                <div className='contact-content d-flex align-items-center justify-content-evenly'>
                    <div className="card my-2">
                        <h2>Customer Feedback</h2>
                        <span className='my-3'>We are constantly striving to make our products & services better.
                            In case of a concern or feedback, please let us know.</span>
                        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/">Learn more</Link>
                    </div>
                    <div className="card my-2">
                        <h2>Privacy & Security</h2>
                        <span className='my-3'>Your security is paramount. Have a question? We've got answers.
                            Please share your concern or feedback with us.</span>
                        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/">Write to us</Link>
                    </div>
                    <div className="card my-2">
                        <h2>Become a Partner</h2>
                        <span className='my-3'>Partnering with Fady Pay provides businesses and retailers of all sizes,
                            a compelling sales channel with a nationwide reach.</span>
                        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/">Learn more</Link>
                    </div>
                </div>
            </section>
            <section style={{ backgroundColor: '#21182F', padding: '0 0 10rem 0' }}>
                <div class="container col-xl-10 col-xxl-8 px-4 py-5">
                    <div class="row align-items-center g-lg-5 py-5">
                        <div class="col-lg-7 text-center text-lg-start my-3">
                            <h1 class="display-4 fw-bold lh-1 mb-3" style={{color:'#D0A2F7'}}>Corporate Headquarters</h1>
                            <span class="col-lg-10 "  style={{ color: '#fff' }}>
                                Fady Communications Ltd, <br />
                                olg agra road, Naya faran hospital, Malegaon,<br />
                                Dist: Nashik , Maharastra-423203 <br />
                                Phone: +91-000- 0000000 <br />
                                Customer Care: 000-0000-000 <br />
                                Merchant Care: 000-0000-000 <br />
                            </span>
                        </div>
                        <div class="contact-div col-md-10 mx-auto col-lg-5" >
                            <form class="contact-form p-4 p-md-5 border rounded-3 " style={{ background: '#E5D4FF' }}>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="Number" class="form-control" id="floatingPassword" placeholder="number" fdprocessedid="" />
                                    <label for="floatingPassword">Number</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea type="text" class="form-control" id="floatingPassword" placeholder="Tells us about query" fdprocessedid="" />
                                    <label for="floatingPassword">Explain us</label>
                                </div>
                                <button class="w-100 btn btn-lg btn-primary py-3" type="submit" fdprocessedid="9w6ez">Submit</button>
                                <hr class="my-4" />
                                <small class="text-body-secondary">By clicking Submiting, you agree to the terms of use.</small>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
            <section className='d-flex align-items-center justify-content-center flex-column text-center' style={{ backgroundColor: '#21182F', padding: '0 0 10rem 0', color:'#fff' }}>
                <div>
                    <h4 style={{color:'#D0A2F7'}}>Work at Fady Pay</h4>
                </div>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                    <h1 className='col-6 my-4'>
                        We pride ourselves in building products and services that
                        enrich and empower people's lives everyday.
                    </h1>

                    <Link to="#" style={{textDecoration:'none', color:'#D0A2F7'}}>Join the revolution</Link>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </>
    )
}

export default Contact