import React from 'react'
import './Rightdescription.css'
import { Typewriter } from 'react-simple-typewriter'
export default function Rightdescription() {
  return (
    <div className='mainRightdescription'>
    <p>I am 👀</p>
    <span>
    <Typewriter
            words={['Application Developer', 'Full Stack Developer', 'Inquisitive']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
    /> 
    </span>   
  </div>
  )
}
