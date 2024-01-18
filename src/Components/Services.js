import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import reward from "./Svgs/Other 14.svg"
import last from "./Svgs/Other 15.svg"
import video from "./Svgs/production_id.mp4"
import { Link } from 'react-router-dom'

import Tilt from 'react-parallax-tilt';

const Services = () => {
    return (
        <>
            <section>
                <Navbar />
            </section>
            <section style={{ backgroundColor: '#21182F', color: '#fff', padding: '8rem 0 0 0' }}>
                <div className="services-div d-flex justify-content-around align-items-center">
                    <div className='second-content'>
                        <h1 className='home-h1'>Payments made Rewarding on Fady Pay.</h1>
                        <span className='span d-flex'>Pay for services like Fastag, Subscription,
                            besides the regulars like Mobile, Electricity & Water with
                            the Fady Pay website & get rewarded with hottest deals, cashbacks & offers.
                        </span>
                        <button className='btn rounded-pill my-3' style={{ padding: '0.5rem 1.5rem' }}>Sign up</button>
                    </div>

                    <div>
                        <Tilt>
                            <img className='service-img' style={{ width: '35vw' }} src={reward} alt="" />
                        </Tilt>
                    </div>
                </div>
            </section>


            <section >
                <div className="d-flex align-items-center justify-content-center" style={{ padding: '8rem 0', backgroundColor: ' #1D1528', color: '#fff' }} >
                    <div>
                        <div className='twelve-h1 d-flex align-items-center flex-column justify-content-center py-5'>
                            <h1 className='service-h1' style={{ fontSize: '3.5rem' }}>India Recharges & Pays Bill on Fady Pay</h1>
                            <span>India uses Fady Pay to pay more than 50 Bills & Recharge more than 20 Services.</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center flex-column">
                            <div className="d-flex align-items-center mt-5">
                                <div className="d-flex flex-column align-items-center mx-2">
                                    <span className="icon-back"><i class="fa-solid fa-mobile" style={{ color: '#21182F', fontSize: "2rem" }}></i></span>
                                    <span className="  text-start" style={{ fontSize: "1rem" }}><br /> Recharge Prepaid Mobile<a href=""><i class="fa-solid fa-arrow-right  mx-2" style={{ color: "#ffffff" }}></i></a></span>
                                </div>
                                <div className="d-flex flex-column align-items-center mx-2">
                                    <span className="icon-back"><i class="fa-regular fa-lightbulb" style={{ color: '#21182F', fontSize: "2rem" }}></i></span>
                                    <span className="  text-start" style={{ fontSize: "1rem" }}><br /> Pay Electricity Bills<a href=""><i class="fa-solid fa-arrow-right mx-2" style={{ color: "#ffffff" }}></i></a></span>
                                </div>
                                <div className="d-flex flex-column align-items-center mx-2">
                                    <span className="icon-back2"><i class="fa-solid fa-satellite-dish" style={{ color: '#21182F', fontSize: "2rem" }}></i></span>
                                    <span className="  text-start" style={{ fontSize: "1rem" }}><br /> Recharge DTH Connection<a href=""><i class="fa-solid fa-arrow-right  mx-2" style={{ color: "#ffffff" }}></i></a></span>
                                </div>
                                <div className="d-flex flex-column align-items-center mx-2">
                                    <span className="icon-back"><i class="fa-solid fa-bottle-droplet" style={{ color: '#21182F', fontSize: "2.3rem" }}></i></span>
                                    <span className="  text-start" style={{ fontSize: "1rem" }}><br /> Book Gas Cylinder<a href=""><i class="fa-solid fa-arrow-right  mx-2" style={{ color: "#ffffff" }}></i></a></span>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mt-5'>
                                <div className="d-flex flex-column align-items-center mx-2">
                                    <span className="icon-back2"><i class="fa-solid fa-hand-holding-droplet" style={{ color: '#21182F', fontSize: "2rem" }}></i></span>
                                    <span className="  text-start" style={{ fontSize: "1rem" }}><br /> Pay Water Bills<a href=""><i class="fa-solid fa-arrow-right  mx-2" style={{ color: "#ffffff" }}></i></a></span>
                                </div>
                                <div className="d-flex flex-column align-items-center mx-2">
                                    <span className="icon-back2"><i class="fa-solid fa-truck-fast" style={{ color: '#21182F', fontSize: "2rem" }}></i></span>
                                    <span className="  text-start" style={{ fontSize: "1rem" }}><br /> Pay Fastag Recharge<a href=""><i class="fa-solid fa-arrow-right  mx-2" style={{ color: "#ffffff" }}></i></a></span>
                                </div>
                                <div className="d-flex flex-column align-items-center mx-2">
                                    <span className="icon-back2"><i class="fa-solid fa-sack-dollar" style={{ color: '#21182F', fontSize: "2rem" }}></i></span>
                                    <span className="  text-start" style={{ fontSize: "1rem" }}><br /> UPI Transactions<a href=""><i class="fa-solid fa-arrow-right mx-2" style={{ color: "#ffffff" }}></i></a></span>
                                </div>
                                <div className="d-flex flex-column align-items-center mx-2">
                                    <span className="icon-back2"><i class="fa-solid fa-layer-group" style={{ color: '#21182F', fontSize: "2rem" }}></i></span>
                                    <span className="  text-start" style={{ fontSize: "1rem" }}><br /> All Payment Services <a href=""><i class="fa-solid fa-arrow-right  mx-2" style={{ color: "#ffffff" }}></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div style={{ position: 'relative' }}>
                    <video className='back-video' autoPlay loop playsInline>
                        <source src={video} />
                    </video>
                    <div className='video-content' style={{ position: 'absolute', zIndex: '5', top: '0', padding: '20rem 2rem' }}>
                        <h1 className='video-h1 col-7 my-3' style={{ color: '#fff', fontSize: '4rem' }}>Skip the line with Fady Pay Website in your pocket</h1>
                        <Link to="#" className='btn rounded-pill py-2 px-3' style={{ textDecoration: 'none', color: '#fff', background: 'transparent', border: '2px solid #fff' }}>Sign up now</Link>
                        <Link to="#" className='btn bg-dark rounded-pill py-2 px-3 mx-3' style={{ textDecoration: 'none', color: '#fff' }}>Download Fadypay</Link>
                    </div>
                </div>
            </section>

            <section className='d-flex align-items-center justify-content-center' style={{ backgroundColor: '#21182F', color: '#fff', padding: '8rem 0 0 0' }}>
                <div className='d-flex align-items-center justify-content-center text-center flex-column'>
                    <h1 className='col-7 service-h1' style={{ fontSize: '3.5rem', color: '#fff' }}>Earn Incredible Rewards everytime you pay using Fady Pay Website</h1>
                    <span className='col-5' style={{ fontSize: '1.2rem' }}>
                        Get Offers from the hottest brands, Cashbacks, Fady Pay First Points & more, every time you make a payment on Fady Pay Website.
                    </span>

                    <div>
                        <Tilt>
                            <img className='service-img' style={{ width: '35vw' }} src={last} alt="" />
                        </Tilt>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </>
    )
}

export default Services