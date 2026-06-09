import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Droplet } from "lucide-react";
import { Button } from "./ui/button";

const bottleDesigns = [
  {
    id: 1,
    name: "Ocean Blue Edition",
    color: "#3B82F6",
    tagline: "Dive into hydration",
    description: "Premium stainless steel with smart LED technology"
  },
  {
    id: 2,
    name: "Emerald Green",
    color: "#10B981",
    tagline: "Nature's refreshment",
    description: "Eco-friendly materials with biometric security"
  },
  {
    id: 3,
    name: "Sunset Pink",
    color: "#EC4899",
    tagline: "Style meets function",
    description: "Sleek design with advanced tracking features"
  },
  {
    id: 4,
    name: "Midnight Black",
    color: "#1F2937",
    tagline: "Elegance redefined",
    description: "Classic sophistication with modern technology"
  },
  {
    id: 5,
    name: "Cyan Wave",
    color: "#06B6D4",
    tagline: "Ride the wave of wellness",
    description: "Lightweight yet durable with GPS tracking"
  },
  {
    id: 6,
    name: "Purple Crown",
    color: "#8B5CF6",
    tagline: "Hydration royalty",
    description: "Premium finish with customizable features"
  }
];

export function BottleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bottleDesigns.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + bottleDesigns.length) % bottleDesigns.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % bottleDesigns.length);
  };

  const currentBottle = bottleDesigns[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
      <div className="grid md:grid-cols-2 gap-8 items-center p-12">
        <div className="text-white space-y-6">
          <div className="inline-block px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-400/30">
            <span className="text-cyan-300 text-sm font-semibold">NEW COLLECTION 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {currentBottle.name}
          </h2>
          <p className="text-2xl text-cyan-300 font-medium italic">
            {currentBottle.tagline}
          </p>
          <p className="text-gray-300 text-lg">
            {currentBottle.description}
          </p>
          <div className="flex gap-4 pt-4">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg">
              Explore Now
            </Button>
            <Button variant="outline" className="border-white text-black bg-white hover:bg-gray-100 px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>

          <div
            className="relative w-40 h-80 rounded-3xl shadow-2xl transition-all duration-700 transform hover:scale-105"
            style={{
              backgroundColor: currentBottle.color,
            }}
          >
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-10 bg-black/20 rounded-b-3xl"></div>

            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
              <Droplet className="w-7 h-7 text-white" />
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-3 bg-cyan-400 rounded-full animate-pulse"></div>

            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {bottleDesigns.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-gray-500 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
