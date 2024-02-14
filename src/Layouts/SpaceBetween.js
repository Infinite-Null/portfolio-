import React from 'react'

export default function SpaceBetween({children,style,type,height}) {
    if(height) return (
        <div style={{
            display:'flex',
            height: height,
            alignItems: 'center',
            justifyContent: 'space-between',
           flexDirection:'row',
            ...style,
        }}>
            {children}
        </div>
    )
    else if(type==='fit') return (
        <div style={{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            ...style,
        }}>
            {children}
        </div>
    )
    else return (
        <div style={{
            display:'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            ...style,
        }}>
            {children}
        </div>
    )
}
