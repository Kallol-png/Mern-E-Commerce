import React from 'react'
import './Home.css'
import Navbar from '../shared/navbar/Navbar'
import Hero from '../shared/navbar/hero/Hero'
import TopProducts from '../topProducts/TopProducts'
import Footer from '../shared/footer/Footer'


const Home = () => {
  return (
    <div className='bg-brand bg-brand-container'>
        <Navbar/>
        <div style={{maxHeight:'400px'}} className='container hero-container my-5'>
        <Hero/>
        </div>
        <div className='container'>
          <TopProducts/>
        </div>        
        <Footer/>
        
    </div>
  )
}

export default Home