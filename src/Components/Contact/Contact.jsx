import React from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef, useState, useContext } from "react";
import { ThemeContext } from "../../Context";

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dvqkiyq', 'template_yxbb4wh', form.current, 'nTszz5ILcsYMM4Be-')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <>
      <div className="contact-form" id="Contact">
        <div className="w-left">
          <div className="awesome">
            <span style={ darkMode ? {color: 'white'}: {color: "#242D49"}}>Get in touch</span>
            <span>Contact me</span>
            <div
              className="blur s-blur"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name" style={darkMode ? {background: "#313131"}:{background: "white"}}
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="Email" style={darkMode ? {background: "#313131"}:{background: "white"}}
            />
            <textarea name="message" className="user" placeholder="Message" style={darkMode ? {background: "#313131"}:{background: "white"}} />
            <input type="submit" value="Send" className="button" />
            <span>{done && "Thanks for contacting me"}</span>
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
