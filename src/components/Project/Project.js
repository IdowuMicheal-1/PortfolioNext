import Image from 'next/image'
import React from 'react'
import image from '../../../public/assets/images.png'
import classes from './Project.module.css'
import Link from 'next/link'

const Project = () => {
  return (
    <div className={classes.topProject}>
        <div>
            <h4 className={classes.topE}>Explore My Recent Project</h4>
            <div className={classes.projectDIv}>
                <div className={classes.prjD}>
                <Image src={image} alt='E-commere'  />
                </div>
                <div className={classes.prjLink}>
                    <h4>E-commerce Project</h4>
                    <button  className={classes.link}><Link href='https://tim-care-ecommerce.vercel.app/'>Live Link</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project