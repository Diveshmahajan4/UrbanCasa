"use client"

import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence,  LayoutGroup } from "framer-motion"

export default function Home() {

  const [loading, setLoading] = useState(true);

  return (
    <main className="">
      <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading}/>
        </motion.div>
      ) : (
        <div className="relative">
          <Navbar/>
          <Hero/>
          <motion.div className='absolute top-[650px] left-4 -z-50 rounded-md'>
            <motion.img src='/image5.jpg' alt='heroimage' width={1536} height={1200} />
          </motion.div>
        </div>
      )}
      </AnimatePresence>
    </main>
  );
}
