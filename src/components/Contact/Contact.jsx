import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const formData = new FormData(form);
    
    let text = "📩 New Form Submission:\\n";
    formData.forEach((value, key) => {
      text += `🔹 ${key}: ${value}\\n`;
    });

    // Try Telegram
    if (process.env.REACT_APP_TELEGRAM_URL) {
      fetch(process.env.REACT_APP_TELEGRAM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.REACT_APP_TELEGRAM_CHATID,
          text: text
        })
      }).catch(err => console.error(err));
    }

    // EmailJS
    if (process.env.REACT_APP_EMAILJS_SERVICEID) {
      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLETID,
        {
          from_name: formData.get('name'),
          from_email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message')
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      ).then(() => {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      }).catch((error) => {
        console.error('Error sending email:', error);
        setStatus('error');
      });
    } else {
      // Fallback if env vars are missing
      setTimeout(() => {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="contact-section section-container">
      <motion.h2 
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="tech-text">05.</span> Initialize Connection
      </motion.h2>

      <div className="contact-terminal-wrapper">
        <div className="terminal-header">
          <div className="terminal-title">~/contact-jenil.sh</div>
        </div>
        <div className="terminal-body">
          <div className="terminal-logs">
            <p className="log"><span className="prompt-sign">$</span> ./contact-jenil</p>
            <p className="log sys">Initializing connection...</p>
            <p className="log sys success">✓ Developer found</p>
            <p className="log sys success">✓ Communication channel available</p>
            <p className="log sys mt-2">Let's build something useful.</p>
          </div>

          <form onSubmit={handleSubmit} className="terminal-form">
            <div className="form-group">
              <label><span className="prompt-sign">&gt;</span> enter_name:</label>
              <input type="text" name="name" required className="terminal-input" />
            </div>
            <div className="form-group">
              <label><span className="prompt-sign">&gt;</span> enter_email:</label>
              <input type="email" name="email" required className="terminal-input" />
            </div>
            <div className="form-group">
              <label><span className="prompt-sign">&gt;</span> enter_subject:</label>
              <input type="text" name="subject" required className="terminal-input" />
            </div>
            <div className="form-group">
              <label><span className="prompt-sign">&gt;</span> enter_message:</label>
              <textarea name="message" required className="terminal-input textarea"></textarea>
            </div>

            <button type="submit" className="terminal-submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <span>Executing...</span>
              ) : status === 'success' ? (
                <span className="success-text"><CheckCircle size={16}/> Payload Sent</span>
              ) : (
                <span><Send size={16}/> [ Send Message ]</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
