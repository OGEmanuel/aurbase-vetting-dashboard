import React from 'react'

const Footer = () => {
    const date=new Date()
    const year=date.getFullYear()
  return (
    <div className='flex gap-6 md:justify-between text-sm md:text-lg font-semibold'>
        <p className='hidden md:block'>© {year} Aurbase Technologies inc</p>
      <p  className='md:hidden'>  © {year} Aurbase inc </p>
        <span className='flex gap-5'>
            <p>Privacy & Policy</p>
            <p className='hidden md:block'>Terms & Conditions</p>
            <p className='hidden md:block'>Code of Conduct</p>
        </span>
    </div>
  )
}

export default Footer