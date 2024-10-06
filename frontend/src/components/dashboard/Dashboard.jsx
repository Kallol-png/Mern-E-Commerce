import React from 'react'
import Navbar from '../shared/navbar/Navbar'
import Footer from '../shared/footer/Footer'

const Dashboard = () => {
  return (
    <section className='bg-brand bg-brand-container'>
        <Navbar/>
        <div className="container mt-5">
          <h1 className='fs-4'>Dashboard</h1>
        </div>
        <Footer/>
    </section>
  )
}

export default Dashboard