import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/buddha_intro.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>

      <div className="container relative z-10 text-center px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-block text-sm uppercase tracking-[0.4em] mb-6 font-medium"
        >
          Art of Purity
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl mb-8 leading-tight"
        >
          Elevated Living
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl font-light opacity-90 mb-12"
        >
          Intelligent toilets and bidet systems, engineered in Japan.
          The world's most advanced personal hygiene technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Link
            to="/collection"
            className="btn-primary"
            style={{ background: "white", color: "black" }}
          >
            Explore the Collection
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-4 bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

