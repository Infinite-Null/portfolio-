import React from 'react'
import {motion} from "framer-motion";

export default function TextAnimation({phrase}) {

    return (
        <>
            {
                phrase.split(" ").map((e,i)=> {
                    return <motion.span key={i} style={{
                        display: "inline-block"
                    }} initial={{
                        y: 70,
                        opacity: 0
                    }} whileInView={{
                        y: 0, opacity: 1, transition: {duration: 0.5, delay: 0.003}
                    }}>{e}  &nbsp;</motion.span>
                })
            }
        </>
    )
}
