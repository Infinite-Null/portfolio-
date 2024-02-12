import React, { useCallback, useRef, useState } from 'react'
import Dragable from './Dragable';
import "../App.css"

export default function MainScreen({children}) {
  
 const onClick = useCallback((id)=>{
    setClickedId(id)
 },[])
  const[clickedId,setClickedId] = useState(1)
  const [stack,setStack] = useState([
    {id:1},
    {id:2}
  ])
  const containerRef = useRef(null);
  return (
    <main>
     <div ref={containerRef} className="container">
      {stack.map((e,i)=>{
        if(clickedId===e.id){
          return <Dragable containerRef={containerRef} onClick={onClick} id={e.id} zindex={'99999'} key={i}>
          <img src='https://upload.wikimedia.org/wikipedia/en/0/07/Windows_File_Explorer_25.png' width={400} height={400}></img>
        </Dragable>
        }
        else {
          return <Dragable containerRef={containerRef} onClick={onClick} id={e.id} zindex={'9999'} key={i}>
          <img src='https://upload.wikimedia.org/wikipedia/en/0/07/Windows_File_Explorer_25.png' width={400} height={400}></img>
        </Dragable>
        }
      })}
     
      <button onClick={()=>{
          const temp = [...stack]
          temp.push({id:stack.length+1})
          setStack(temp)
      }}>Click Me</button>
      </div>
    </main>
  )
}
