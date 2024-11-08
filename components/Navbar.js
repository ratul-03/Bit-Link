import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white '>
        <div className="logo font-bold text-2xl"> 
          <Link href="/">BitLinks</Link>
        </div>
        <ul className='flex justify-center gap-4 items-center'>
          <Link className='transition-all duration-300 hover:font-bold' href="/"><li>Home</li></Link>
          <Link className='transition-all duration-300 hover:font-bold' href="/about"><li>About</li></Link>
          <Link className='transition-all duration-300 hover:font-bold' href="/shorten"><li>Shorten</li></Link>
          <Link className='transition-all duration-300 hover:font-bold' href="/contact"><li>Contact Us</li></Link>
          <li className='flex gap-3'>
            <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-2 font-bold'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-2 font-bold'>GitHub</button></Link>
          </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar