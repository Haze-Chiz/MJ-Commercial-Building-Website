import React, { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2, ArrowRight } from "lucide-react";
import Modal from "./Modal";
import ImageCarousel from "./ImageCarousel";

const lots = [
  {
    name: "Lot 1",
    area: "30 sqm",
    rent: "₱10,000",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    ],
  },
  {
    name: "Lot 2",
    area: "30 sqm",
    rent: "₱10,000",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    ],
  },
  {
    name: "Lot 3",
    area: "30 sqm",
    rent: "₱10,000",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
    ],
  },
];

export default function Commercial() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="commercial" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            For Lease
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Commercial Spaces
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-lg">
            Prime ground-floor spaces perfect for retail, food service, or office use
            — along a main road with high foot traffic.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {lots.map((lot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative">
                <ImageCarousel images={lot.images} height="h-56" />
                <span className="absolute bottom-4 left-4 text-primary-foreground font-display text-xl font-bold z-10">
                  {lot.name}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <Maximize2 className="w-4 h-4" />
                  <span>Floor Area: {lot.area}</span>
                </div>
                <p className="text-foreground font-bold text-xl mb-5">
                  {lot.rent}
                  <span className="text-muted-foreground text-sm font-normal"> /month</span>
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        open={modalOpen}
        title="Commercial Space Details"
        onClose={() => setModalOpen(false)}
      >
        <div className="space-y-4 text-foreground">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary rounded-xl p-4">
              <p className="text-xs text-muted-foreground mb-1">Floor Size</p>
              <p className="font-semibold">30 sqm</p>
            </div>
            <div className="bg-secondary rounded-xl p-4">
              <p className="text-xs text-muted-foreground mb-1">Monthly Rent</p>
              <p className="font-semibold">₱10,000</p>
            </div>
          </div>
          <div>
            <p className="font-semibold mb-2">Suitable For</p>
            <div className="flex flex-wrap gap-2">
              {["Retail Store", "Food Stall", "Office", "Service Shop"].map((t) => (
                <span key={t} className="bg-accent text-accent-foreground text-xs px-3 py-1.5 rounded-full font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold mb-2">Amenities</p>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• Along main road with high visibility</li>
              <li>• Ground floor with easy access</li>
              <li>• With water and electricity connection</li>
              <li>• Secure gated compound</li>
            </ul>
          </div>
          <p className="text-sm text-muted-foreground">
            Requirements: 1 month advance + 1 month deposit. Business permit needed.
          </p>
        </div>
      </Modal>
    </section>
  );
}