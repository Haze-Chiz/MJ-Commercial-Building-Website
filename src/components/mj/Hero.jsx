import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Building, BedDouble } from "lucide-react";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary-foreground/60 text-sm font-medium tracking-[0.3em] uppercase mb-6">
            San Jose Del Monte, Bulacan
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6">
            MJ Commercial
            <br />
            <span className="text-primary-foreground/70">Building</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full">
            <Building className="w-4 h-4 text-primary-foreground/70" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              3 Commercial Spaces
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full">
            <BedDouble className="w-4 h-4 text-primary-foreground/70" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              14 Female Dorm Bedspaces
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection("commercial")}
            className="bg-primary-foreground text-primary px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-primary-foreground/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore Spaces
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-all"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-5 h-5 text-primary-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}