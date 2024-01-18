import React from 'react'
import { Link } from 'react-router-dom'
import balance from "./Svgs/DashIcons/Other 17.svg"
import Transfer from "./Svgs/DashIcons/Ikbal 2.svg"
import credit from "./Svgs/credit-card-refresh.svg"
import wallet from "./Svgs/wallet-02.svg"
import note from "./Svgs/bank-note-03.svg"
import adhar from "./Svgs/Other 02.svg"
import Rupees from "./Svgs/IconRupe.svg"
import qr from "./Svgs/DashIcons/qr-code-02.svg"
import banking from "./Svgs/DashIcons/Icon.svg"
import electricity from "./Svgs/IconElectricity.svg"
import gas from "./Svgs/IconGas.svg"
import water from "./Svgs/IconWater.svg"
import DTH from "./Svgs/ComponentDTH.svg"
import mobile from "./Svgs/OtherMobile.svg"
import receipt from "./Svgs/receipt-check.svg"
import edit from "./Svgs/edit-05.svg"
import certificate from "./Svgs/certificate-01.svg"

const DashHome = () => {
    return (
        <>
            <section className='SideDashbaoord mx-3'>
                <div className='dashTopMessage mb-2'>
                    <h5 style={{ fontWeight: '700' }}>Hello Hele, Welcome Back</h5>
                </div>

                <div className='firstBox d-flex'>
                    <div className='HomeBalance my-3'>
                        <img style={{ width: '50%' }} src={balance} alt="" />
                        <div className='d-flex justify-content-between align-items-center'>
                            <h4 style={{ fontSize: '2.3rem', color: '#fff', width: '47%', fontWeight: '700' }}><i class="fa-solid fa-indian-rupee-sign me-2"></i>Add Balance</h4>
                            <Link className='darkBtn'>Add here <i class="fa-solid fa-chevron-right"></i></Link>
                        </div>
                    </div>

                    <div className='money'>
                        <div className='moneyTransfer mx-3 mt-3'>
                            <div className='d-flex flex-column justify-content-around'>
                                <h5 style={{ fontSize: '2rem', color: '#DBB0FF', fontWeight: '700' }}>Money Transfer</h5>
                                <div>
                                    <span style={{ background: '#fff', borderRadius: '50px', padding: '1rem 1.5rem', textAlign: 'center' }}>
                                        <i class="fa-solid fa-indian-rupee-sign" style={{ color: '#86CFD0' }}></i>
                                    </span>
                                    <span className='mx-2'><img src={credit} alt="" /></span>
                                    <Link className='lightBtn my-3'>Transfer <i class="fa-solid fa-chevron-right"></i></Link>
                                </div>
                            </div>
                            <div>
                                <img style={{ width: '100%' }} src={Transfer} alt="" />
                            </div>
                        </div>

                        <div className='cash d-flex'>
                            <div className='cashWith mt-3 mx-3'>
                                <span className='my-3' style={{ background: '#fff', borderRadius: '50px', padding: '1rem 1.5rem', textAlign: 'center' }}>
                                    <img style={{ width: '100%' }} src={wallet} alt="" />
                                </span>
                                <Link className='squareBtn mx-2 mb-2 text-center'>Cash withdrawal <i class="fa-solid fa-chevron-right"></i></Link>
                            </div>

                            <div className='cashWith mt-3 me-3'>
                                <span className='my-3' style={{ background: '#fff', borderRadius: '50px', padding: '1rem 1.5rem', textAlign: 'center' }}>
                                    <img style={{ width: '100%' }} src={note} alt="" />
                                </span>
                                <Link className='squareBtn mx-2 mb-2 text-center'>Cash Drop <i class="fa-solid fa-chevron-right "></i></Link>
                            </div>
                        </div>

                    </div>

                    <div className='HomeBalance my-3'>
                        <h4 className='text-center' style={{ fontSize: '1.8rem', color: '#fff', fontWeight: '700' }}>Aadhaar Enabled Payment System</h4>
                        <div className='d-flex justify-content-between align-items-end'>
                            <img style={{ width: '100%' }} src={adhar} alt="" />
                            <Link className='darkBtn' style={{ width: '100%' }}>Transfer <i class="fa-solid fa-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className='secondBox d-flex my-2'>
                    <div className='Fastag my-4'>
                        <Link className='lightBtn' style={{ padding: '1.5rem 2.7rem', fontSize: '2rem' }}>Fastag Recharge <img src={Rupees} alt="" /></Link>
                    </div>

                    <div className='Fastag my-4 mx-5'>
                        <Link className='lightBtn' style={{ padding: '1.5rem 2.7rem', fontSize: '2rem' }}> Recharge <img src={banking} alt="" /></Link>
                    </div>

                    <div className='Fastag my-4'>
                        <Link className='lightBtn' style={{ padding: '1.5rem 2.7rem', fontSize: '2rem' }}>UPI Transation <img src={qr} alt="" /></Link>
                    </div>
                </div>

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

                <hr className='hr' />

                <div className='historyMain d-flex justify-content-evenly'>
                    <Link className="history m-2">
                        <h3>Transaction <br />
                            History </h3>
                        <img style={{ width: '100%' }} className='ms-4' src={receipt} alt="" />
                    </Link>

                    <Link className="history m-2">
                        <h3>Ledger<br />
                            History</h3>
                        <img style={{ width: '100%' }} className='ms-4' src={edit} alt="" />
                    </Link>

                    <Link className="history m-2">
                        <h3>Download <br />
                            Certificate </h3>
                        <img style={{ width: '100%' }} className='ms-4' src={certificate} alt="" />
                    </Link>
                </div>

            </section>
        </>
    )
}

export default DashHome