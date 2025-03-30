"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, Plus, Minus, Truck, Package, RefreshCw, Clock, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react'
import Link from 'next/link'

const Support = () => {
  // State for FAQ accordion
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // FAQ data
  const faqs = [
    {
      question: 'How long will it take to receive my order?',
      answer: 'Delivery times vary depending on your location and the items purchased. Most in-stock items ship within 3-5 business days, with delivery typically taking an additional 5-10 business days. Custom and made-to-order pieces may take 4-8 weeks to produce before shipping. You will receive tracking information once your order ships.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items in their original condition. Custom pieces and sale items may have different return terms. Please review our full return policy for details. Return shipping costs are the responsibility of the customer unless the item arrived damaged or incorrect.'
    },
    {
      question: 'Do you offer assembly services?',
      answer: 'Yes, we offer professional white-glove delivery and assembly for an additional fee. This service includes delivery to your room of choice, assembly, and removal of all packaging materials. You can select this option during checkout.'
    },
    {
      question: 'How do I care for my furniture?',
      answer: 'Care instructions vary by material. We include specific care guidelines with each product. Generally, wood pieces should be dusted regularly and treated with appropriate wood care products. Upholstered items may require professional cleaning. For detailed care instructions for your specific purchase, please refer to the product documentation or contact our customer service team.'
    },
    {
      question: 'Can I customize my furniture?',
      answer: 'Many of our pieces can be customized with different fabrics, finishes, or dimensions. Products that offer customization will indicate available options on their product page. For special requests beyond our standard customization options, please contact our design team for a consultation.'
    },
    {
      question: 'What happens if my furniture arrives damaged?',
      answer: 'If your furniture arrives damaged, please document the damage with photos and contact our customer service team within 48 hours of delivery. We will work quickly to resolve the issue with a replacement, repair, or refund depending on the situation and your preference.'
    }
  ];

  // Shipping info data
  const shippingInfo = [
    {
      icon: <Truck size={24} className="mb-4" />,
      title: 'Free Shipping',
      description: 'Free standard shipping on orders over $200 within the continental US.'
    },
    {
      icon: <Package size={24} className="mb-4" />,
      title: 'White Glove Delivery',
      description: 'Available for larger items with in-home placement and assembly.'
    },
    {
      icon: <RefreshCw size={24} className="mb-4" />,
      title: 'Easy Returns',
      description: '30-day returns on most items. Custom orders may have different terms.'
    },
    {
      icon: <Clock size={24} className="mb-4" />,
      title: 'Estimated Delivery',
      description: '5-15 business days for in-stock items. 4-8 weeks for custom pieces.'
    }
  ];

  return (
    <main className="flex-1">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <Image 
          src="/image2.jpg" 
          alt="UrbanCasa Customer Support" 
          fill 
          priority
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Customer Support
          </motion.h1>
        </div>
      </section>

      {/* Support Navigation */}
      <section className="py-12 px-4 sm:px-8 md:px-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a href="#faq" className="px-4 py-2 text-gray-700 hover:text-black hover:underline transition-colors">
              FAQ
            </a>
            <a href="#shipping" className="px-4 py-2 text-gray-700 hover:text-black hover:underline transition-colors">
              Shipping & Returns
            </a>
            <a href="#care" className="px-4 py-2 text-gray-700 hover:text-black hover:underline transition-colors">
              Product Care
            </a>
            <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-black hover:underline transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 px-4 sm:px-8 md:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-semibold mb-4 text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p 
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Find answers to our most commonly asked questions
          </motion.p>

          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                variants={fadeIn}
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  {openFAQ === index ? (
                    <Minus size={20} className="flex-shrink-0 ml-4" />
                  ) : (
                    <Plus size={20} className="flex-shrink-0 ml-4" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6 text-gray-700">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Shipping & Returns Section */}
      <section id="shipping" className="py-16 sm:py-24 px-4 sm:px-8 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-semibold mb-4 text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Shipping & Returns
          </motion.h2>

          <motion.p 
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Everything you need to know about our shipping and return policies
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shippingInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm text-center"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center text-gray-800">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Link href="#">
              <button className="inline-flex items-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                <span className="mr-2">Read Full Shipping & Return Policy</span>
                <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product Care Section */}
      <section id="care" className="py-16 sm:py-24 px-4 sm:px-8 md:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative h-[400px] md:order-2" 
              variants={fadeIn}
            >
              <Image 
                src="/image8.jpg" 
                alt="Furniture care" 
                fill 
                className="object-cover rounded-lg shadow-md"
              />
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Product Care</h2>
              <p className="text-gray-700 mb-6">
                Proper care and maintenance will extend the life of your UrbanCasa furniture and keep it looking beautiful for years to come. Each piece comes with specific care instructions tailored to its materials and construction.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>For wood furniture:</strong> Dust regularly with a soft, dry cloth. Clean spills immediately with a slightly damp cloth and dry thoroughly. Use coasters and placemats to protect surfaces from heat and moisture.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>For upholstered items:</strong> Vacuum regularly using low suction. Treat spills immediately by blotting (not rubbing) with a clean, dry cloth. Professional cleaning is recommended for stubborn stains.
              </p>
              <Link href="#">
                <button className="inline-flex items-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                  <span className="mr-2">Download Care Guides</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-semibold mb-4 text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>

          <motion.p 
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Our customer service team is here to help with any questions or concerns
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="mr-4 mt-1 text-gray-700" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Mon-Fri, 9am-6pm ET</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 mt-1 text-gray-700" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">support@urbancasa.com</p>
                    <p className="text-gray-500 text-sm">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-4 mt-1 text-gray-700" size={20} />
                  <div>
                    <p className="font-medium">Visit Our Showroom</p>
                    <p className="text-gray-600">123 Furniture Lane</p>
                    <p className="text-gray-600">Design District, CA 90210</p>
                    <p className="text-gray-500 text-sm">Open daily 10am-7pm</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full border border-gray-200 hover:border-gray-400 transition-colors"
                >
                  <Instagram size={20} className="text-gray-600" />
                </motion.a>
                <motion.a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full border border-gray-200 hover:border-gray-400 transition-colors"
                >
                  <Facebook size={20} className="text-gray-600" />
                </motion.a>
                <motion.a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full border border-gray-200 hover:border-gray-400 transition-colors"
                >
                  <Twitter size={20} className="text-gray-600" />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order Number (Optional)
                  </label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Support 