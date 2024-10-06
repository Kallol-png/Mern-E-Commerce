import React from 'react'

const Footer = () => {
  return (
    <section className='pb-3'>
        <p className='text-center'>&copy; <a className='text-decoration-none text-muted' href="#">Kallol Mallcik</a> || {(new Date()).getFullYear()}</p>
    </section>
  )
}

export default Footer