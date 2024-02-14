import React from 'react'
import img from "../../Images/20240215_004439.png"

export default function Image() {
  return (
       <div style={{
          position:'absolute',
          bottom:0,
          width:'100vw',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          zIndex:'1'
        }}>
          <img src={img} alt='' style={{
            height:"50vw",
            width:"50vw",
            objectFit:"cover",
          }}/> 
        </div>
  )
}
