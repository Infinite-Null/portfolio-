import React from 'react'
import Image from '../../Compontents/Landing/Image' 
import NavItems from '../../Compontents/Landing/NavItems/NavItems' 
import Leftdescription from '../../Compontents/Landing/Leftdescription/Leftdescription'
import Rightdescription from '../../Compontents/Landing/Rightdescription/Rightdescription'
import BottomQuote from "../../Compontents/Landing/BottomQuote/BottomQuote"
export default function Landing() {
  return (
    <div style={{
        height:'100vh',
        backgroundColor:'#1f2029',
        position:'relative',
      }}>
        <Image/>
        <NavItems/>
        <Leftdescription/>
        <Rightdescription/>
        <BottomQuote/>
      </div>
  )
}
