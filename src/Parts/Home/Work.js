import SkillsHeading from "../../Compontents/Skills/SkillsHeaing";
import {EachWork} from "../../Compontents/Skills/EachWork/EachWork";
import {motion} from "framer-motion";
import React from "react";
import {EachNavItem} from "../../Compontents/Landing/NavItems/NavItems";

export const Work = () => {
    return (
        <div style={{
            backgroundColor: 'rgb(37,36,36)',
            height: "100vh"
        }}>
            <SkillsHeading/>
            <motion.div className='HeadingHr' style={{
                height: '5px',
                backgroundColor: 'white',
                borderRadius: "20px",
                marginBottom:"20px"
            }} initial={{
                width: 0,
                opacity: 0
            }} whileInView={{
                width: "100vw",
                opacity: 1,
                transition: {duration: 1, ease: [0.9, 0, 0.24, 1]}
            }}/>
            <EachWork name={"Out of Kind"} showBottom={true} type={"MERN Stack"} image={"https://cdn.dribbble.com/users/6109291/screenshots/16411711/media/945b7e5f283b07b54d9fee03de1d7cc2.png?resize=400x300&vertical=center"}/>
            <EachWork name={"Out of Kind"} showBottom={true} type={"MERN Stack"} image={"https://cdn.dribbble.com/users/6109291/screenshots/16411711/media/945b7e5f283b07b54d9fee03de1d7cc2.png?resize=400x300&vertical=center"}/>
        </div>
    )
}
