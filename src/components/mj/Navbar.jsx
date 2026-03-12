import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Building2 } from "lucide-react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Commercial", id: "commercial" },
  { label: "Dormitory", id: "dorm" },
  { label: "Contact", id: "contact" },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2.5">
          <Building2 className="w-6 h-6 text-primary-foreground" />
          <span className="font-display text-xl font-semibold text-primary-foreground tracking-tight">
            MJ Commercial
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-primary-foreground/80 hover:text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/10"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-primary-foreground p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-primary/95 backdrop-blur-md overflow-hidden border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setOpen(false);
                  }}
                  className="block w-full text-left text-primary-foreground/80 hover:text-primary-foreground py-3 px-4 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}