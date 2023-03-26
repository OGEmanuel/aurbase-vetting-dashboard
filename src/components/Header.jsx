import React from 'react'
import SwitchToggle from './SwitchToggle'
import Bell from '../assets/bell.png'
import Logo from '../assets/Images/Mobile-logo.png'
import Menu from '../assets/menu.png'
const Header = ({title}) => {
  return (
    <div className='flex justify-between items-center pt-8 '>
        {/* desktop header */}
        <p className='hidden md:block font-bold text-[40px]'>{title}</p>
        <div className='hidden md:flex gap-10 items-center'>
           
        <span> <SwitchToggle/> </span>
        <span><img src={Bell} alt="bell" /></span>
        </div>
        {/* mobile header */}
        <div className='flex items-center gap-4 md:hidden'>
                <span><img src={Menu} alt="menu" /></span>
                <span><img src={Logo} alt="logo" /></span>
            </div>
            <div className='flex items-center gap-2.5 md:hidden'>
            <span className='block w-1/2'> <SwitchToggle/> </span>
        <span className='block w-1/3'><img src={Bell} alt="bell" /></span>

            </div>
    </div>
  )
}

export default Header