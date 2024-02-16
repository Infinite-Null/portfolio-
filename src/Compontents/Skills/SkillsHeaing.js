import React from 'react'
import "./SkillsHeading.css"
import {motion} from 'framer-motion'
export default function SkillsHeading() {
    return (
        <div className='HeadingMainContainer'>
            <motion.p initial={{
                y:250,
                opacity:0
            }} whileInView={{
                y:0,
                opacity:1,
                transition:{duration:0.5,ease: [0.9, 0, 0.24, 1]}
            }}>My <span>Work</span></motion.p>
            <motion.div className='HeadingHr' style={{
                height:'10px',
                backgroundColor:'white'
            }} initial={{
                width:0,
                opacity:0
            }} whileInView={{
                width:"100vw",
                opacity:1,
                transition:{duration:1,ease: [0.9, 0, 0.24, 1]}
            }}/>
        </div>
    )
}
