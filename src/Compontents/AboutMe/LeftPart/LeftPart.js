import React from 'react'
import "./LeftPart.css"
import TextAnimation from "../../../Layouts/TextAnimation";
import {motion} from 'framer-motion'
export default function LeftPart() {
  return (
    <div className='AboutMeLeftPartMainContainer'>
        <TextAnimation phrase={'An enthusiastic student who likes coding lengthy scripts to creatively solve strange problems. When I get free time, I enjoy spending that time designing and creating website. I am really passionate about tech and learning new programming languages and I love to develop new things like some program and website For now, I am practicing web development while also learning flutter to develop mobile applications, with a desire to be a skilled software developer.'}/>
       <motion.button initial={{
           y:60,
       }} whileInView={{
           y:0,
           transition:{delay:0,ease: [0.9, 0, 0.24, 1]}
       }}>
          <p>About Me →</p>
          <div>😁</div>
      </motion.button>
    </div>
  )
}
