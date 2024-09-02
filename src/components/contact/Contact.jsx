import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      return toast.error("Please complete the form above");
    }

    setLoading(true);

    // You can implement your own logic here to handle form submission
    console.log("Form submitted:", { name, email, subject, message });

    setLoading(false);
    toast.success(`Form submitted successfully.`);
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">
            👋 Let’s connect! Whether you want to discuss a project,
            collaborate, or just chat about tech, I’m all ears.
          </h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        <form
          onSubmit={submitHandler}
          className="contact__form"
          action="https://formspree.io/f/xpwanagk"
          method="POST"
        >
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="name"
                name="name"
                className="contact__form-input"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="subject"
              name="email"
              className="contact__form-input"
              placeholder="Enter your subject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        <ToastContainer position="bottom-right" theme={props.theme} />
      </div>
    </section>
  );
};

export default Contact;
