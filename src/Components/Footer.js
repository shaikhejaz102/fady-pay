import React from 'react'
import logo from "./Footer/logo.svg.svg"
import socail1 from "./Footer/Link → twitter.svg.svg"
import socail2 from "./Footer/Link → instagram.svg.svg"
import socail3 from "./Footer/Link → facebook.svg.svg"
import socail4 from "./Footer/Social icon_1.svg"
import socail5 from "./Footer/Social icon_2.svg"
import socail6 from "./Footer/Social icon.svg"

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className='d-flex align-items-center justify-content-between' style={{ padding: '1rem 5rem' }}>
                    <div>
                        <img style={{ width: '100%' }} src={logo} alt="" />
                    </div>
                    <div>
                        <ul>
                            <li className='mx-2'><a href="/"><img style={{ width: '2rem' }} src={socail1} alt="" /></a></li>
                            <li className='mx-2'><a href="/"><img style={{ width: '2rem' }} src={socail2} alt="" /></a></li>
                            <li className='mx-2'><a href="/"><img style={{ width: '1rem' }} src={socail3} alt="" /></a></li>
                            <li className='mx-2'><a href="/"><img style={{ width: '2rem' }} src={socail4} alt="" /></a></li>
                            <li className='mx-2'><a href="/"><img style={{ width: '2rem' }} src={socail5} alt="" /></a></li>
                            <li className='mx-2'><a href="/"><img style={{ width: '2rem' }} src={socail6} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <hr style={{ width: '88%', color: '#fff', height: '20px', borderWidth: '2px', opacity: '1.25' }} />
                    </div>
                </div>

                <div style={{ padding: '0 0 0 6rem' }}>
                    <div class="accordion-item">
                        <h2 class="accordion-header" style={{ color: '#fff' }}>
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne" fdprocessedid="z1t92"><i class="fa-solid fa-plus" style={{ color: "#ffffff", marginRight: '1rem' }}></i>Company <hr className='mx-2' style={{ width: '82%', color: '#fff', borderWidth: '1px', opacity: '1.25' }} /></button>
                            <img src="" alt="" /></h2>
                        <div id="flush-collapseOne1" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li><a href="/">About us</a></li>
                                    <li><a href="/">Contact us</a></li>
                                    <li><a href="/">Terms & Conditions</a></li>
                                    <li><a href="/">Sustainability</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" style={{ color: '#fff' }}>
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne" fdprocessedid="z1t92"><i class="fa-solid fa-plus" style={{ color: "#ffffff", marginRight: '1rem' }}></i>Career <hr className='mx-2' style={{ width: '82%', color: '#fff', borderWidth: '1px', opacity: '1.25' }} /></button>
                            <img src="" alt="" /></h2>
                        <div id="flush-collapseOne2" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Financials</a></li>
                                    <li><a href="/">Jobs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" style={{ color: '#fff' }}>
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne3" aria-expanded="false" aria-controls="flush-collapseOne" fdprocessedid="z1t92"><i class="fa-solid fa-plus" style={{ color: "#ffffff", marginRight: '1rem' }}></i>Recharge & pay bills<hr className='mx-2' style={{ width: '76%', color: '#fff', borderWidth: '1px', opacity: '1.25' }} /></button>
                            <img src="" alt="" /></h2>
                        <div id="flush-collapseOne3" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li><a href="/">Mobile Recharge</a></li>
                                    <li><a href="/">Mobile Bill Payment</a></li>
                                    <li><a href="/">Dth Recharge</a></li>
                                    <li><a href="/">Fastag Recharge</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" style={{ color: '#fff' }}>
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne4" aria-expanded="false" aria-controls="flush-collapseOne" fdprocessedid="z1t92"><i class="fa-solid fa-plus" style={{ color: "#ffffff", marginRight: '1rem' }}></i>Banking <hr className='mx-2' style={{ width: '81%', color: '#fff', borderWidth: '1px', opacity: '1.25' }} /></button>
                            <img src="" alt="" /></h2>
                        <div id="flush-collapseOne4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Financials</a></li>
                                    <li><a href="/">UPI</a></li>
                                    <li><a href="/">Direct Bank account</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div class="accordion-item">
                        <h2 class="accordion-header" style={{  color:'#fff'}}>
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne5" aria-expanded="false" aria-controls="flush-collapseOne" fdprocessedid="z1t92"><i class="fa-solid fa-plus" style={{color: "#ffffff" , marginRight:'1rem'}}></i>Book Travel & Entertainment<hr className='mx-2' style={{ width: '72%',  color: '#fff',  borderWidth: '1px',  opacity: '1.25' }}/></button>
                            <img src="" alt="" /></h2>
                        <div id="flush-collapseOne5" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                              <ul>
                                <li><a href="/">Movie Ticket Booking</a></li>
                                <li><a href="/">Bus Ticket Booking</a></li>
                                <li><a href="/">Flight Tickets Booking</a></li>
                                <li><a href="/">Train Ticket Booking</a></li>
                                <li><a href="/">Events Booking</a></li>
                                <li><a href="/">Resources</a></li>
                              </ul>
                            </div>
                        </div>
                    </div> */}
                    <div class="accordion-item">
                        <h2 class="accordion-header" style={{ color: '#fff' }}>
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne6" aria-expanded="false" aria-controls="flush-collapseOne" fdprocessedid="z1t92"><i class="fa-solid fa-plus" style={{ color: "#ffffff", marginRight: '1rem' }}></i>Earnings <hr className='mx-2' style={{ width: '81%', color: '#fff', borderWidth: '1px', opacity: '1.25' }} /></button>
                            <img src="" alt="" /></h2>
                        <div id="flush-collapseOne6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Financials</a></li>
                                    <li><a href="/">Filings & Press Releases</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" style={{ color: '#fff' }}>
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne7" aria-expanded="false" aria-controls="flush-collapseOne" fdprocessedid="z1t92"><i class="fa-solid fa-plus" style={{ color: "#ffffff", marginRight: '1rem' }}></i>Uitility  Payments <hr className='mx-2' style={{ width: '77%', color: '#fff', borderWidth: '1px', opacity: '1.25' }} /></button>
                            <img src="" alt="" /></h2>
                        <div id="flush-collapseOne7" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li><a href="/">Electricity Bill Payment</a></li>
                                    <li><a href="/">Dth Recharge</a></li>
                                    <li><a href="/">Gas Bill Payment</a></li>
                                    <li><a href="/">Water Bill Payment</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" style={{ color: '#fff' }}>
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne8" aria-expanded="false" aria-controls="flush-collapseOne" fdprocessedid="z1t92"><i class="fa-solid fa-plus" style={{ color: "#ffffff", marginRight: '1rem' }}></i>Financial Tools & Calculators <hr className='mx-2' style={{ width: '72%', color: '#fff', borderWidth: '1px', opacity: '1.25' }} /></button>
                            <img src="" alt="" /></h2>
                        <div id="flush-collapseOne8" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li><a href="/">EMI Calculator</a></li>
                                    <li><a href="/">Personal Loan EMI Calculator</a></li>
                                    <li><a href="/">Financial Tools & Calculators</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer