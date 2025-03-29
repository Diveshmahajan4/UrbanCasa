import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight 
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Shop',
      links: [
        { name: 'All Products', href: '/shop' },
        { name: 'Living Room', href: '/shop?category=living%20room' },
        { name: 'Bedroom', href: '/shop?category=bedroom' },
        { name: 'Office', href: '/shop?category=office' },
        { name: 'Dining', href: '/shop?category=dining' },
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', href: '#' },
        { name: 'Craftsmanship', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Design Process', href: '#' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Shipping & Returns', href: '#' },
        { name: 'Care Instructions', href: '#' },
      ]
    },
  ]

  return (
    <footer className="border-t border-gray-200 mt-auto pt-16 pb-8">
      <div className="px-8 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand and Description */}
          <div className="lg:col-span-2">
            <Link href="/">
              <h2 className="text-2xl font-bold mb-4">UrbanCasa</h2>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Crafting elegant, timeless furniture pieces designed for modern living. 
              Our commitment to quality materials and expert craftsmanship ensures furniture that lasts for generations.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-2 rounded-full border border-gray-200 hover:border-gray-400 transition-colors"
              >
                <Instagram size={18} className="text-gray-600" />
              </motion.a>
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-2 rounded-full border border-gray-200 hover:border-gray-400 transition-colors"
              >
                <Facebook size={18} className="text-gray-600" />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-2 rounded-full border border-gray-200 hover:border-gray-400 transition-colors"
              >
                <Twitter size={18} className="text-gray-600" />
              </motion.a>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to receive updates on new collections and special offers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 border border-gray-200 rounded-l-md focus:outline-none flex-1"
                aria-label="Email for newsletter"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="border-t border-gray-200 pt-8 pb-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
          <div className="flex items-center">
            <MapPin size={18} className="mr-2" />
            <span>123 Furniture Lane, Design District, CA 90210</span>
          </div>
          <div className="flex items-center">
            <Phone size={18} className="mr-2" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <Mail size={18} className="mr-2" />
            <span>hello@urbancasa.com</span>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} UrbanCasa. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-black transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer