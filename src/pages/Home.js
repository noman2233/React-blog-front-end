import React from 'react'
import Email from '../components/email/Email'
import PostItem from '../components/postItem/PostItem'
import Slider from '../components/slider/Slider'

const Home = () => {
  return (
    <div>
      <Slider />
      <PostItem />
      <Email />

    </div>
  )
}

export default Home