import React from 'react'
import Image from 'next/image'
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Section = () => {

    const sectionRef = useRef(null);
    const {scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <>
    <div ref={sectionRef} className='relative h-screen overflow-hidden'>
        <motion.div className='absolute w-full h-[120%] z-10 rounded-md' style={{top: y}}>
            <Image src='/image5.jpg' alt='heroimage' width={1736} height={1200} className='object-cover'/>
        </motion.div>
    </div>
    </>
  )
}

export default Section