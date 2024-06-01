import React from 'react'
import "./newsletter.css"


const newsletter = () => {
  const subscribe = ()=>{
    alert("Subscription added succedfully")
  }
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type='email' placeholder='Your Email ID'/>
        <h2>Please Subscribe for join us!!!!</h2>
        <button onClick={subscribe}>Subscribe</button>
      </div>
    </div>
  )
}

export default newsletter
