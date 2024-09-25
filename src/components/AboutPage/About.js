import React from "react";
import classes from "./About.module.css";
import Image from "next/image";
import web from "../../../public/assets/ui.jpg";
import ux from "../../../public/assets/ux.jpg";
import ui from "../../../public/assets/web.jpg";

const About = () => {
  return (
    <div className={classes.AboutWrapper}>
      <h4 className={classes.topText}>
      &quot;Clean code, powerful functionality, stunning design - that&apos;s my promise
        to every client.&quot;
      </h4>
      <div>
        {/* <h4 className={classes.servicesText}>Best Services</h4> */}
        <div className={classes.WebImage}>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div className={classes.ImageWeb}>
              <Image src={ui} alt="web icon" width={150} height={150} />
            </div>
            <p className={classes.webPText}>Website Design</p>
            <p
              style={{ width: "200px", textAlign: "center", fontWeight: "300" }}
            >
              Crafting beautiful, effective websites that represent your brand.
            </p>
          </div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div className={classes.ImageWeb}>
              <Image src={ux} alt="web icon" width={150} height={150} />
            </div>
            <p className={classes.webPText}>Graphic Design</p>
            <p
              style={{ width: "200px", textAlign: "center", fontWeight: "300" }}
            >
              Crafting beautiful, effective websites that represent your brand.
            </p>
          </div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div className={classes.ImageWeb}>
              <Image src={web} alt="web icon" width={150} height={150} />
            </div>
            <p className={classes.webPText}>Logo Design</p>
            <p
              style={{ width: "200px", textAlign: "center", fontWeight: "300" }}
            >
              Crafting beautiful, effective websites that represent your brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
