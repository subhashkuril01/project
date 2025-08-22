import React from "react";
import './ContactComponent.css'

const ContactComponent = () => {
  return (
    <section className="contact-us">
      <div className="row">
        <div className="contact-col">
          <div>
            <FontAwesomeIcon icon={faHome} className="icon" />
            <span>
              <h5>GT Road, Gulzar Group Of Institutes</h5>
              <p>Ludhiana, Punjab, IN</p>
            </span>
          </div>

           <div>
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <span>
            <h5>+91 6262172262</h5>
            <p>Monday to Saturday, 10AM to 6PM</p>
          </span>
          </div>

        <div>
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <span>
          <h5>info@eduford.com</h5>
          <p>Email us Your query</p>
        </span>
      </div>
      </div>

      <div className="contact-col">
        <form action="">
          <input type="text" placeholder="Enter Yours Name" />
          <input type="email" placeholder="Enter Yours Email" />
          <input type="text" placeholder="Enter Yours Subject" />
          <textarea rows="8" placeholder="Message" required></textarea>
          <button type="submit" className="hero-btn red-btn">
            Send Message
          </button>
        </form>
      </div>
      </div>
     
    </section>
  );
};

export default ContactComponent;
