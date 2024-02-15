import React from 'react'
import "./AboutMe.css"
import LeftPart from '../../Compontents/AboutMe/LeftPart/LeftPart'
import Heading from '../../Compontents/Global/Heading/Heading'
import Image from "../../Images/20240214_163943_yellow.PORTRAIT.jpg"
export default function AboutMe() {
  return (
    <div className='AboutMemainContainer'>
      <Heading/>
      <div className='AboutMeLeftAndImage'>
          <LeftPart/>
          <img src={Image} alt={''}/>
      </div>
      </div>
  )
}
