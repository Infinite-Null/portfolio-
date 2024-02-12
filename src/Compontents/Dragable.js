import React, { memo, useEffect, useRef } from 'react'
import "../App.css"
function Dragable({children,zindex,onClick,id,containerRef}) {
  console.log("render")
  const boxRef = useRef(null);
  const isClicked = useRef(false);
  const coords = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0
  })
  useEffect(() => {
    if (!boxRef.current || !containerRef.current) return;

    const box = boxRef.current;
    const container = containerRef.current;


    const onMouseDown = (e) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    }

    const onMouseUp = (e) => {
      isClicked.current = false;
      coords.current.lastX = box.offsetLeft;
      coords.current.lastY = box.offsetTop;
    }

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    }

    box.addEventListener('mousedown', onMouseDown);
    box.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseUp);

    const cleanup = () => {
      box.removeEventListener('mousedown', onMouseDown);
      box.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseUp);
    }

    return cleanup;
  }, [])
  return (
    <div ref={boxRef} style={{
      zIndex:zindex
    }} className="box" onClick={()=>{
      onClick(id)
    }}>
      <h1 style={{
        position:'absolute',
        top:-35,
        fontSize:15,
        right:8,
        backgroundColor:'rgb(214, 118, 118)',
        borderRadius:100,
        color:'white',
        width:'20px',
        textAlign:'center',
        fontWeight:'100',
      }}>x</h1>
      <h1 style={{
        position:'absolute',
        top:-35,
        fontSize:15,
        right:35,
        backgroundColor:'rgb(118, 163, 214)',
        borderRadius:100,
        color:'white',
        width:'20px',
        textAlign:'center',
        fontWeight:'100',
      }}>[]</h1>
         {children}   
     </div>
  )
}
export default memo(Dragable)