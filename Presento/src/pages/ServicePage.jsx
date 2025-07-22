import React from 'react'

const ServicePage = () => {
    return (
        <>
            <section className="contact-section bg-dark text-light">
                <div className="container">
                    <div className="contact-title">Services</div>
                    <div className="contact-underline"></div>
                    <p className="text-center mb-5 text-white">
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                </div>
                <div class="m-4 row text-light">
                   <div class="col-sm-6">
                        <div className="card contact-card p-4 mb-3" style={{background:"#393E46",color:'white'}}>
                            <div className="text-center contact-info-icon">
                                <i class="bi bi-briefcase icon flex-shrink-0"></i>
                                <span className="fa fa-map-marker"></span>
                            </div>
                            <h5 className="text-center font-weight-bold">One</h5>
                            <p className="text-center mb-0">A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                      <div class="col-sm-6">
                        <div className="card contact-card p-4 mb-3" style={{background:"#393E46",color:'white'}}>
                            <div className="text-center contact-info-icon">
                               <i class="bi bi-card-checklist icon flex-shrink-0"></i>
                                <span className="fa fa-map-marker"></span>
                            </div>
                            <h5 className="text-center font-weight-bold">Two</h5>
                            <p className="text-center mb-0">A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                </div>

                <div class="m-4 row text-light">
                   <div class="col-sm-6">
                        <div className="card contact-card p-4 mb-3" style={{background:"#393E46",color:'white'}}>
                            <div className="text-center contact-info-icon">
                                <i class="bi bi-bar-chart icon flex-shrink-0"></i>
                                <span className="fa fa-map-marker"></span>
                            </div>
                            <h5 className="text-center font-weight-bold">Three</h5>
                            <p className="text-center mb-0">A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                      <div class="col-sm-6">
                        <div className="card contact-card p-4 mb-3" style={{background:"#393E46",color:'white'}}>
                            <div className="text-center contact-info-icon">
                                <i class="bi bi-binoculars icon flex-shrink-0"></i>
                                <span className="fa fa-map-marker"></span>
                            </div>
                            <h5 className="text-center font-weight-bold">Four</h5>
                            <p className="text-center mb-0">A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                </div>
                <div class="m-4 row text-light">
                   <div class="col-sm-6">
                        <div className="card contact-card p-4 mb-3" style={{background:"#393E46",color:'white'}}>
                            <div className="text-center contact-info-icon">
                                <i class="bi bi-brightness-high icon flex-shrink-0"></i>
                                <span className="fa fa-map-marker"></span>
                            </div>
                            <h5 className="text-center font-weight-bold">Five</h5>
                            <p className="text-center mb-0">A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                      <div class="col-sm-6">
                        <div className="card contact-card p-4 mb-3" style={{background:"#393E46",color:'white'}}>
                            <div className="text-center contact-info-icon">
                               <i class="bi bi-calendar4-week icon flex-shrink-0"></i>
                                <span className="fa fa-map-marker"></span>
                            </div>
                            <h5 className="text-center font-weight-bold">Six</h5>
                            <p className="text-center mb-0">A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                </div>
               
            </section>

        </>
    )
}

export default ServicePage