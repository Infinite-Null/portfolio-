import React, { useEffect, useState } from 'react'
import "./BottomQuote.css"
import { jellyTriangle } from 'ldrs'

// Default values shown

export default function BottomQuote() {
    const [quote,setQuote] = useState([])
    const [loading,setLoading] = useState(false)
    jellyTriangle.register()
    async function getRandomQuote(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          setLoading(true)
          fetch("https://api.quotable.io/quotes/random", requestOptions)
            .then(response => response.json())
            .then(result => setQuote(result))
            .catch(error => console.log('error', error)).finally(()=>setLoading(false));
    }
    useEffect(()=>{
        getRandomQuote()
    },[])
    useEffect(()=>{
        console.log('====================================');
        console.log(quote[0]);
        console.log('====================================');
    },[quote])
  return (
    <div className='ButtomQuote'>
      {!loading && quote.length>0 && <>
        <p>
        {quote[0].content}    
        </p>
        <p>
            {`-${quote[0].author}`}
        </p>
      </>}
      {loading && <div className='ButtomQuoteLoading'><l-jelly-triangle
                size="30"
                speed="1.75" 
                color="white" 
                ></l-jelly-triangle>
                <span>Getting random quote</span>
                </div>}
    </div>
  )
}
