import "./About.css"
import React from "react";
import SpaceBetween from "../../Layouts/SpaceBetween";
import Image from "../../Images/coding-3d-render-icon-illustration-png.png"
import Image1 from "../../Images/534621.png"
import Image2 from "../../Images/20240222_002644.png"
import {motion} from "framer-motion";
export const About = () => {
    return (
        <div className='AboutmainContainer'>
            <motion.p initial={{
                y:50,
                opacity:0
            }} whileInView={{
                y:0,
                opacity:1,
                transition:{duration:0.5,ease: [0.9, 0, 0.24, 1]}
            }} className={"FirstAboutMeLine"}>The joyful productivity app.</motion.p><motion.p initial={{
            y:50,
            opacity:0
        }} whileInView={{
            y:0,
            opacity:1,
            transition:{duration:0.5,ease: [0.9, 0, 0.24, 1]}
        }}
            className={"SecondAboutMeLine"}>Schedule time for todos,<br/> events, and contacts</motion.p>
            <SpaceBetween>
                <motion.button className={"AboutMoreButton"} initial={{
                    y: 60,
                }} whileInView={{
                    y: 0,
                    transition: {delay: 0, ease: [0.9, 0, 0.24, 1]}
                }}>
                    <p>About Me →</p>
                    <div>😁</div>
                </motion.button>
                <div className={"AboutImageContainer"}>
                    <img className={"AboutMainImage"} src={Image2} alt={''}/>
                    <motion.img initial={{
                        y: 100,
                        opacity: 0
                    }} whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {duration: 1, ease: [0.9, 0, 0.24, 1]}
                    }} className={"AboutImage1"} src={Image} alt={''}/>
                    <motion.img initial={{
                        y: 100,
                        opacity: 0
                    }} whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {duration: 0.5, ease: [0.9, 0, 0.24, 1]}
                    }} className={"AboutImage2"} src={Image1} alt={''}/>
                </div>
            </SpaceBetween>
            <div className='BottomAbout'/>
        </div>
    )
}
