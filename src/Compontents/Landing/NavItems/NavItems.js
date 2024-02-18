import React from 'react'
import './NavItems.css'
import SpaceBetween from '../../../Layouts/SpaceBetween'
import GithubTop from '../GithubTop/GithubTop'
export default function NavItems() {
  return (
    <SpaceBetween style={{
        poition:'absolute',
        zIndex:2,
        paddingRight:"10px"
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

export function EachNavItem({name}){
    return <p className='EachNavItem'>
        {name}
    </p>
}
