import "./Footer.css"
import Image from "../../Images/20240215_004439.png"
import {motion} from "framer-motion";

export const Footer = () => {
    return (
        <div className={"mainFooterContainer"}>
            <motion.h1 initial={{
                y: 100,
                opacity: 0
            }} whileInView={{
                y:0,
                opacity: 1,
                transition: {duration: 0.8, ease: [0.9, 0, 0.24, 1]}
            }}  className={"ConnectText"}><img alt={"ankit"} src={Image} className={"FooterImage"}/>
                Let's Work<br/>
                <motion.span initial={{
                y:400,
                opacity: 0
            }} whileInView={{
                y:0,
                opacity: 1,
                transition: {delay:0.2,duration: 0.8, ease: [0.9, 0, 0.24, 1]}
            }} >Together</motion.span>
            </motion.h1>
            <motion.div  initial={{
                width: 0,
                opacity: 0
            }} whileInView={{
                width: "100%",
                opacity: 1,
                transition: {duration: 0.8, ease: [0.9, 0, 0.24, 1]}
            }} className={"h-1 bg-white mt-2 relative"}>
                <motion.button whileHover={{
                    backgroundColor: "#8167a9",
                    color: "white"
                }} initial={{
                    opacity: 0,
                    x:50
                }} whileInView={{
                    opacity: 1,
                    x:0,
                    transition: {delay:0.75,duration: 0.5, ease: [0.9, 0, 0.24, 1]}
                }}  className={"getInTouchButton"}>Get in touch</motion.button>
            </motion.div>
            <div className={"detailsContainer"}>
                <EachContactItem data={"+91 7478856289"} delay={0}/>
                <EachContactItem data={"ankit.kum.sha9933@gmail.com"} delay={0.1}/>
            </div>
            <div className={"mt-24"}>
                <motion.h6 initial={{
                    opacity: 0,
                    y:-50
                }} whileInView={{
                    opacity: 1,
                    y:0,
                    transition: {delay:0.5,duration: 0.5, ease: [0.9, 0, 0.24, 1]}
                }}  className={"text-gray-500 mb-2 font-bold"}>Socials</motion.h6>
                <div className={"flex gap-4 flex-wrap"}>
                   <EachSocial href={"#"} name={"Github"} delay={0.45}/>
                    <EachSocial href={"#"} name={"LinkedIN"} delay={0.55}/>
                    <EachSocial href={"#"} name={"Instagram"} delay={0.65}/>
                </div>
            </div>
        </div>
    )
}

function EachContactItem({data, delay}) {
    return <motion.p initial={{
        y: -20,
        opacity: 0
    }} whileInView={{
        y: 0,
        opacity: 1,
        transition: {delay, duration: 0.8, ease: [0.9, 0, 0.24, 1]}
    }} className={"EachFooterContact"}>{data}</motion.p>
}

function EachSocial({href,name,delay}) {
    return <motion.a
        initial={{
            opacity: 0,
            y:50
        }} whileInView={{
        opacity: 1,
        y:0,
        transition: {delay,duration: 0.5, ease: [0.9, 0, 0.24, 1]}
    }}
        href={href} className={"EachSocialFooter"}>{name}</motion.a>
}
