import React from 'react'
import classes from './Footer.module.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={classes.topFooter}>
        <p>©2024 All Right Reserved</p>
        <div className={classes.iconDivs}>
        <FaXTwitter />
        <FaInstagram />
        <FaLinkedin />
        </div>

    </div>
  )
}

export default Footer