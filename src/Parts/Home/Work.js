import SkillsHeading from "../../Compontents/Work/SkillsHeaing";
import {EachWork} from "../../Compontents/Work/EachWork/EachWork";
import {motion} from "framer-motion";
import React from "react";
import "./Work.css"

export const Work = () => {
    return (
        <div style={{
            backgroundColor: 'rgb(30,30,35)',
            paddingBottom: "30px",
            position:"relative"
        }}>
            <SkillsHeading/>
            <EachWork name={"Out of Kind"} showBottom={true} type={"MERN Stack"}
                      image={"https://cdn.dribbble.com/users/6109291/screenshots/16411711/media/945b7e5f283b07b54d9fee03de1d7cc2.png?resize=400x300&vertical=center"}/>
            <EachWork name={"Out of Kind"} showBottom={true} type={"MERN Stack"}
                      image={"https://cdn.dribbble.com/users/6109291/screenshots/16411711/media/945b7e5f283b07b54d9fee03de1d7cc2.png?resize=400x300&vertical=center"}/>
            <EachWork name={"Out of Kind"} showBottom={true} type={"MERN Stack"}
                      image={"https://cdn.dribbble.com/users/6109291/screenshots/16411711/media/945b7e5f283b07b54d9fee03de1d7cc2.png?resize=400x300&vertical=center"}/>
            <motion.button className={"ViewAllButton"} initial={{
                y: 60,
            }} whileInView={{
                y: 0,
                transition: {delay: 0, ease: [0.9, 0, 0.24, 1]}
            }}>
                <p>View All →</p>
                <div>🧰</div>
            </motion.button>
            <div className={"h-20"}></div>
            <div className='BottomWork'/>
        </div>
    )
}
