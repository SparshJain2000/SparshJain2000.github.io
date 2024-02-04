import React from "react";

const Contact = () => {
    return (
        <section id='four'>
            <header className='major'>
                <h2>Get In Touch</h2>
            </header>
            <div className='row p-0' style={{ minHeight: "65vh" }}>
                <div className='col-12 col-lg-5 row align-content-center d-flex flex-row'>
                    <div className='form-group col-12 mb-3'>
                        {/* <!-- <div className="input-group-prepend">
                                                <span className="input-group-text " id="basic-addon1"><i
                                                        className="icon solid fa-envelope"></i></span>
                                            </div> --> */}
                        <label htmlFor='name'>Your Name</label>

                        <input type='text' className='form-control' id='name' placeholder='John Doe' aria-label='Email' aria-describedby='basic-addon1' />
                    </div>
                    <div className='form-group col-12 mb-2'>
                        <label htmlFor='email'>Your Email</label>
                        <input type='text' className='form-control' id='email' placeholder='xyz@gmail.com' aria-label='Email' aria-describedby='basic-addon1' />
                    </div>
                    <div className='form-group col-12 mb-2'>
                        <label htmlFor='message'>Your Message</label>
                        <textarea
                            className='form-control'
                            rows={5}
                            id='message'
                            placeholder='Enter your message ...'
                            aria-label='Email'
                            aria-describedby='basic-addon1'></textarea>
                    </div>
                    <div className='form-group col-12 mt-2'>
                        <a href='javascript:mailTo()' className='form-control btn btn-primary'>
                            Send Message <i className='icon solid fa-paper-plane'></i>
                        </a>
                    </div>
                </div>
                <div className='col-12 col-lg-7 mapouter'>
                    <div className='gmap_canvas'>
                        <iframe
                            title='Map'
                            width='100%'
                            height='100%'
                            id='gmap_canvas'
                            src='https://maps.google.com/maps?q=bellandur&t=&z=10&ie=UTF8&iwloc=&output=embed'
                            frameBorder={0}
                            scrolling='no'
                            marginHeight={0}
                            marginWidth={0}></iframe>
                    </div>
                </div>
                {/* <!-- <ul className="col-12 labeled-icons">
                    <li>
                        <h3 className="icon solid fa-home"><span className="label">Address</span></h3>
                        45-A New Mandi<br /> Muzaffarnagar, 251001<br />UP, India
                    </li>
                    <li>
                        <h3 className="icon solid fa-mobile-alt"><span className="label">Phone</span></h3>
                        +91-6397696910
                    </li>
                    <li>
                        <h3 className="icon solid fa-envelope"><span className="label">Email</span></h3>
                        <a href="mailto:jainsparsh0801@gmail.com?subject=Feedback">jainsparsh0801@gmail.com</a>
                    </li> 
                </ul> -->*/}
            </div>
        </section>
    );
};

export default Contact;
