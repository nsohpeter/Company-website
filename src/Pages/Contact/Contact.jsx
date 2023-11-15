import React, { useState, useRef } from "react";
import "./Contact.css";
import { contactInfo } from "../../Utils/Data";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  //template_reguwda
  //service_13dprtg

  // HDaG1vjWci2yJDNMk

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_13dprtg",
        "template_reguwda",
        {
          from_name: formData.fullName,
          to_name: "peter",
          from_email: formData.email,
          to_email: "apiahpetertoch@gmail.com",
          subject: formData.subject,
          message: formData.message,
        },
        "HDaG1vjWci2yJDNMk"
      )
      .then(
        () => {
          setLoading(false);
          alert("thankyou for contacting.");
          setFormData({
            fullName: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
          alert("oops!, something went wrong");
        }
      );
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
                <div className="contactDetail-text">
                  <h3>{title}</h3>
                  <p>{value}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="contact-form">
          <h2>Send me a message</h2>
          <form action="" ref={form} onSubmit={handleSubmit}>
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
