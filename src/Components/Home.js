import React from "react"
import back from "./Svgs/Ellipse 3.svg"
import back1 from "./Svgs/Ellipse 2.svg"
import logo from "./Svgs/logo1.svg.svg"
import img from "./Svgs/Other 07.svg"

//second section
import man from "./Svgs/Ikbal 4.svg"
import partner1 from "./Svgs/Google.svg"
import partner2 from "./Svgs/Facebook.svg"
import partner3 from "./Svgs/Amazone.svg"
import partner4 from "./Svgs/Printrest.svg"
import partner5 from "./Svgs/ICICI Bank.svg"

//third section
import third from "./Svgs/1626342071104.png.svg"

//fifth section
import fifth from "./Svgs/Other 08.svg"

//Six section
import six from "./Svgs/Other 05.svg"

//Seven section
import seven from "./Svgs/Other 06.svg"

//eight section
// import eight1 from "./Svgs/1640241561388.png.svg"
// import eight2 from "./Svgs/1626079147084.png.svg"
import eight1 from "./Images/Guy-PNG-Picture.png"
import eight2 from "./Images/Happy-Men-Download-Transparent-PNG-Image.png"

//Nine section
import nine from "./Svgs/Other 20.svg"

//Teen section
import teen from "./Svgs/Component.svg"

//eleven section
import eleven1 from "./Svgs/Component1.svg"
import eleven2 from "./Svgs/Component2.svg"

//twelve section
import twelve1 from "./Svgs/Component3.svg"
import twelve2 from "./Svgs/Component4.svg"
import twelve3 from "./Svgs/Marni 4.svg"
import twelve4 from "./Svgs/Marni 2.svg"

import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"

import Tilt from 'react-parallax-tilt';


const Home = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <div className="first-main d-flex justify-content-center">
          {/* <img className='back-ellipse' src={back} alt="" /> */}
          <div className='first-div d-flex justify-content-evenly align-items-center w-100'>
            <div className='first-content'>
              <img style={{ position: 'relative', left: '-20px' }} src={logo} alt="" />
              <h1 className='home-h1'>India's Most-loved Payments Website</h1>
              <span className='span d-flex'>Recharge & pay bills, book Gas & Fastag,
                open a retailer account, Pay in once & utility
                bills, and do a lot more.
              </span>
              <div className="my-3">
                <Link to="/signup" className='btn rounded-pill' style={{ padding: '0.5rem 1.5rem' }}>View Dashboard</Link>
                <Link to="/signup" type="button" class="btn btn-outline-light rounded-pill mx-3" style={{ padding: '0.5rem 2rem' }}>Join Now</Link>
              </div>
            </div>
            <div>
              <Tilt scale={1.2}>
                <img className="first-img" style={{ width: '30vw' }} src={img} alt="" />
              </Tilt>
            </div>
          </div>
          <img style={{ width: '40%' }} className='back-ellipse2' src={back1} alt="" />
        </div>
      </section>

      <section>
        <div className="second-main">
          <div style={{ width: '90%' }}>
            <div className="partners">
              <img className="mx-2" style={{ width: '10%' }} src={partner1} alt="" />
              <img className="mx-2" style={{ width: '10%' }} src={partner2} alt="" />
              <img className="mx-2" style={{ width: '10%' }} src={partner3} alt="" />
              <img className="mx-2" style={{ width: '10%' }} src={partner4} alt="" />
              <img className="mx-2" style={{ width: '10%' }} src={partner5} alt="" />
            </div>
          </div>

          <div className="second-div d-flex justify-content-around align-items-center" style={{ marginTop: '5rem', width: '100%' }}>
            <div className='second-content' >
              <h1 className='home-h1'>The Fastest Way to Pay In-store & Online.</h1>
              <span className='span d-flex'>Load up your Fady Pay Wallet for free and
                make payments in a Fady at over
                million stores, websites and platform.
              </span>
              <button className='btn rounded-pill my-3' style={{ padding: '0.5rem 1.5rem' }}>View Dashboard</button>
            </div>

            <div>
              <Tilt>
                <img className="second-img" style={{ width: '30vw' }} src={man} alt="" />
              </Tilt>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="third-main">
          <div>
            <Tilt>
              <img className="third-img" style={{ position: 'relative', width: '30vw' }} src={third} alt="" />
            </Tilt>
          </div>

          <div >
            <div className='third-content' style={{ width: '30vw' }}>
              <h1 className='home-h1'>Pay anyone directly from your bank account.</h1>
              <span className='span d-flex'>Pay anyone, everywhere. Make contactless & secure
                payments in-stores or online using  Fady Pay Wallet or
                Directly from your Bank Account. Plus, send & receive
                money from anyone.
              </span>
              <button className='btn2 rounded-pill my-3' style={{ padding: '0.5rem 1.5rem' }}>View Dashboard</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="fourth-main">
          <div>
            <div className="twelve-h1">
              <h1>Recharge & Pay Bills on Fady Pay.</h1>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-wrap  mt-5">
              <div className="d-flex align-items-center justify-content-center">
                <div className="d-flex flex-column align-items-center">
                  <span className="icon-back"><i class="fa-solid fa-mobile" style={{ color: '#21182F', fontSize: "2rem" }}></i></span>
                  <span className="col-4 text-start" style={{ fontSize: "1rem" }}>Recharge Prepaid Mobile<a href=""><i class="fa-solid fa-arrow-right  mx-2" style={{ color: "#ffffff" }}></i></a></span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="icon-back"><i class="fa-regular fa-lightbulb" style={{ color: '#21182F', fontSize: "2rem" }}></i></span>
                  <span className="col-4 text-start" style={{ fontSize: "1rem" }}>Pay Electricity Bills<a href=""><i class="fa-solid fa-arrow-right mx-2" style={{ color: "#ffffff" }}></i></a></span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="icon-back2"><i class="fa-solid fa-satellite-dish" style={{ color: '#21182F', fontSize: "2rem" }}></i></span>
                  <span className="col-4 text-start" style={{ fontSize: "1rem" }}>Recharge DTH Connection<a href=""><i class="fa-solid fa-arrow-right  mx-2" style={{ color: "#ffffff" }}></i></a></span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="icon-back"><i class="fa-solid fa-bottle-droplet" style={{ color: '#21182F', fontSize: "2.3rem" }}></i></span>
                  <span className="col-4 text-start" style={{ fontSize: "1rem" }}>Book Gas Cylinder<a href=""><i class="fa-solid fa-arrow-right  mx-2" style={{ color: "#ffffff" }}></i></a></span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <div className="d-flex flex-column align-items-center">
                  <span className="icon-back2"><i class="fa-solid fa-hand-holding-droplet" style={{ color: '#21182F', fontSize: "2rem" }}></i></span>
                  <span className="col-4 text-start" style={{ fontSize: "1rem" }}>Pay Water Bills<a href=""><i class="fa-solid fa-arrow-right  mx-2" style={{ color: "#ffffff" }}></i></a></span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="icon-back2"><i class="fa-solid fa-truck-fast" style={{ color: '#21182F', fontSize: "2rem" }}></i></span>
                  <span className="col-4 text-start" style={{ fontSize: "1rem" }}>Pay Fastag Recharge<a href=""><i class="fa-solid fa-arrow-right  mx-2" style={{ color: "#ffffff" }}></i></a></span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="icon-back2"><i class="fa-solid fa-sack-dollar" style={{ color: '#21182F', fontSize: "2rem" }}></i></span>
                  <span className="col-4 text-start" style={{ fontSize: "1rem" }}><br /> UPI Transactions<a href=""><i class="fa-solid fa-arrow-right mx-2" style={{ color: "#ffffff" }}></i></a></span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="icon-back2"><i class="fa-solid fa-layer-group" style={{ color: '#21182F', fontSize: "2rem" }}></i></span>
                  <span className="col-4 text-start" style={{ fontSize: "1rem" }}>All Payment Services <a href=""><i class="fa-solid fa-arrow-right  mx-2" style={{ color: "#ffffff" }}></i></a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="fifth-main d-flex align-items-center">
          <div className='fifth-content' >
            <h1 className='home-h1'>Want it? No more waiting for it.</h1>
            <span className='span d-flex'>With Fady Pay Postpaid, your wishlist doesn't have to be
              on the waitlist. Shop for the things you want today and
              pay for them next month.
            </span>
            <button className='btn rounded-pill my-3' style={{ padding: '0.5rem 1.5rem' }}>Learn More</button>
          </div>

          <div>
            <Tilt>
              <img className="fifth-img" style={{ width: '30vw' }} src={fifth} alt="" />
            </Tilt>
          </div>
        </div>
      </section>

      <section>
        <div className="six-main">
          <div>
            <Tilt>
              <img className="six-img" style={{ position: 'relative', width: '30vw' }} src={six} alt="" />
            </Tilt>
          </div>

          <div >
            <div className='third-content' style={{ width: '30vw' }}>
              <h1 className='home-h1'>Work with Easiness & Pay your Bills.</h1>
              <span className='span d-flex'>Pay on Fady Pay Money is transparent, low-cost and
                commission-free. Buy a Plan &  Pay Bills that can
                help you create easiness & realise your dreams.
              </span>
              <button className='btn2 rounded-pill my-3' style={{ padding: '0.5rem 1.5rem' }}>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="twelve-h1 d-flex align-items-center" style={{ backgroundColor: '#21182F', padding: '2rem 0 2rem 10rem', color: '#fff' }}>
          <h1 className="home-h1">Financial Services by Fady Pay</h1>
        </div>
        <div className="seven-main d-flex align-items-center">
          <div className='fifth-content' >
            <h1 className='home-h1'>India's most sincere Website.</h1>
            <span className='span d-flex'>Fady Pay Payments  offers secure, transparent and
              risk-free Payments at your fingertips. With instant
              account opening, zero balance requirements,
              experience the future of banking today.
            </span>
            <button className='btn rounded-pill my-3' style={{ padding: '0.5rem 1.5rem' }}>Learn More</button>
          </div>

          <div>
            <Tilt>
              <img className="seven-img" style={{ width: '30vw' }} src={seven} alt="" />
            </Tilt>
          </div>
        </div>
      </section>

      <section>
        <div className="d-flex align-items-center" style={{ backgroundColor: '#21182F', padding: '2rem 0 2rem 20rem', color: '#fff' }}>
          <a className="slide-btn mx-2" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" href="/"><i class="fa-solid fa-arrow-left" style={{ color: "#fafafa" }}></i></a>
          <a className="slide-btn" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" href="/"><i class="fa-solid fa-arrow-right" style={{ color: "#fafafa" }}></i></a>
        </div>
        <div className="eight-main">
          <div className="d-flex align-items-center justify-content-center">
            <div className="slider-content">
              <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">

                  <div class="carousel-item active">
                    <div className="d-flex slideCard">
                      <div className="card my-2">
                        <div>
                          <img style={{ width: '95%' }} src={eight2} alt="" />
                        </div>
                        <div>
                          <h1 style={{ fontWeight: '700' }}>Unlimited Cashback Every time</h1>
                          <span>Fady Pay Banking Select Credit Card. A
                            card with assured Cashback and incredible offers.
                          </span>
                        </div>
                      </div>

                      <div className="card my-2 mx-3">
                        <div>
                          <h1 style={{ fontWeight: '700' }}>India’s Most Sincere Website</h1>
                          <span>Fady Pay SELECT - With Intelligent
                            Features & Great Rewards that Never Expire
                          </span>
                        </div>
                        <div>
                          <img style={{ width: '95%' }} src={eight1} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <div className="d-flex slideCard">
                      <div className="card my-2">
                        <div>
                          <img style={{ width: '95%' }} src={eight2} alt="" />
                        </div>
                        <div>
                          <h1 style={{ fontWeight: '700' }}>Payment Recharges And Bills</h1>
                          <span>Fady Pay Banking Select Credit Card. A
                            card with assured Cashback and incredible offers.
                          </span>
                        </div>
                      </div>

                      <div className="card my-2 mx-3">
                        <div>
                          <h1 style={{ fontWeight: '700' }}>India’s Most Favoute Website</h1>
                          <span>Fady Pay SELECT - With Intelligent
                            Features & Great Rewards that Never Expire
                          </span>
                        </div>
                        <div>
                          <img style={{ width: '95%' }} src={eight1} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="Nine-main">
          <div className='fifth-content' >
            <h1 className='home-h1'>FASTAG made easy.</h1>
            <span className='span d-flex'>Paying Fastag does not have to be tedious, time-
              consuming & confusing. Fady Pay Services removes the
              worry of getting insured by making it simple,
              convenient & easy-to-understand , easy-to-recharge.
            </span>
            <button className='btn2 rounded-pill my-3' style={{ padding: '0.5rem 1.5rem' }}>Learn More</button>
          </div>

          <div>
            <Tilt>
              <img className="nine-img" style={{ width: '30vw' }} src={nine} alt="" />
            </Tilt>
          </div>
        </div>
      </section>

      <section>
        <div className="teen-main">
          <div>
            <Tilt>
              <img className="teen-img" style={{ position: 'relative', width: '30vw' }} src={teen} alt="" />
            </Tilt>
          </div>

          <div >
            <div className='third-content' style={{ width: '30vw' }} >
              <h1 className='home-h1'>UPI Transaction in 10 Seconds.</h1>
              <span className='span d-flex'>Fady Pay offers India's quickest multi-payments, hassle-free Transactions. It
                is 100% digital, transparent and paperless.
              </span>
              <button className='btn rounded-pill my-3' style={{ padding: '0.5rem 1.5rem' }}>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="twelve-h1 d-flex align-items-center" style={{ backgroundColor: '#21182F', padding: '2rem 0 0 10rem', color: '#fff' }}>
          <h1 className="home-h1">Business Services by Fady Pay</h1>
        </div>
        <div className="eleven-main">
          <div className="d-flex align-items-center flex-column justify-content-center">
            <div className="card1">
              <div className='eleven-content' style={{ color: '#000' }} >
                <h1 className='col-8'>Accept payments online with ease.</h1>
                <span className='d-flex'>Grow your business with the payment gateway that
                  powers India’s largest brands and even the Fady Pay Website.
                </span>
                <button className='btn rounded-pill my-3' style={{ padding: '0.5rem 1.5rem' }}>Learn More</button>
              </div>

              <div>
                <Tilt>
                  <img style={{ width: '30vw' }} src={eleven1} alt="" />
                </Tilt>
              </div>
            </div>

            <div className="card1 my-5">
              <div className='eleven-content' style={{ color: '#000' }} >
                <h1 className='col-9'>In-shop payments powered by Fady Pay.</h1>
                <span className='d-flex'>Millions of small & big businesses use Fady Pay to accept
                  payments anywhere any time with a wide range of
                  solutions for all kind of merchants.
                </span>
                <button className='btn rounded-pill my-3' style={{ padding: '0.5rem 1.5rem' }}>Learn More</button>
              </div>

              <div>
                <Tilt>
                  <img style={{ width: '30vw' }} src={eleven2} alt="" />
                </Tilt>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="twelve-h1 d-flex align-items-center" style={{ backgroundColor: '#21182F', padding: '2rem 0 0 10rem', color: '#fff' }}>
          <h1 className="home-h1">Business Tools to help your business grow</h1>
        </div>
        <div className="twelve-home">
          <div style={{ width: '25%' }} className="twelve-div d-flex flex-column align-items-center justify-content-center">
            <img className="twelve-img" style={{ width: '75%' }} src={twelve1} alt="" />
            <h4 style={{ fontWeight: '700' }} className="twelve-h4 col-5">POS Billing Software</h4>
            <span className='span twelve-span col-5 d-flex'>Say Hello to Smart Retail Business Management</span>
            <button className='btn my-3' style={{ padding: '0.5rem 1.5rem' }}>Learn More</button>
          </div>
          <div style={{ width: '25%' }} className="twelve-div d-flex flex-column align-items-center justify-content-center">
            <img className="twelve-img" style={{ width: '75%' }} src={twelve2} alt="" />
            <h4 style={{ fontWeight: '700' }} className="twelve-h4 col-6">Fady Pay for Business websites</h4>
            <span className='span twelve-span col-6 d-flex'>Everything you need to manage your business on your phone</span>
            <button className='btn my-3' style={{ padding: '0.5rem 1.5rem' }}>Learn More</button>
          </div>
          <div style={{ width: '25%' }} className="twelve-div d-flex flex-column align-items-center justify-content-center">
            <img className="twelve-img" style={{ width: '75%' }} src={twelve3} alt="" />
            <h4 style={{ fontWeight: '700' }} className="twelve-h4 col-6">Advertise on Fady Pay</h4>
            <span className='span twelve-span col-6 d-flex'>Grow your business by advertising on India’s largest mobile business</span>
            <button className='btn my-3' style={{ padding: '0.5rem 1.5rem' }}>Learn More</button>
          </div>
          <div style={{ width: '25%' }} className="twelve-div d-flex flex-column align-items-center justify-content-center">
            <img className="twelve-img" style={{ width: '75%' }} src={twelve4} alt="" />
            <h4 style={{ fontWeight: '700' }} className="twelve-h4 col-5">Business Account</h4>
            <span className='span twelve-span col-5 d-flex'>Managing Account made easy</span>
            <button className='btn my-3' style={{ padding: '0.5rem 1.5rem' }}>Learn More</button>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Home