import React from 'react'
import classes from './Brand.module.css'
import { IoFlashOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import { SiVorondesign } from "react-icons/si";
import { SiAppwrite } from "react-icons/si";

const Brand = () => {
  return (
    <div className={classes.topBrand}>
        <div className={classes.textDiv}>
            <h4 className={classes.brandText}>Boost your brand with my extensive expertise in <span>coding</span></h4>
            <IoFlashOutline className={classes.flasIcon}/>
        </div>
        <div className={classes.details}>
            <div className={classes.textTop}>
                <div><MdOutlineWeb style={{marginRight:20,fontSize:28}}/></div>
                <div>
                    <h4 className={classes.descText}>Web development</h4>
                    <p className={classes.descD}>Crafting beautiful, effective websites that represent your brand.</p>
                </div>
            </div>
            <div className={classes.textTop}>
                <div className={classes.midImg}><SiVorondesign /></div>
                <div >
                    <h4 className={classes.descTextG}>Graphic Design</h4>
                    <p className={classes.descDG}>Creating visually compelling designs that communicate your message and captivate your audience.</p>
                </div>
            </div>
            <div className={classes.textTop}>
                <div><SiAppwrite style={{marginRight:20,fontSize:28}}/></div>
                <div>
                    <h4 className={classes.descText}>Logo Design</h4>
                    <p className={classes.descD}>Designing memorable logos that capture the essence of your brand and make a lasting impression.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brand