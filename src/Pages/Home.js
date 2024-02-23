import React from 'react'
import Landing from '../Parts/Home/Landing'
import {Work} from "../Parts/Home/Work";
import {About} from "../Parts/Home/About";
import {Skills} from "../Parts/Home/Skills";
import {Footer} from "../Parts/Home/Footer";

export default function Home() {
  return (
    <>
      <Landing/>
        <About/>
      <Work/>
      <Skills/>
        <Footer/>
    </>
  )
}
