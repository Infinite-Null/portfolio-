import React from 'react'
import './NavItems.css'
import SpaceBetween from '../../../Layouts/SpaceBetween'
import GithubTop from '../GithubTop/GithubTop'
export default function NavItems() {
  return (
    <SpaceBetween style={{
        poition:'absolute',
        zIndex:2,
    }}>
        <GithubTop/>
        <div style={{
            display:'flex',
            flexDirection:'row',
            gap:"30px",
            width:'fit-content',
            padding:'10px'
    }}>
        <EachNavItem name={"Work"}/>
        <EachNavItem name={"About"}/>
        <EachNavItem name={"Contact"}/>
    </div>
    </SpaceBetween>
  )
}

function EachNavItem({name}){
    return <p className='EachNavItem'>
        {name}
    </p>
}