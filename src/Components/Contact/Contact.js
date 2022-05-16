import React, { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

import "./contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_aeh032d",
      "template_stp7fqh",
      form.current,
      "user_PRpBrb8i4FullJT2YayRd"
    );

    e.target.reset();
  };

  const [done, setDone] = useState(false)

  const thankYou = () => {
    if (window.pageYOffset > 4600) setDone(true)    
    else setDone(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", thankYou);
    return () => window.removeEventListener('scroll', thankYou)
  }, []);

  //  The Animation:
  const home = document.querySelector(".publish-heart");
  if (done) {
    const parentHeart = document.createElement("div");
    home.append(parentHeart);

    const createRandomHeart = setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "&#129505;";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s  `;

      parentHeart.append(heart);
    }, 70);

    setTimeout(() => {
      clearInterval(createRandomHeart);
    }, 2300);

    setTimeout(() => {
      parentHeart.remove();
    }, 5000);
  }

  //
  return (
    <section id="contact" className="publish-heart">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact-icon" />
            <h4>Email</h4>
            <h5>mohmmedsaidaker@gmail.com</h5>
            <a href="mailto:mohmmedsaidaker@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact-icon" />
            <h4>WhatsApp</h4>
            <h5>+970 595 574 723</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+972595572743"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact-icon" />
            <h4>Messenger</h4>
            <h5>Mohammed Said</h5>
            <a
              href="https://m.me/profile.php?id=100011819852336"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* End */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
      {/* <h5>all these methods are activated, so if there is any question, pleasee don't hesitate to contact me</h5> */}
    </section>
  );
};

export default Contact;
