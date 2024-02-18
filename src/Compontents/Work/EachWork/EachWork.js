import {motion} from "framer-motion";
import React from "react";
import "./EachWork.css"
export const EachWork = ({showTop,image,showBottom,name,type}) => {
    return (
        <div className={"EachWorkMainComponent"}>
            {showTop && <motion.div className='HeadingHr' style={{
                height: '2px',
                backgroundColor: 'white',
                borderRadius: "20px"
            }} initial={{
                width: 0,
                opacity: 0
            }} whileInView={{
                width: "90vw",
                opacity: 1,
                transition: {duration: 0.5, ease: [0.9, 0, 0.24, 1]}
            }}/>}
            <div className={"EachWorkComponent"}>
                <img src={image}  alt={""} className={"EachWorkComponentImage"}/>
                <motion.p initial={{
                    x:250,
                    opacity:0
                  }} whileInView={{
                    x:0,
                    opacity:1,
                    transition:{duration:0.5,ease: [0.9, 0, 0.24, 1]}
                  }} className={"ProjectName"}>
                    {name}
                </motion.p>
                <motion.p initial={{
                    x:-250,
                    opacity:0
                  }} whileInView={{
                    x:0,
                    opacity:1,
                    transition:{duration:0.5,ease: [0.9, 0, 0.24, 1]}
                  }} className={"Type"}>
                    {type}
                </motion.p>
            </div>
            {showBottom && <motion.div className='HeadingHr' style={{
                height: '2px',
                backgroundColor: 'white',
                borderRadius: "20px"
            }} initial={{
                width: 0,
                opacity: 0
            }} whileInView={{
                width: "90vw",
                opacity: 1,
                transition: {duration: 0.8, ease: [0.9, 0, 0.24, 1]}
            }}/>}
        </div>
    )
}
