import React from 'react'
import "../pages/Contact.css"

const Contact = () => {
    return (
        <>


            <section classNameName="contact-section">
                <div classNameName="container">
                    <div classNameName="contact-title">CONTACT</div>
                    <div classNameName="contact-underline"></div>
                    <p classNameName="text-center mb-5 text-muted">
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                    <div classNameName="row">
                        <div classNameName="col-md-5 mb-4">
                            <div classNameName="card contact-card p-4 mb-3">
                                <div classNameName="text-center contact-info-icon">
                                    <i classNameName="bi bi-geo-alt"></i>
                                    <span classNameName="fa fa-map-marker"></span>
                                </div>
                                <h5 classNameName="text-center font-weight-bold">Address</h5>
                                <p classNameName="text-center mb-0">A108 Adam Street, New York, NY 535022</p>
                            </div>
                            <div classNameName="row">
                                <div classNameName="col-6">
                                    <div classNameName="card contact-card p-3">
                                        <div classNameName="text-center contact-info-icon">
                                            <i classNameName="bi bi-telephone"></i>
                                            <span classNameName="fa fa-phone"></span>
                                        </div>
                                        <h6 classNameName="text-center font-weight-bold mb-1">Call Us</h6>
                                        <p classNameName="text-center mb-0">+1 5589 55488 55</p>
                                    </div>
                                </div>
                                <div classNameName="col-6">
                                    <div classNameName="card contact-card p-3">
                                        <div classNameName="text-center contact-info-icon">
                                            <i classNameName="bi bi-envelope"></i>
                                            <span classNameName="fa fa-envelope"></span>
                                        </div>
                                        <h6 classNameName="text-center font-weight-bold mb-1">Email Us</h6>
                                        <p classNameName="text-center mb-0">info@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        
                        <div classNameName="col-md-7">
                            <div classNameName="card contact-card p-4">
                              
                                <form>
                                    <div className="form-row align-items-center">
                                        <div className="col-auto">
                                            <label className="sr-only" for="inlineFormInput">Name</label>
                                            <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Enter Your Name" />
                                        </div>

                                        <div className="col-auto mt-4">
                                            <label className="sr-only" for="inlineFormInput">Email</label>
                                            <input type="email" className="form-control mb-2" id="inlineFormInput" placeholder="Your Email" />
                                        </div>

                                         <div className="col-auto mt-4">
                                            <label className="sr-only" for="inlineFormInput">Subject</label>
                                            <input type="email" className="form-control mb-2" id="inlineFormInput" placeholder="Subject" />
                                        </div>

                                         <div className="col-auto mt-4">
                                            <label className="sr-only" for="inlineFormInput">Name</label>
                                            <input type="email" className="form-control mb-2" id="inlineFormInput" placeholder="Message" />
                                        </div>

                                        <div className="col-auto contact-title">
                                            <button type="submit" className="btn btn-danger mb-2">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            




                            </div>
                        </div>
                         
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact