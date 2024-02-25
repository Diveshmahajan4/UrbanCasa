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

    // const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  return (
    <>
    <div ref={sectionRef} className='relative h-screen overflow-hidden'>
        <motion.div className='absolute w-full h-[120%] -z-10 rounded-md mt-20'>
            <div className='grid grid-cols-2 gap-2 px-8 md:px-20' >
                <div className='flex'>
                  <div>
                    <Image src='/image8.jpg' alt='img' width={400} height={400}/>
                    {/* image info */}
                  </div>
                  <div>
                    <h1>Architecture and Interior</h1>
                    <p>
                      UrbanCasa is proud to present their most recent project, the completer
                      transformation of Hungary&aps;s only 2 Micellin star restaurant named Onyx.
                    </p>
                  </div>
                </div>
                <div className='flex justify-end'>
                  <Image src='/image7.jpg' alt='img' width={600} height={600}/>
                </div>
            </div>
        </motion.div>
    </div>
    </>
  )
}

export default Section2