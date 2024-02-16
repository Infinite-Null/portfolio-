import React from 'react'
import "./AboutMe.css"
import LeftPart from '../../Compontents/AboutMe/LeftPart/LeftPart'
import Heading from '../../Compontents/Global/Heading/Heading'
import Image from "../../Images/WhatsApp Image 2024-02-15 at 3.35.03 PM.jpeg"
import {motion} from "framer-motion";

export default function AboutMe() {
  return (
      <div className='AboutMemainContainer'>
          <Heading/>
          <div className='AboutMeLeftAndImage'>
              <LeftPart/>
              <img src={Image} alt={''}/>
          </div>
          <div className='BottomAboutME' />
      </div>
  )
}
