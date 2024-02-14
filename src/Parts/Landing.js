import React from 'react'
import Image from '../Compontents/Landing/Image'
import NavItems from '../Compontents/Landing/NavItems/NavItems'

export default function Landing() {
  return (
    <div style={{
        height:'100vh',
        backgroundColor:'#1f2029',
        position:'relative',
      }}>
        <Image/>
        <NavItems/>
      </div>
  )
}
