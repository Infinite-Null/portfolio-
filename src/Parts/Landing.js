import React from 'react'
import Image from '../Compontents/Landing/Image'
import GithubTop from '../Compontents/Landing/GithubTop/GithubTop'

export default function Landing() {
  return (
    <div style={{
        height:'100vh',
        backgroundColor:'rgb(235, 187, 143)',
        position:'relative',
      }}>
        <Image/>
        <GithubTop/>
      </div>
  )
}
