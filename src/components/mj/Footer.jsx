import React from "react";
import { Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <Building2 className="w-5 h-5" />
            <span className="font-display text-lg font-semibold">
              MJ Commercial Building
            </span>
          </div>
          <p className="text-primary-foreground/60 text-sm">
            BLK 3 Lot 1 Phase B, Brgy. Francisco Homes – Mulawin, San Jose Del Monte, Bulacan
          </p>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} MJ Commercial Building. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}