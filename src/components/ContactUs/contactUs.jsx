import React from 'react';

const contactUs = () => {
    return (
        <section className="contactUs" id='contactUs'>
            <span className="skillTitle">Contact Me.</span>

            <div className="contact-wrapper">
                <div className="form-section">
                    <h3>Write us</h3>
                    <form>
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                <div className="info-section">
                    <h3>Contact information</h3>
                    <p>We're open for any suggestion or just to have a chat</p>
                    <div className="info">
                        <i className="fas fa-map-marker-alt"></i>
                        <div><strong>Address:</strong> Bhoomi Complex, Honey Park Road,<br />Adajan, Surat. 395009</div>
                    </div>
                    <div className="info">
                        <i className="fas fa-phone-alt"></i>
                        <div><strong>Phone:</strong> +91 92656 41146</div>
                    </div>
                    <div className="info">
                        <i className="fas fa-paper-plane"></i>
                        <div><strong>Email:</strong> jenilsali2508@gmail.com</div>
                    </div>
                    <div className="info">
                        <i className="fas fa-brands fa-linkedin"></i>
                        <div><strong>LinkedIn:</strong> https://www.linkedin.com/in/jenil-sali/</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contactUs