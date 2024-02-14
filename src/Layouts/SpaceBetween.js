import React from 'react'

export default function SpaceBetween({children,style,type,height}) {
    if(height) return (
        <div style={{
            height: height,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            ...style,
        }}>
            {children}
        </div>
    )
    else if(type==='fit') return (
        <div style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            ...style,
        }}>
            {children}
        </div>
    )
    else return (
        <div style={{
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
