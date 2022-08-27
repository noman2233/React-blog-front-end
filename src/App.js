import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/footer/Footer';

import Navbar from './components/Navbar/Navbar';
import BlogPost from './pages/BlogPost';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path='/blogpost/' element={<BlogPost />} />
          <Route path='/contact' element={<Contact />} />




        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App