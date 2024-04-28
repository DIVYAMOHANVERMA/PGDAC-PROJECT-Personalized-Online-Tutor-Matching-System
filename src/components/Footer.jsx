import React from 'react';

function Footer() {
    return (
        <div className='container-fluid bg-dark text-light ' style={{maxHeight:'30vh', overflowY:'auto'}}>
            <div className='row'>
                <div className='col-md-4'>
                    <h3>Contact Us</h3>
                    <p>8840021359</p>
                </div>
                <div className='col-md-4'>
                    <h3>Address</h3>
                    {/* Embed Google Map */}
                    <iframe
                        title="Google Map"
                        width="100%"
                        height="200"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.865473369421!2d77.35412131446791!3d28.59719138242197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce47ee85774b1%3A0x29e0de2f46dc8b17!2sC-DAC%20Noida!5e0!3m2!1sen!2sin!4v1649130066983!5m2!1sen!2sin"
                    ></iframe>
                </div>
                <div className='col-md-4'>
                    <h3>Social Media</h3>
                    {/* Social media icons */}
                    <div>
                        <a href="https://twitter.com">
                            <i className="fab fa-twitter fa-5x"></i>
                        </a>
                        <a href="https://facebook.com">
                            <i className="fab fa-facebook fa-5x"></i>
                        </a>
                        <a href="https://instagram.com">
                            <i className="fab fa-instagram fa-5x"></i>
                        </a>
                    </div>
                </div>
                <div className='col-md-4'>
                    <h3>Phone Number</h3>
                    <p>8840021359</p>
                </div>
                <div className='col-md-4'>
                    <h3>Email</h3>
                    <p>1pyare2mohan@gmail.com</p>
                </div>
                <div className='col-md-4'>
                    <h3>Created By</h3>
                    <p>DIVYA MOHAN VERMA</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
