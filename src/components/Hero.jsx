import React from 'react'
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-cneter items-center flex-col'>
      <nav className='flex justify-between items-center flex-col'>
        <img src= {logo} alt = 'sumz logo' className='w-28 object-contain'/>

        <button type='button' onClick={()=>{
          window.open('https://github.com/Shubham126')
        }}>Github</button>
      </nav>
    </header>
  )
}

export default Hero
