import React from 'react';

const ContactForm = () => {
  return (
    <div className="container-contact">
      <div className="content">
        <div className="left-side">
          <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">Building 5, Nagole</div>
            <div className="text-two">Hyderabad</div>
          </div>
          <div className="Phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+91 7731995185</div>
            <div className="text-two">+91 8309433815</div>
            <div className="text-three">+91 8106489338</div>
          </div>
          <div className="Email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">mentalhealth24@gmail.com</div>
            <div className="text-two">info.mentalhealth@gmail.com</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Send us a message</div>
          <p>If you have any queries you can send us a message here</p>
        </div>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="input-box message-box">
            <textarea></textarea>
          </div>
          <div className="button">
            <input type="button" value="Send Now" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;