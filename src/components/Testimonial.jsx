import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialData = [
    {
      name: "John Smith",
      position: "Marketing Director at XYZ Corp",
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
    },
    {
      name: "Jane Doe",
      position: "CEO at TechFlow",
      text: "Their strategic approach to SEO and content marketing transformed our digital footprint. We've seen a 200% increase in organic reach within just six months of collaboration."
    },
    {
      name: "Michael Chen",
      position: "Founder of GreenGrowth",
      text: "The communication and reporting are top-notch. I always know exactly where my budget is going and the ROI we are achieving. A truly transparent partnership."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 font-sans">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-10 mb-10 md:mb-16">
        <h2 className="bg-[#B9FF66] text-black text-3xl md:text-4xl font-medium px-2 py-1 rounded-lg">
          Testimonials
        </h2>
        <p className="max-w-[480px] text-base md:text-lg text-black text-center md:text-left leading-tight">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>

      <div className="bg-[#191A23] rounded-[45px] py-10 md:py-20 px-4 md:px-12 relative overflow-hidden">
        <div className="relative h-[400px] md:h-[350px] w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="absolute w-full max-w-[600px] flex flex-col items-center md:items-start"
            >
              <div className="relative border border-[#B9FF66] rounded-[30px] md:rounded-[45px] p-6 md:p-10 mb-6 bg-transparent">
                <p className="text-white text-sm md:text-lg leading-relaxed">
                  "{testimonialData[currentIndex].text}"
                </p>
                <div className="absolute -bottom-[20px] left-10 md:left-20">
                  <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
                    <path d="M20 25L0 0H40L20 25Z" fill="#191A23" />
                    <path d="M0 0L20 25L40 0" stroke="#B9FF66" strokeWidth="1" />
                  </svg>
                </div>
              </div>

              <div className="ml-10 md:ml-20">
                <h4 className="text-[#B9FF66] font-medium text-lg">
                  {testimonialData[currentIndex].name}
                </h4>
                <p className="text-white text-sm md:text-base">
                  {testimonialData[currentIndex].position}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-8 md:gap-12 mt-6">
          <button 
            onClick={prevSlide}
            className="text-white hover:text-[#B9FF66] transition-colors p-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2 md:gap-4">
            {testimonialData.map((_, index) => (
              <StarIcon key={index} active={index === currentIndex} />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="text-white hover:text-[#B9FF66] transition-colors p-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const StarIcon = ({ active }) => (
  <svg 
    width="14" height="14" viewBox="0 0 14 14" 
    className={`transition-colors duration-300 ${active ? "text-[#B9FF66]" : "text-white"}`}
  >
    <path 
      d="M7 0L8.8 5.2H14L9.8 8.4L11.6 13.6L7 10.4L2.4 13.6L4.2 8.4L0 5.2H5.2L7 0Z" 
      fill="currentColor" 
    />
  </svg>
);

export default Testimonials;