import React from 'react'
import { Link } from 'react-router-dom'
import electricity from "./Svgs/IconElectricity.svg"
import gas from "./Svgs/IconGas.svg"
import water from "./Svgs/IconWater.svg"
import DTH from "./Svgs/ComponentDTH.svg"
import mobile from "./Svgs/OtherMobile.svg"

const PayRecharge = () => {
    return (
        <>
            <section className='SideDashbaoord mx-3 w-100'>
            <div>
                    <h2 className='my-3' style={{ fontWeight: '700' }}>Utility Payments</h2>
                    <div className='thirdBox d-flex'>
                        <div className='utilityMain'>
                            <div className='Utility my-3'>
                                <div className='electricity'>
                                    <img style={{ width: '100%' }} src={electricity} alt="" />
                                </div>
                                <div className='mx-4'>
                                    <h4 style={{ fontWeight: '700' }}>Electricity</h4>
                                    <span style={{ color: '#D0A2F7' }}>Bills Payments</span>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <Link className='darkBtn'>Pay Now <i class="fa-solid fa-chevron-right"></i></Link>
                                </div>
                            </div>

                            <div className='Utility my-3'>
                                <div className='electricity'>
                                    <img style={{ width: '100%' }} src={water} alt="" />
                                </div>
                                <div className='mx-4'>
                                    <h4 style={{ fontWeight: '700' }}>Water</h4>
                                    <span style={{ color: '#D0A2F7' }}>Bills Payments</span>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <Link className='darkBtn'>Pay Now <i class="fa-solid fa-chevron-right"></i></Link>
                                </div>
                            </div>

                            <div className='Utility my-3'>
                                <div className='electricity'>
                                    <img style={{ width: '100%' }} src={gas} alt="" />
                                </div>
                                <div className='mx-4'>
                                    <h4 style={{ fontWeight: '700' }}>Gas</h4>
                                    <span style={{ color: '#D0A2F7' }}>Bills Payments</span>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <Link className='darkBtn'>Pay Now <i class="fa-solid fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className='dth mx-3 my-3'>
                            <img style={{ width: '100%' }} src={DTH} alt="" />
                            <h2 style={{ fontWeight: '700' }}>DTH</h2>
                            <div className='my-3'>
                                <Link className='squareBtn mx-2 mb-2 text-center' style={{ background: '#D0A2F7', color: '#fff' }}>Bills Payments <i class="fa-solid fa-chevron-right "></i></Link>
                            </div>
                        </div>

                        <div className='Mobile my-3'>
                            <div className='d-flex justify-content-end align-items-end'>
                                <div>
                                    <br />
                                </div>
                                <img style={{ width: '55%' }} src={mobile} alt="" />
                            </div>
                            <div>
                                <h2 style={{ fontWeight: '700', color: '#D0A2F7' }}>Mobile</h2>
                                <h2 style={{ fontWeight: '700' }}>Recharge</h2>
                                <div className='my-3'>
                                    <Link className='squareBtn me-2 mb-2 text-center' style={{ background: '#D0A2F7', color: '#fff' }}>Choose Plan <i class="fa-solid fa-chevron-right "></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default PayRecharge