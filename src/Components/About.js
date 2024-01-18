import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
// import india from "./Images/india-png-india-convergence-2017-2500.png"
import india from "./Images/india-png-india-1501.png"
import room from "./Images/png-images-for-website-background-1.png"
import person from "./Images/Happy-Men-Download-Transparent-PNG-Image.png"
import person1 from "./Images/Guy-PNG-Picture.png"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const About = () => {
    return (
        <>
            <section>
                <Navbar />
            </section>
            <section style={{ backgroundColor: '#21182F', padding: ' 10rem 0' }}>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <h3 className='mission'>Our Mission. Our Wave</h3>
                    <br />
                    <h1 style={{ color: '#fff' }}>We Will bring</h1>
                    <h1 style={{ color: '#D0A2F7' }}>All Indians to the</h1>
                    <h1 style={{ color: '#4c2749' }}>Mainstream Economy.</h1>
                    {/* <img style={{width:'100%'}} src={india} alt="" /> */}
                    <img style={{ width: '100%' }} src={india} alt="" />
                </div>
            </section>
            <section className='d-flex justify-content-center align-items-center px-4' style={{ backgroundColor: '#21182F', padding: '0 0 10rem 0', color: '#fff' }}>
                <div className='text-center'>
                    <h1>Fady Pay started the Digital Revolution in India.</h1>
                    <span>And we went on to become India’s leading Payments Website.
                        Today, more than 20000 merchants & businesses are powered by FadyPay to Accept Payments digitally.</span>
                    <br />
                    <span>
                        This is because more than 3000 Indians use Paytm to Pay at their stores.
                        And that’s not all, FadyPay Website is used to Pay bills, do Recharges, Send money to friends & family.
                    </span>
                    <hr className='my-5' style={{ height: '10px', background: '-webkit-linear-gradient(0deg,#4c2749 50%,#d0a2f7 0)' }} />
                    <span>
                        With innovations to Financial services & products in pipeline,
                        this is but one of the milestones achieved towards our mission—To bring a million unserved and underserved Indians to the mainstream economy.
                    </span>
                </div>
            </section>
            <section className=' d-flex justify-content-center align-items-center' style={{ backgroundColor: '#21182f', padding: '0 0 10rem 0' }}>
                <div className='text-center ps-5' style={{ color: '#fff', position: 'absolute' }}>
                    <h1 className=''>New ideas are brought to life at FadyPay everyday.</h1>
                    <span>Read all about Us. </span>
                </div>
                <div style={{ position: 'relative', width: 'fit-content' }}>
                    <img style={{ width: '100%' }} src={room} alt="" />
                </div>
            </section>
            <section style={{ backgroundColor: '#21182F', padding: '0 0 10rem 0' }}>
                <div className='px-5 py-5'>
                    <h1 className='text-light'>This is just a beginning</h1>
                </div>
                <div className='px-5'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div style={{color:'#fff'}}>
                                <div>
                                    <img style={{width:'50%'}} src={person} alt="" />
                                </div>
                                <div>
                                    <h1>SHAIKH EJAZ</h1>
                                    <span>(Founder & CEO at Fady Pay)</span>
                                    <br />
                                    <span>We pride ourselves in building products and services that
                                         enrich and empower people's lives everyday.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{color:'#fff'}}>
                                <div>
                                    <img style={{width:'50%'}} src={person1} alt="" />
                                </div>
                                <div>
                                    <h1>SHAIKH EJAZ</h1>
                                    <span>(Founder & CEO at Fady Pay)</span>
                                    <br />
                                    <span>We pride ourselves in building products and services that
                                         enrich and empower people's lives everyday.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{color:'#fff'}}>
                                <div>
                                    <img style={{width:'50%'}} src={person} alt="" />
                                </div>
                                <div>
                                    <h1>SHAIKH EJAZ</h1>
                                    <span>(Founder & CEO at Fady Pay)</span>
                                    <br />
                                    <span>We pride ourselves in building products and services that
                                         enrich and empower people's lives everyday.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{color:'#fff'}}>
                                <div>
                                    <img style={{width:'50%'}} src={person1} alt="" />
                                </div>
                                <div>
                                    <h1>SHAIKH EJAZ</h1>
                                    <span>(Founder & CEO at Fady Pay)</span>
                                    <br />
                                    <span>We pride ourselves in building products and services that
                                         enrich and empower people's lives everyday.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section>
                <Footer/>
            </section>
        </>
    )
}

export default About