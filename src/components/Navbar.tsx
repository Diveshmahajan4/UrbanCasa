import { Menu, X, ShoppingBag } from 'lucide-react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link'

const navLinks = [
  { name: 'Designs', href: '/shop' },
  { name: 'Collections', href: '/shop' },
  { name: 'Customization', href: '/support#contact' },
  { name: 'About', href: '/about' },
  { name: 'Support', href: '/support' }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <motion.div className='my-4 md:my-8 lg:my-14 flex justify-between items-center px-4 sm:px-8 md:px-20'
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "backInOut",
          duration: 1,
          delay: 0.6,
        }}
      >
        <Link href="/" className='text-xl sm:text-2xl md:text-3xl font-extrabold'>UrbanCasa</Link>
        
        {/* Desktop Navigation */}
        <nav className='hidden md:block text-sm font-semibold tracking-wide'>
          <div className='flex gap-5 lg:gap-10'>
            {navLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.href}
                className="hover:text-gray-700 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link href="/cart" className="hover:text-gray-700 transition-colors">
            <ShoppingBag size={20} />
          </Link>
          
          <Link 
            href="https://divesh.vercel.app/" 
            className='hidden md:block border-b-2 py-1 border-black text-sm font-semibold hover:border-gray-600 transition-colors'
          >
            Let&apos;s work together
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className='block md:hidden' 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-black" />
            ) : (
              <Menu size={24} className="text-black" />
            )}
          </button>
        </div>
      </motion.div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-50 flex flex-col pt-24 px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-6 text-lg font-medium">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    className="py-2 block border-b border-gray-100 hover:text-gray-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4"
              >
                <Link 
                  href="https://divesh.vercel.app/" 
                  className='inline-block border-b-2 py-1 border-black text-sm font-semibold'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let&apos;s work together
                </Link>
              </motion.div>
            </div>
            
            <div className="mt-auto mb-10">
              <p className="text-gray-500 text-sm">© {new Date().getFullYear()} UrbanCasa</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar