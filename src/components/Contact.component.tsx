import { FormEventHandler } from "react";

const Contact = () => {
    const sendEmail: FormEventHandler<HTMLFormElement> = (e) => {
        const {
            email: { value: email },
            userName: { value: userName },
            message: { value: message },
        } = e.target as HTMLFormElement;

        window.location.href = `mailto:jainsparsh0801@gmail.com?subject=Feedback from ${userName}&body=${message}%0A%0AThanks,%0A${userName} | ${email}`;
        e.preventDefault();
    };
    return (
        <section id='four'>
            <header className='major'>
                <h2>Get In Touch</h2>
            </header>
            <div className='row p-0' style={{ minHeight: "65vh" }}>
                <form className='col-12 col-lg-5 row align-content-center d-flex flex-row' onSubmit={sendEmail}>
                    <div className='form-group col-12 mb-3'>
                        <label htmlFor='name'>Your Name</label>
                        <input
                            type='text'
                            className='form-control'
                            id='name'
                            placeholder='John Doe'
                            aria-label='Name'
                            name='userName'
                            aria-describedby='basic-addon1'
                        />
                    </div>
                    <div className='form-group col-12 mb-2'>
                        <label htmlFor='email'>Your Email</label>
                        <input
                            type='text'
                            className='form-control'
                            id='email'
                            placeholder='john.doe@gmail.com'
                            aria-label='Email'
                            name='email'
                            aria-describedby='basic-addon1'
                        />
                    </div>
                    <div className='form-group col-12 mb-2'>
                        <label htmlFor='message'>Your Message</label>
                        <textarea
                            className='form-control'
                            name='message'
                            rows={5}
                            id='message'
                            placeholder='Enter your message ...'
                            aria-label='Email'
                            aria-describedby='basic-addon1'></textarea>
                    </div>
                    <div className='form-group col-12 mt-2'>
                        <button type='submit' className='form-control btn btn-primary'>
                            Send Message <i className='icon solid fa-paper-plane'></i>
                        </button>
                    </div>
                </form>
                <div className='col-12 col-lg-7 mapouter'>
                    <div className='gmap_canvas'>
                        <iframe
                            title='Map'
                            width='100%'
                            height='100%'
                            id='gmap_canvas'
                            src='https://maps.google.com/maps?q=gunjur&t=&z=10&ie=UTF8&iwloc=&output=embed'
                            frameBorder={0}
                            scrolling='no'
                            marginHeight={0}
                            marginWidth={0}></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
