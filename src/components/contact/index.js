import React from 'react';
import Header from '../header/header';
import './index.css'

function ContactUsForm() {

  const contactSubmit=(event)=>{
    const textBox=document.getElementById("i5vyy-6")
    textBox.value=""
    alert("We will look after your query .......thankyou")
  }

  return (
    <>
    <Header/>
   <div className="contact_us_green">
      <div className="responsive-container-block big-container">
        <div className="responsive-container-block container">
          {/* Contact Form Column */}
          <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b-2">
            <form className="form-box">
              <div className="container-block form-wrapper">
                <div className="head-text-box">
                  <p className="text-blk contactus-head">Contact us</p>
                  <p className="text-blk contactus-subhead">
                  Get in touch using our contact form. We welcome your questions, feedback, and inquiries. Our team is dedicated to providing swift responses and helpful assistance. Reach out now for effective communication and support
                  </p>
                </div>
                {/* Input Fields */}
                <div className="responsive-container-block">
                  {/* ... First Name, Last Name, Email, Phone Number input fields ... */}
                  {/* Text Area */}
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-6">
                    <p className="text-blk input-title">WHAT DO YOU HAVE IN MIND</p>
                    <textarea className="textinput" id="i5vyy-6" placeholder="Please enter query..."></textarea>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="btn-wrapper">
                  <button onClick={contactSubmit} className="submit-btn">Submit</button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Details Column */}
          <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10" id="ifgi">
            <div className="container-box">
              <div className="text-content">
                <p className="text-blk contactus-head">Contact us</p>
                <p className="text-blk contactus-subhead">
                Get in touch using our contact form. We welcome your questions, feedback, and inquiries. Our team is dedicated to providing swift responses and helpful assistance. Reach out now for effective communication and support
                </p>
              </div>
              {/* Contact Details */}
              <div className="workik-contact-bigbox">
                <div className="workik-contact-box">
                  {/* Phone */}
                  <div className="phone text-box">
                    <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg" alt="Phone Icon" />
                    <p className="contact-text">+91 6301912774</p>
                  </div>
                  {/* Address */}
                  <div className="address text-box">
                    <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg" alt="Address Icon" />
                    <p className="contact-text">iamsrinath5255@gmail.com</p>
                  </div>
                  {/* Mail */}
                  <div className="mail text-box">
                    <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg" alt="Mail Icon" />
                    <p className="contact-text">Maisammaguda,Hyderabad 50004</p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactUsForm;