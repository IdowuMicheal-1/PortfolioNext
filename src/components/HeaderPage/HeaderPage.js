import React from "react";
// import { useRef, useEffect } from 'react';
import Image from "next/image";
import whatsapp from "../../../public/assets/whatsapp.png";
import twitter from "../../../public/assets/twitter2.jpg";
import illust from "../../../public/assets/illust.png";
import logo from "../../../public/assets/logo.svg"
import { MdOutlineLightMode } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import classes from "./HeaderPage.module.css"
import { GiHamburgerMenu } from "react-icons/gi";

const HeaderPage = () => {

  return (
    <div className={classes.wrapper}>
      <div className={classes.HeaderTop}>
        <div className={classes.LogoWrapper}><Image src={logo} alt="logo" width={35} height={35}/></div>
        <div className={classes.HeaderNav}>
          <ul className={classes.LinkWrapper}>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={classes.IconWrapper}>
        <MdOutlineLightMode />
          <Image
            src={whatsapp}
            alt="Link to whatsapp profile"
            width={30}
            height={30}
          />
          <Image
            src={twitter}
            alt="Link to twitter profile"
            width={30}
            height={30}
          />
        </div>
        <GiHamburgerMenu className={classes.hambuger}/>
      </div>
      <div className={classes.WrapperTwo}>
        <div>
          <div className={classes.TextWrapper}>
            <h4 className={classes.HeroText}>
              <span className={classes.TextSpan}>Introducing</span><br/>
              Idowu Micheal, a passionate front-end developer</h4>
          </div>
          <div className={classes.HeroButton}>
            <button className={classes.HireButton}>Hire Me</button>
            <button className={classes.ArrowButton}>
              {" "}
              <GoArrowUpRight />
            </button>
          </div>
        </div>
        <div className={classes.HeroImage}>
          <Image src={illust} alt="hero" quality={100} placeholder="blur" height={450} width={450} />
          <p className={classes.OpenText}>OPEN TO WORK *</p>
          <small className={classes.OpenSub}>Innovating web solutions</small>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
