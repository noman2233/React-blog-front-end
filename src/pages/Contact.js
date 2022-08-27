import React from 'react'
import './contact .css'
const Contact = () => {
    return (
        <div className='Form'>
            <form action="" method="post">
                <div className="form_control">
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' />
                </div>
                <div className="form_control">
                    <label htmlFor="">Email</label>
                    <input type="text" name='email' placeholder='Enter Your Email' />
                </div>
                <div className="form_control">
                    <label htmlFor="">Enter Your Message</label>
                    <textarea name="" id="" cols="30" rows="5"  ></textarea>
                </div>
                <button className="submit" type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contact