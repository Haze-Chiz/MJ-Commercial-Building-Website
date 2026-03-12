import React, { useState } from "react";
import { motion } from "framer-motion";
import { BedDouble, Wifi, Zap, Droplets, MapPin, Clock, ArrowRight } from "lucide-react";
import Modal from "./Modal";
import ImageCarousel from "./ImageCarousel";

const dorms = [
  {
    name: "Dorm A",
    beds: 7,
    price: "₱2,200",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
    ],
  },
  {
    name: "Dorm B",
    beds: 7,
    price: "₱2,200",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
    ],
  },
];

const amenities = [
  { icon: Zap, label: "Electricity" },
  { icon: Droplets, label: "Water" },
  { icon: Wifi, label: "WiFi" },
  { icon: BedDouble, label: "Bedding Set" },
];

const nearbyPlaces = [
  { time: "3 mins", place: "Grace Medical Center" },
  { time: "3 mins", place: "McDonald's Mulawin" },
  { time: "5 mins", place: "First City Providential College" },
  { time: "7 mins", place: "La Concepcion College" },
  { time: "7 mins", place: "Star Mall SJDM" },
  { time: "9 mins", place: "Bulacan State University" },
  { time: "12 mins", place: "SM San Jose Del Monte" },
  { time: "12 mins", place: "STI Academic Center" },
];

export default function Dorm() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="dorm" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Female Only
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Dormitory
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-lg">
            Safe and comfortable bedspaces ideal for students and working professionals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {dorms.map((dorm, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="-mx-8 -mt-8 mb-6 rounded-t-2xl overflow-hidden">
                <ImageCarousel images={dorm.images} height="h-48" />
              </div>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {dorm.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {dorm.beds} bedspaces available
                  </p>
                </div>
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-full font-semibold">
                  Female Only
                </span>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-6">
                {Array.from({ length: dorm.beds }, (_, b) => (
                  <div
                    key={b}
                    className="bg-accent/60 text-accent-foreground text-center py-2.5 rounded-lg text-xs font-medium"
                  >
                    Bed {b + 1}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {amenities.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 text-muted-foreground text-xs"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <p className="text-3xl font-bold text-foreground">
                    {dorm.price}
                    <span className="text-base font-normal text-muted-foreground">/month</span>
                  </p>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        open={modalOpen}
        title="Dormitory Details"
        onClose={() => setModalOpen(false)}
      >
        <div className="space-y-5 text-foreground">
          <div className="bg-secondary rounded-xl p-4">
            <p className="font-semibold text-primary mb-1">
              Great for Students & Workers
            </p>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <p>
                MJ Commercial Building, BLK 3 Lot 1 Phase B,
                <br />
                Brgy. Francisco Homes – Mulawin,
                <br />
                San Jose Del Monte, Bulacan
              </p>
            </div>
          </div>

          <div>
            <p className="font-bold text-xl mb-1">Starts from ₱2,200/month</p>
            <p className="text-sm text-muted-foreground">
              1 month advance + 1 month deposit
            </p>
          </div>

          <div>
            <p className="font-semibold mb-2">Features</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Along main road</li>
              <li>• Second floor with gate</li>
              <li>• Newly renovated</li>
              <li>• 7 ladies per dorm unit</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">What's Included</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Electricity",
                "Water",
                "WiFi",
                "Bedding Set",
                "Electric Fan",
                "Individual Locker",
                "Dining & Kitchen",
                "Storage Room",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-secondary rounded-lg px-3 py-2 text-sm text-secondary-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3">Nearby Places</p>
            <div className="space-y-2">
              {nearbyPlaces.map(({ time, place }) => (
                <div key={place} className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-1 text-primary shrink-0 w-20">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="font-medium">{time}</span>
                  </div>
                  <span className="text-muted-foreground">{place}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/10 rounded-xl p-4 text-center">
            <p className="font-bold text-primary text-lg">
              Call or Text: 0910-036-8156
            </p>
          </div>
        </div>
      </Modal>
    </section>
  );
}