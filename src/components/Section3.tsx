import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 1,
    name: 'Living Room',
    description: 'Create a space that brings people together with our stunning living room collections.',
    image: '/image7.jpg',
    link: '/shop?category=living%20room'
  },
  {
    id: 2,
    name: 'Bedroom',
    description: 'Transform your bedroom into a serene retreat with our comfortable and stylish designs.',
    image: '/image9.jpg',
    link: '/shop?category=bedroom'
  },
  {
    id: 3,
    name: 'Office',
    description: 'Elevate your workspace with furniture that inspires productivity and creativity.',
    image: '/image8.jpg',
    link: '/shop?category=office'
  },
  {
    id: 4,
    name: 'Dining',
    description: 'Gather around beautifully crafted dining sets that make every meal an occasion.',
    image: '/image2.jpg',
    link: '/shop?category=dining'
  }
];

const Section3 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.17, 0.67, 0.83, 0.67],
        duration: 0.8,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-24 px-8 md:px-20 overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="max-w-screen-xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Explore Our Collections
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover furniture that perfectly balances form and function, 
            crafted with quality materials and timeless design principles.
          </motion.p>
        </div>

        {/* Category Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="group cursor-pointer overflow-hidden rounded-lg relative"
              variants={itemVariants}
            >
              <Link href={category.link}>
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                    <h3 className="text-2xl font-semibold mb-2 group-hover:translate-x-2 transition-transform duration-300">{category.name}</h3>
                    <p className="text-gray-200 mb-4 max-w-xs">{category.description}</p>
                    <motion.div 
                      className="flex items-center text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-2">Explore Collection</span>
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/shop">
              <button className="inline-flex items-center px-8 py-4 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                <span className="mr-2">View All Products</span>
                <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Section3 