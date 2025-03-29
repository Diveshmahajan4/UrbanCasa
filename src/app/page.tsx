"use client"

import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence,  LayoutGroup } from "framer-motion"
import Section from "@/components/Section";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Lenis from "@studio-freight/lenis/types";
import Footer from "@/components/Footer";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis()
    
    function raf() {
      lenis.raf
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="">
      <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading}/>
        </motion.div>
      ) : (
        <div className="">
          <Navbar/>
          <Hero/>
          <Section/>
          <Section2/>
          <Section3/>
          <Footer/>
        </div>
      )}
      </AnimatePresence>
    </main>
  );
}
