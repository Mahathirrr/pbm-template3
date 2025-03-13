import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Smartphone, Laptop, Tv, Headphones, ChevronRight } from "lucide-react";

const slides = [
  {
    icon: Smartphone,
    title: "Phone Repairs",
    description: "Expert repairs for all smartphone brands with genuine parts",
  },
  {
    icon: Laptop,
    title: "Laptop Services",
    description: "Professional laptop repair and maintenance services",
  },
  {
    icon: Tv,
    title: "TV Repairs",
    description: "Specialized repair for all your TV devices",
  },
];

const OnboardingScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      navigate("/welcome");
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="h-full flex flex-col items-center justify-center px-6 text-center"
          >
            {React.createElement(slides[currentSlide].icon, {
              size: 120,
              className: "text-violet-600 mb-8", // Changed from blue-500 to violet-600
            })}
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {slides[currentSlide].title}
            </h2>
            <p className="text-gray-600">{slides[currentSlide].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-6">
        <div className="flex justify-center mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === currentSlide ? "bg-violet-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="primary-button flex items-center justify-center"
        >
          {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          <ChevronRight className="ml-2" size={20} />
        </motion.button>
      </div>
    </div>
  );
};

export default OnboardingScreen;

