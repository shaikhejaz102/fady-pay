import React from 'react'

const Help = () => {
    return (
        <section className='SideDashbaoord mx-3 w-100'>
            <div>
                <h2 className='my-3 text-center' style={{ fontWeight: '700' }}>Help & Support</h2>
                <div class="contact-div col-md-10 mx-auto col-lg-5 my-5" >
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
        </section>
    )
}

export default Help