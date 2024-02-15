import React from 'react'
import "./Heading.css"
import {motion} from 'framer-motion'
export default function Heading() {
  return (
    <div className='HeadingMainContainer'>
      <motion.p initial={{
        y:250,
        opacity:0
      }} whileInView={{
        y:0,
        opacity:1,
        transition:{duration:0.5,ease: [0.9, 0, 0.24, 1]}
      }}>About Me</motion.p>
      <div className='HeadingHr'/>
    </div>
  )
}
