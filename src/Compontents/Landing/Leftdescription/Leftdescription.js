import React from 'react'
import "./Leftdescription.css"
import {motion} from "framer-motion";
export default function Leftdescription() {
  return (
    <motion.div className='mainLeftdescription' initial={{
          y:100,
          opacity:0
          }} animate={{
          y:0,
          opacity:1,
          transition:{delay:1,duration:0.5,ease: [0.9, 0, 0.24, 1]}
          }} 
      >
      <p>Hello 👋</p>
      <p className='description'><span>This is , &nbsp;</span>Ankit Kumar Shah</p>
      <p>A Tech Enthusiast 👨‍💻</p>
    </motion.div>
  )
}
