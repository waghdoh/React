import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Drop us a message below.</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="info-item">
                        <span className="icon">📍</span>
                        <div>
                            <h3>Our Office</h3>
                            <p>123 Culinary St, Foodie Valley, IN</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <span className="icon">📞</span>
                        <div>
                            <h3>Call Us</h3>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <span className="icon">✉️</span>
                        <div>
                            <h3>Email Us</h3>
                            <p>support@hungryheart.com</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn" disabled={submitted}>
                        {submitted ? "Message Sent!" : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
