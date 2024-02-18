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
                transition: {duration: 1, ease: [0.9, 0, 0.24, 1]}
            }}/>}
            <div className={"EachWorkComponent"}>
                <img src={image}  alt={""} className={"EachWorkComponentImage"}/>
                <p className={"ProjectName"}>
                    {name}
                </p>
                <p className={"Type"}>
                    {type}
                </p>
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
                transition: {duration: 1, ease: [0.9, 0, 0.24, 1]}
            }}/>}
        </div>
    )
}
