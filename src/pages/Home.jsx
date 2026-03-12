import React from "react";
import Navbar from "../components/mj/Navbar";
import Hero from "../components/mj/Hero";
import Commercial from "../components/mj/Commercial";
import Dorm from "../components/mj/Dorm";
import Contact from "../components/mj/Contact";
import Footer from "../components/mj/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Commercial />
      <Dorm />
      <Contact />
      <Footer />
    </div>
  );
}