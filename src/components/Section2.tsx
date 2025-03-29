import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Shield, Clock, Leaf, Zap } from 'lucide-react'

const Section2 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);

  // Feature cards
  const features = [
    {
      icon: <Shield className="w-6 h-6 mb-4" />,
      title: "Premium Quality",
      description: "We use only the finest materials and craftsmanship in every piece we create."
    },
    {
      icon: <Clock className="w-6 h-6 mb-4" />,
      title: "Timeless Design",
      description: "Our furniture is designed to last generations, both in durability and style."
    },
    {
      icon: <Leaf className="w-6 h-6 mb-4" />,
      title: "Sustainable Practices",
      description: "We're committed to environmentally responsible production methods."
    },
    {
      icon: <Zap className="w-6 h-6 mb-4" />,
      title: "Custom Solutions",
      description: "We can create bespoke pieces tailored to your specific needs and space."
    },
  ];

  return (
    <section ref={sectionRef} className="pt-16 pb-24 overflow-hidden">
      <motion.div
        style={{ opacity }}
        className="max-w-screen-xl mx-auto px-8 md:px-20"
      >
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text content column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              The Perfect Blend of
              <span className="block text-gray-800">Form and Function</span>
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg">
              At UrbanCasa, we believe that great furniture should be both beautiful and practical.
              Every design decision we make is guided by this philosophy, resulting in pieces that
              enhance your lifestyle while elevating your space.
            </p>
            
            <div className="mb-12">
              <Link href="/shop" className="inline-flex items-center text-lg font-medium border-b-2 border-black pb-1 transition-all hover:pr-2">
                <span className="mr-2">Discover our approach</span>
                <ArrowUpRight size={20} />
              </Link>
            </div>
            
            {/* Feature grid */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                >
                  {feature.icon}
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
          
          {/* Image grid column */}
          <motion.div
            style={{ y }}
            className="relative grid grid-cols-6 grid-rows-6 gap-3 h-[600px]"
          >
            <motion.div 
              className="col-span-4 row-span-4 col-start-1 row-start-1 relative rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="/image8.jpg" 
                alt="Elegant bedroom furniture" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h4 className="text-white text-xl font-semibold">Bedroom Collection</h4>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-span-3 row-span-3 col-start-4 row-start-4 relative rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image 
                src="/image7.jpg" 
                alt="Modern office setup" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h4 className="text-white text-xl font-semibold">Office Space</h4>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-span-2 row-span-2 col-start-5 row-start-1 relative rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image 
                src="/image2.jpg" 
                alt="Contemporary dining table" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h4 className="text-white text-sm font-semibold">Dining</h4>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Section2