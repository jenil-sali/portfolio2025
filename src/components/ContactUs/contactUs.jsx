import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
const ContactUs = () => {
    useEffect(() => {
        const form = document.forms["contact-us"];
        if (!form) return;

        const handleSubmit = (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            let text = "📩 New Form Submission:\n";
            formData.forEach((value, key) => {
                text += `🔹 ${key}: ${value}\n`;
            });
            fetch(process.env.REACT_APP_TELEGRAM_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: process.env.REACT_APP_TELEGRAM_CHATID,
                    text: text
                })
            }).then(res => res.json())
                .then(data => {
                    alert("✅ Message sent to Telegram!");
                })
                .catch(err => {
                    alert("❌ Error sending message.");
                    console.error(err);
                });


            emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICEID,
                process.env.REACT_APP_EMAILJS_TEMPLETID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                },
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
            ).then((result) => {
                console.log('Email sent!', result.text);
                alert("Message sent!");
                form.reset();
            }).catch((error) => {
                console.error('Error sending email:', error);
                alert("Failed to send message.");
            });
        };

        form.addEventListener("submit", handleSubmit);

        return () => form.removeEventListener("submit", handleSubmit);
    }, []);
    return (
        <section className="contactUs" id='contactUs'>
            <span className="skillTitle">Contact Me.</span>

            <div className="contact-wrapper">
                <div className="form-section">
                    <h3>Write us</h3>
                    <form id='contact-us' className='contact-us' name='contact-us'>
                        <input type="text" placeholder="Name" name='Name' required />
                        <input type="email" placeholder="Email" name='Email' required />
                        <input type="text" placeholder="Subject" name='Subject' />
                        <textarea placeholder="Message" name='Message' required></textarea>
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

export default ContactUs