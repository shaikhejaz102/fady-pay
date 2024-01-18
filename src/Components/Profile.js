import React from 'react'

import profileImg from "./Images/Image 4.png"
import coins from "./Svgs/DashIcons/coins-swap-02.svg"
import folder from "./Svgs/DashIcons/folder-download.svg"
import wallet from "./Svgs/DashIcons/wallet-03.svg"


const Profile = () => {
    return (
        <>
            <section className='SideDashbaoord mx-3 w-100'>
                <div>
                    <h2 className='my-3' style={{ fontWeight: '700' }}>Profile</h2>
                </div>

                <div className='profileCards d-flex px-3'>
                    <duv className="card flex-row mx-2 my-2" style={{width:'85%'}}>
                        <div>
                            <img style={{ width: '100px' }} src={profileImg} alt="" />
                        </div>
                        <div>
                            <h1 className='my-3'>Hele Voizhik</h1>
                            <div className='my-3 d-flex justify-content-between'>
                                <div className='my-2'>Role: User</div>
                                <div className='my-2'>Status: active</div>
                            </div>
                            <div className='my-3'>Email : helevoizhik@gmail.com</div>
                            <div className='my-3'>Business Name: Lorem store</div>
                        </div>
                    </duv>

                    <div className="card  mx-2 my-2" style={{width:'85%'}}>
                        <div>
                            <h3 className='my-3'>Basic Information<span className='mx-2' style={{fontSize:'0.8rem'}}>(Non-editable)</span></h3>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h5 className='my-3'>Join Date</h5>
                                    <span className='p-2' style={{ background: '#D0A2F7', borderRadius:'5px' }}>Agust, 28,2023</span>
                                </div>
                                <div>
                                    <h5 className='my-3'>Transactions</h5>
                                    <span className='p-2' style={{ background: '#D0A2F7', borderRadius:'5px' }}>45.55%</span>
                                </div>
                                <div>
                                    <h5 className='my-3'>User ID</h5>
                                    <span className='p-2' style={{ background: '#D0A2F7', borderRadius:'5px' }}>0005620</span>
                                </div>
                                <div>
                                    <h5 className='my-3'>Account</h5>
                                    <span className='p-2' style={{ background: '#D0A2F7', borderRadius:'5px' }}>XXX-XX-3651</span>
                                </div>
                            </div>

                            <div className='my-5'>
                            <div>
                                <h3 className='my-3'>Personal Information<span className='mx-2' style={{fontSize:'0.8rem'}}>(Editable)</span></h3>
                            </div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h5>Birth Date</h5>
                                        <span>12/02/1998</span>
                                    </div>
                                    <div>
                                        <h5>Address</h5>
                                        <span>315N Creswater Lane</span>
                                    </div>
                                    <div>
                                        <br/>
                                        <span className='text-gray'>Steet 2</span>
                                    </div>
                                </div>
                            </div>

                            <div className=''>
                                <h3 className='my-3'>Occupation Information<span className='mx-2' style={{fontSize:'0.8rem'}}>(Non-editable)</span></h3>
                                <div className='d-flex  justify-content-between '>
                                    <div className='d-flex  justify-content-center align-items-center'>
                                        <img src={folder} alt="" />
                                        <span className='mx-2'>Full Time</span>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img src={wallet} alt="" />
                                        <span className='mx-2'>Seller</span>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img src={coins} alt="" />
                                        <span className='mx-2'>Seattle, WA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile