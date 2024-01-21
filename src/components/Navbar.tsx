import { Menu } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='my-14 flex justify-between items-center'>
        <p className='text-3xl font-extrabold'>UrbanCasa</p>
        <nav className='hidden md:block lg:block lg:visible text-sm font-semibold  tracking-wide'>
          <div className='flex gap-10'>
            <p>Designs</p>
            <p>Collections</p>
            <p>Customization</p>
            <p>About</p>
            <p>Why work with us?</p>
          </div>
        </nav>
        <p className='hidden md:block lg:block border-b-2 py-1 border-black text-sm font-semibold'>Let&apos;s work together</p>
        <div className='visble md:hidden'><Menu/></div>
    </div>
  )
}

export default Navbar