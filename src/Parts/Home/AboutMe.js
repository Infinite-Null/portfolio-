import React from 'react'
import "./AboutMe.css"
import LeftPart from '../../Compontents/AboutMe/LeftPart/LeftPart'
import Heading from '../../Compontents/Global/Heading/Heading'
import Image from "../../Images/coding-3d-render-icon-illustration-png.png"
import Image1 from "../../Images/534621.png"
import Image2 from "../../Images/20240214_163943_yellow.PORTRAIT.jpg"
import {motion} from "framer-motion";

export default function AboutMe() {
  return (
      <div className='AboutMemainContainer'>
          <Heading/>
          <div className='AboutMeLeftAndImage'>
              <LeftPart/>
              <div className={"AboutMeImageContainer"}>
                  <img className={"AboutMeMainImage"} src={Image2} alt={''}/>
                  <motion.img initial={{
                y:100,
                opacity:0
            }} whileInView={{
                y:0,
                opacity:1,
                transition:{duration:1,ease: [0.9, 0, 0.24, 1]}
            }} className={"AboutMeImage1"} src={Image} alt={''}/>
                  <motion.img initial={{
                y:100,
                opacity:0
            }} whileInView={{
                y:0,
                opacity:1,
                transition:{duration:0.5,ease: [0.9, 0, 0.24, 1]}
            }} className={"AboutMeImage2"} src={Image1} alt={''}/>
              </div>
          </div>
          <div className='BottomAboutME' />
      </div>
  )
}
