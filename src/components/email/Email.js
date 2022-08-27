import React from 'react'
import "./email.css"

const Email = () => {
  return (
    <>
    <h1 className='subscribe_text'>Subscribe to our NewsLetter</h1>
    <div className='email'>
        <div className="input">
            <input type="text" placeholder='Your Email Address' className='email_input'/>
        </div>
        <div className="email_button">
            <button className="email_btn">Join Today</button>
        </div>
    </div>
    </>
  )
}

export default Email