import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
      if (e.key === "ArrowLeft") setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
        <X className="w-6 h-6" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)); }}
        className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <img
        src={images[current].replace("w=600", "w=1200")}
        alt=""
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)); }}
        className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-4" : "bg-white/40"}`}
          />
        ))}
      </div>
      <p className="absolute bottom-6 right-6 text-white/50 text-sm">{current + 1} / {images.length}</p>
    </div>
  );
}

export default function ImageCarousel({ images, height = "h-56" }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  };

  return (
    <>
      {lightbox && <Lightbox images={images} startIndex={current} onClose={() => setLightbox(false)} />}
      <div className={`relative ${height} overflow-hidden bg-muted`}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Photo ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />

        <button
          onClick={() => setLightbox(true)}
          className="absolute top-3 right-3 bg-black/40 hover:bg-black/60 text-white p-1.5 rounded-full transition-colors z-10"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 rounded-full transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 rounded-full transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white w-3" : "bg-white/50"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}