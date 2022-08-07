import React from "react";
import "../styles/Contact.css";
import ContactImage from "../assests/salmon-contact.jpg";

function Contact(){
    return(
     <div className="contact">
       <div className="leftSide" style={{backgroundImage:`url(${ContactImage})`}}>

       </div>
        <div className="rightSide">
          <h1>Contact Us</h1>
          <form id="contact-form" method="POST">
              <label htmlFor="name">Fullname</label>
              <input type="text" name="name" placeholder="Enter your Fullname"/>
              <label htmlFor="email">Email</label>
              <input type="text" name="name" placeholder="Enter your Email" typeof="email" />
              <label htmlFor="message">Message</label>
              <textarea rows="7" placeholder="Enter your Message"></textarea>
              <button type="submit">Send Message</button>
          </form>
        </div>
     </div>
    );

}



export default Contact;