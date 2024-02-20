import React from 'react'
import Landing from '../Parts/Home/Landing'
import AboutMe from '../Parts/Home/AboutMe'
import {Work} from "../Parts/Home/Work";
import {About} from "../Parts/Home/About";

export default function Home() {
  return (
    <>
      <Landing/>
      {/*<AboutMe/>*/}
        <About/>
      <Work/>
    </>
  )
}
