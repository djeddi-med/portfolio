import React, { useState } from 'react';
import translations from '../assets/translations';

const Contact = ({ currentLang }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Client-side email sending via mailto:
        // This will open the user's default email client.
        // For a robust, server-side email sending (without opening client),
        // you would need a backend API (e.g., a PHP script on your server).
        const recipientEmail = 'med.djd@gmail.com';
        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(
            `${translations.your_name[currentLang]}: ${formData.name}\n` +
            `${translations.your_email[currentLang]}: ${formData.email}\n\n` +
            `${translations.your_message[currentLang]}:\n${formData.message}`
        );

        window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

        // Optional: Show an alert after opening the email client
        alert(translations.form_submitted_client[currentLang]); // Use a new translation for this
        
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">{translations.contact_title[currentLang]}</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>{translations.contact_info[currentLang]}</h3>
                        <p><i className="fas fa-phone"></i> <a href="tel:+213668429688">+213 (0) 668 42 96 88</a></p> {/* Phone clickable */}
                        <p><i className="fas fa-envelope"></i> <a href="mailto:med.djd@gmail.com">med.djd@gmail.com</a></p> {/* Email clickable */}
                        <p><i className="fab fa-linkedin"></i> <a href="https://linkedin.com/in/djeddi-med" target="_blank" rel="noopener noreferrer">linkedin.com/in/djeddi-med</a></p> {/* LinkedIn clickable */}
                        <p><i className="fab fa-github"></i> <a href="https://github.com/djeddi-med" target="_blank" rel="noopener noreferrer">github.com/djeddi-med</a></p> {/* GitHub clickable */}
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder=" " /* Changed to a space to ensure label floats */
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <label htmlFor="name">{translations.your_name[currentLang]}</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder=" " /* Changed to a space */
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <label htmlFor="email">{translations.your_email[currentLang]}</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                placeholder=" " /* Changed to a space */
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <label htmlFor="subject">{translations.subject[currentLang]}</label>
                        </div>
                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                placeholder=" " /* Changed to a space */
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor="message">{translations.your_message[currentLang]}</label>
                        </div>
                        <button type="submit" className="btn btn-primary">{translations.send_message[currentLang]}</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;