import React from 'react'
import './Rightdescription.css'
import { Typewriter } from 'react-simple-typewriter'
import {motion} from "framer-motion";
export default function Rightdescription() {
  return (
    <motion.div className='mainRightdescription' initial={{
      y:100,
      opacity:0
      }} animate={{
      y:0,
      opacity:1,
      transition:{delay:1,duration:0.5,ease: [0.9, 0, 0.24, 1]}
      }} >
    <p>I am 👀</p>
    <span>
    <Typewriter
            words={['Application Developer', 'Full Stack Developer', 'Inquisitive']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
    /> 
    </span>   
  </motion.div>
  )
}
