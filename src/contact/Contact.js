import React from 'react'
import './contact.css'
const Contact = () => {
    return (
        <div className='container' id='contact'>
            {/* Section: Design Block */}
            <section className="background-radial-gradient overflow-hidden box " >
                <div className="container px-4 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5 ">
                        <div className="col mb-5 mb-lg-0 position-relative" >

                            <div className="col mb-5 mb-lg-0 position-relative d-none d-md-block" >
                                                                <div
                                    id="radius-shape-2"
                                    className="position-absolute  shadow-5-strong"
                                />
                            </div>
                            <p className='contacthead'>Code That Drives Results!<br /><span>Let's Get Started.</span></p>
                            <div className='container pt-5' >
                                <div className='row text-danger ms-md-auto' >
                                    <p className='col-md-3 ms-md-auto contactdetail'>Mail Me at <br /><span>vishalsahu1230@gmail.com</span></p>
                                    <p className='col-md-3 contactdetail ms-md-5'>or Call me at <br /><span>+91 7987776520</span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Section: Design Block */}
        </div>

    )
}

export default Contact