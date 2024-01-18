import React from 'react'
import { Link } from 'react-router-dom'
import electricity from "./Svgs/IconElectricity.svg"
import gas from "./Svgs/IconGas.svg"
import water from "./Svgs/IconWater.svg"
import wallet from "./Svgs/DashIcons/wallet-03.svg"
import folder from "./Svgs/DashIcons/folder-download.svg"
import coins from "./Svgs/DashIcons/coins-swap-02.svg"

const Utility = () => {
    return (
        <>
            <section className='SideDashbaoord mx-3'>
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
                    </div>
                    <div className='thirdBox d-flex'>
                        <div className='utilityMain'>
                            <div className='Utility my-3'>
                                <div className='electricity'>
                                    <img style={{ width: '100%' }} src={folder} alt="" />
                                </div>
                                <div className='mx-4'>
                                    <h4 style={{ fontWeight: '700' }}>EMI</h4>
                                    <span style={{ color: '#D0A2F7' }}>Bills Payments</span>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <Link className='darkBtn'>Pay Now <i class="fa-solid fa-chevron-right"></i></Link>
                                </div>
                            </div>

                            <div className='Utility my-3'>
                                <div className='electricity'>
                                    <img style={{ width: '100%' }} src={wallet} alt="" />
                                </div>
                                <div className='mx-4'>
                                    <h4 style={{ fontWeight: '700' }}>Education</h4>
                                    <span style={{ color: '#D0A2F7' }}>Bills Payments</span>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <Link className='darkBtn'>Pay Now <i class="fa-solid fa-chevron-right"></i></Link>
                                </div>
                            </div>

                            <div className='Utility my-3'>
                                <div className='electricity'>
                                    <img style={{ width: '100%' }} src={coins} alt="" />
                                </div>
                                <div className='mx-4'>
                                    <h4 style={{ fontWeight: '700' }}>BroadBand</h4>
                                    <span style={{ color: '#D0A2F7' }}>Bills Payments</span>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <Link className='darkBtn'>Pay Now <i class="fa-solid fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Utility