import { Loader2 } from 'lucide-react'
import Image from 'next/image';
import React, { useEffect } from 'react'
import { motion } from "framer-motion"

interface LoaderProps{
    // loading: boolean;
    setLoading: (open: boolean) => void;
}

const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.17, 0.90, 0.83, 0.90],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };
  
  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.17, 0.67, 0.83, 0.67],
        duration: 1.6,
      },
    },
    exit: {
        opacity: 0,
        y: 400,
        scale: 1.7,
        transition: {
          ease: "backInOut",
          duration: 1.2,
        },
      },
  };


const Loader: React.FC<LoaderProps> = ({setLoading}) => {

  return (
    <motion.div className='relative h-[200vh] overflow-hidden'
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
    >
        <motion.div className='absolute top-11 left-[170px] z-10' variants={item}>
            <Image src="/image1.jpg" alt='image-1' height={200} width={210}/>
        </motion.div>
        <motion.div className='absolute top-11 right-[170px] z-10'  variants={item}>
            <Image src="/image3.jpg" alt='image-3' height={200} width={210}/>
        </motion.div>
        <motion.div className='absolute top-[160px] left-[350px] z-0' variants={itemMain}>
            <motion.img src="/image5.jpg" alt='image-5' height={200} width={700} 
            />
        </motion.div>
        <motion.div className='absolute top-[450px] left-[170px] z-10' variants={item}>
            <Image src="/image2.jpg" alt='image-2' height={200} width={350}/>
        </motion.div>
        <motion.div className='absolute top-[460px] right-[170px] -z-10' variants={item}>
            <Image src="/image4.jpg" alt='image-4' height={200} width={350}/>
        </motion.div>
    </motion.div>
  )
}

export default Loader