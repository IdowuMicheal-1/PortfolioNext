import React from "react";
import classes from "./ContactForm.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const ContactFrom = () => {
  return (
    <div className={classes.contactFormTop}>
      <h4 className={classes.contFText}>Contact</h4>
      <div className={classes.formDiv}>
        <div className={classes.formOne}>
          <h4 className={classes.talkPrj}>Let's Talk For Your Next Projects</h4>
          <p className={classes.subText}>
            Your project deserves the best. Let’s bring your ideas to life with
            innovative solutions. Together, we can make it happen!
          </p>
          <div className={classes.divIn}>
            <div className={classes.locDiv}>
              <div className={classes.loctionStyle}>
                <IoLocationSharp />
              </div>
              <div>
                <h4 className={classes.text}>Address</h4>
                <p>Lagos State, Nigeria</p>
              </div>
            </div>
            <div className={classes.locDiv}>
              <div className={classes.loctionStyle}>
                <MdOutlineMail />
              </div>
              <div>
                <h4>Email Address</h4>
                <p>idowumicheal506@gmail.com</p>
              </div>
            </div>
            <div className={classes.locDiv}>
              <div className={classes.loctionStyle}>
                <FaPhoneAlt />
              </div>
              <div>
                <h4>Phone number</h4>
                <p>(+234) 7038618692</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.ctForm}>
          {/* Fprm */}

          <div>
            <input
              type="text"
              placeholder="Your Name"
              className={classes.nameInput}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={classes.nameInput}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Phone"
              className={classes.nameInput}
            />
            <input
              type="text"
              placeholder="Subject"
              className={classes.nameInput}
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              cols={30}
              rows={9}
              className={classes.textMessage}
            ></textarea>
          </div>
          <div className={classes.HeroButton}>
            <button className={classes.HireButton}>Submit</button>
            <button className={classes.ArrowButton}>
              {" "}
              <GoArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
