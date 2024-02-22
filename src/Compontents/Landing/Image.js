import React from 'react'
import img from "../../Images/20240215_004439.png"
import "./Image.css"
export default function Image() {
  return (
       <div className={"MainLandingImage"} >
          <img src={img} alt='' className={"ImageLanding"}/>
        </div>
  )
}
