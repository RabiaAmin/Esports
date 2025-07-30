import React from 'react'

function NavBar() {
  return (
   <nav className='fixed bg-black/45 w-full flex itex-center justify-between py-5 px-5 md:px-10 left-0 top-0 z-20'>
    <div><h1 className='uppercase bold text-xl text-white bold font-general  '>GameZone</h1></div>
    <div className='hidden md:flex items-center space-x-8'>
       <a  className='text-white transition-colors duration-300 lowercasae bold font-general hover:text-primary'  href="#hero">home</a>
       <a className='text-white transition-colors duration-300 lowercasae bold font-general hover:text-primary'  href="#matches">Matches</a>
       <a className='text-white transition-colors duration-300 lowercasae bold font-general hover:text-primary'  href="#live">Live</a>
       <a  className='text-white transition-colors duration-300 lowercasae bold font-general hover:text-primary' href="#Scorboard">Scoreboard</a>
    </div>
   </nav>
  )
}

export default NavBar