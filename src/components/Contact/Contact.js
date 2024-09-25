'use client'
import React, { useState } from "react";
import classes from "./Contact.module.css";
import { MdOutlineLightMode } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import ContactFrom from "../ContactForm/ContactFrom";

const Contact = () => {
  const [contactForm,setContactForm] = useState(false)
  return (
    <>
    <div className={classes.topContact}>
      <div>
        <h4 className={classes.pgT}>Got A Project In Mind?<br /> Let&apos;s Talk</h4>
      </div>
      <div>
        <div className={classes.HeroButton} onClick={() => setContactForm(!contactForm)}>
          <button className={classes.HireButton}>Available for projects</button>
          <button className={classes.ArrowButton}>
            {" "}
            <GoArrowUpRight />
          </button>
        </div>
      </div>

    </div>
    {contactForm &&   <ContactFrom />}
  
    </>
  );
};

export default Contact;
