import React from 'react'
import Image from 'next/image'
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Section2 = () => {
    const sectionRef = useRef(null);
    const {scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  return (
    <>
    <div ref={sectionRef} className='relative h-screen overflow-hidden'>
        <motion.div className='absolute w-full h-[120%] -z-10 rounded-md' style={{top: y}}>
            <div>
                
            </div>
        </motion.div>
    </div>
    </>
  )
}

export default Section2