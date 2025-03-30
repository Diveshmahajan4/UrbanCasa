"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const About = () => {
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

  // Team members data
  const team = [
    {
      name: 'Alex Thompson',
      role: 'Founder & Design Director',
      image: '/p1.jpg',
      bio: 'Alex founded UrbanCasa with a passion for combining modern aesthetics with functional design.'
    },
    {
      name: 'Madison Chen',
      role: 'Creative Director',
      image: '/p2.jpg', 
      bio: 'With 15+ years in furniture design, Madison ensures each piece meets our quality standards.'
    },
    {
      name: 'James Wilson',
      role: 'Production Manager',
      image: '/p4.jpg',
      bio: 'James oversees the crafting process, ensuring sustainable materials and ethical production.'
    },
    {
      name: 'Olivia Garcia',
      role: 'Customer Experience',
      image: '/p3.jpg', 
      bio: 'Olivia is dedicated to creating exceptional experiences for every UrbanCasa customer.'
    }
  ];

  // Values data
  const values = [
    {
      title: 'Craftsmanship',
      description: 'We believe in creating furniture that stands the test of time through exceptional craftsmanship and attention to detail.'
    },
    {
      title: 'Sustainability',
      description: 'Our commitment to the environment guides our material sourcing, production methods, and business practices.'
    },
    {
      title: 'Innovation',
      description: 'We continually explore new design approaches and manufacturing techniques to push the boundaries of furniture design.'
    },
    {
      title: 'Authenticity',
      description: 'Every piece tells a story and reflects our dedication to genuine materials and honest design principles.'
    }
  ];

  return (
    <main className="flex-1">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <Image 
          src="/image14.jpg" 
          alt="UrbanCasa workshop" 
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
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 md:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-semibold mb-8 text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Crafting Excellence Since 2010
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <p className="text-gray-700 mb-6">
                UrbanCasa was born from a simple belief: that furniture should balance form, function, and sustainability without compromise. Our founder, Alex Thompson, started the company after years of searching for furniture that met these criteria and coming up short.
              </p>
              <p className="text-gray-700 mb-6">
                What began as a small studio in 2010 has grown into a recognized name in contemporary furniture design, but our core values remain unchanged. Each piece is thoughtfully designed and meticulously crafted to enhance the spaces where you live, work, and gather.
              </p>
              <p className="text-gray-700">
                Today, our team of designers and master craftspeople work together to create furniture that will be cherished for generations, combining time-honored techniques with innovative approaches.
              </p>
            </motion.div>

            <motion.div 
              className="relative h-[400px]" 
              variants={fadeIn}
            >
              <Image 
                src="/image11.jpg" 
                alt="Furniture workshop" 
                fill 
                className="object-cover rounded-lg shadow-md"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="craftsmanship" className="py-16 sm:py-24 px-4 sm:px-8 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-semibold mb-4 text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>

          <motion.p 
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            These core principles guide everything we do, from design to delivery
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 sm:py-24 px-4 sm:px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-semibold mb-4 text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>

          <motion.p 
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            The talented individuals who bring our vision to life
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-[300px] w-full mb-6 overflow-hidden rounded-lg">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-gray-700 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-16 sm:py-24 px-4 sm:px-8 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Our Commitment to Sustainability</h2>
              <p className="text-gray-700 mb-6">
                At UrbanCasa, sustainability isn&apos;t just a buzzword—it&apos;s a fundamental part of our business model. We believe that beautiful furniture shouldn&apos;t come at the expense of our planet.
              </p>
              <p className="text-gray-700 mb-6">
                We source our materials from responsibly managed forests and suppliers who share our commitment to environmental stewardship. Our production processes are designed to minimize waste and reduce our carbon footprint.
              </p>
              <p className="text-gray-700 mb-6">
                For every piece of furniture sold, we contribute to reforestation efforts, helping to ensure that future generations will enjoy the natural beauty that inspires our designs.
              </p>
              <Link href="/shop">
                <button className="inline-flex items-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                  <span className="mr-2">Browse Sustainable Products</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
            </motion.div>

            <motion.div 
              className="relative h-[400px]" 
              variants={fadeIn}
            >
              <Image 
                src="/image8.jpg" 
                alt="Sustainable materials" 
                fill 
                className="object-cover rounded-lg shadow-md"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 md:px-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-semibold mb-6"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Experience the UrbanCasa Difference
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Discover our collection of thoughtfully designed furniture pieces that combine aesthetic excellence, functional design, and sustainable practices.
          </motion.p>
          
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Link href="/shop">
              <button className="inline-flex items-center bg-white text-black px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-medium">
                <span className="mr-2">Shop Our Collection</span>
                <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default About 