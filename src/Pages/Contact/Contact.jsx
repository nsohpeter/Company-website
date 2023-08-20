import React, { useState } from "react";
import "./Contact.css";
import { contactInfo } from "../../Utils/Data";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access the form data using the formData object
    //console.log("Form submitted:", formData);
    // Reset form fields
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div className="main-contact-conatainer">
      <h2 style={{ textAlign: "center" }}>Contact Me</h2>
      <div className="content">
        <div className="contact-info">
          {contactInfo.map((contact, index) => {
            const { Icon, title, value } = contact;
            return (
              <div key={index} className="contact-datail">
                <div className="icon">{<Icon />}</div>
                <div className="detail-text">
                  <h3>{title}</h3>
                  <p>{value}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="contact-form">
          <h2>Send me a message</h2>
          <form action="">
            <input
              type="text"
              id="fullName"
              placeholder="full name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="subject"
              placeholder="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              id="message"
              name="message"
              placeholder="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
