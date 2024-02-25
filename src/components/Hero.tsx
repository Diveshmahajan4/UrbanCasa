import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import Section from './Section';

const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,
      },
    },
  };
  
  const letterAni = {
    initial: { y: 300 },
    animate: {
      y: 0,
      transition: {
        ease: "backInOut",
        duration: 1.8,
      },
    },
  };

const Hero = () => {
  return (
    <>
    <section className='relative px-8 md:px-20 bg-transparent -z-50'>
        {/* Layer 1 */}
        <motion.div className='flex justify-between items-center z-10' variants={banner} initial="initial" animate="animate">
            <motion.p className='text-[190px] font-semibold leading-none' variants={letterAni} >urban</motion.p>
            <motion.p className='p-24 w-[500px]'
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "backInOut",
                  duration: 2,
                  delay: 0.4,
                }}
            >Elevate Your Space,Crafting Success through Timeless Style - Your Foundation for Inspired Living.</motion.p>
        </motion.div>

        {/* Layer 2 */}
        <motion.div className='flex overflow-hidden justify-start max-w-screen-2xl' variants={banner} initial="initial" animate="animate">
        <motion.p className='text-[190px] font-semibold leading-none ml-[100px]' variants={letterAni}>furniture</motion.p>
        </motion.div>

        {/* Layer 3 */}
        <motion.div className='flex justify-around items-center z-10' variants={banner} initial="initial" animate="animate">
            <motion.div className='flex flex-col p-8 bg-white w-32 h-32 justify-center items-center rounded-full'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ ease: "backInOut", duration: 1, delay: 1 }}
            >
                <motion.p className='font-semibold'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      ease: "backInOut",
                      duration: 1,
                      delay: 1.8,
                    }}
                >Scroll</motion.p>
                <motion.p className='font-semibold' 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      ease: "backInOut",
                      duration: 1,
                      delay: 1.8,
                    }}
                >Down</motion.p>
            </motion.div>
        <motion.p className='text-[190px] font-semibold leading-none w-[900px] text-start' variants={letterAni}>studio</motion.p>
        </motion.div>

        {/* Hero Image */}
    </section>
    {/* <Section/> */}
    </>
  )
}



export default Hero