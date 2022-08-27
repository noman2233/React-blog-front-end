import React from 'react'
import Email from '../components/email/Email'
import "./blogpost.css"
import { Posts } from '../db'

const BlogPost = () => {
console.log(Posts)
  


    return (
        <div className='blog_post'>
            <div className='blog_post_item'>
                <div className="blog_post_title">
          
                    <h1>The AGI hype train is running out of steam</h1>
                </div>

                <div className="blog_post_author">
                    <h3><small style={{ fontStyle: "italic" }}>Author - </small> Matt harry</h3>
                </div>
                <div className="blog_post_image">
                    <img src="https://qurno-nextjs.vercel.app/_next/image?url=%2Fimages%2Fblog%2F02.jpg&w=1200&q=75" alt="" />
                </div>
                <div className="blog_post_content">

                    <h2 style={{ margin: "40px auto" }}>The AGI hype train has hit some heavy traffic.</h2>
                    <p>While futurists and fundraisers used to make bullish predictions about artificial general intelligence, they’ve become quieter lately. Peter Thiel — the tech billionaire and rumored vampire — says Silicon Valley big brains have lost enthusiasm for AGI. “Elon’s not talking about it anymore and Larry Page is off to Fiji and doesn’t seem to be working on it quite as hard,” Thiel said at a recent event. While futurists and fundraisers used to make bullish predictions about artificial general intelligence, they’ve become quieter lately. Peter Thiel — the tech billionaire and rumored vampire — says Silicon Valley big brains have lost enthusiasm for AGI. IT is healing Can self-healing security software fight cybercrime? Thiel described Musk as “a weathervane for the zeitgeist,” who’s stopped talking about AGI because interest has declined. Scientists are also increasingly skeptical. A recent study paper posited that AGI is “in principle impossible,” while other researchers have mocked the term’s proponents. “I have yet to come across work on AGI that I can take seriously,” tweeted Abeba Birhane, a cognitive scientist based at University College Dublin. The path towards AGI increasingly appears — at best — a long one. Imbuing machines with human-like intelligence remains immensely challenging. As Melanie Mitchell, a computer science professor at Portland State University noted in a preprint paper published last year on arXiv:</p>
                </div>

            </div>
            <Email />
        </div>
    )
}

export default BlogPost