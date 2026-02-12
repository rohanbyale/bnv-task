import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WorkingProcess = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  const processes = [
    {
      id: "01",
      title: "Consultation",
      description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
      id: "02",
      title: "Research and Strategy Development",
      description: "We conduct deep market research to develop a customized strategy that aligns with your specific business goals."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10 md:py-20 bg-white font-sans">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-10 mb-12 md:mb-20 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="bg-[#B9FF66] text-black text-3xl md:text-4xl font-medium px-2 py-1 rounded-lg leading-tight md:inline-block">
            Our Working
          </h2>
          <h2 className="bg-[#B9FF66] text-black text-3xl md:text-4xl font-medium px-2 py-1 rounded-lg leading-tight mt-1 md:mt-0 md:hidden">
            Process
          </h2>
        </div>
        <p className="max-w-[300px] text-base md:text-lg text-black leading-snug">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {processes.map((p, i) => (
          <div 
            key={i} 
            onClick={() => setActiveProcess(activeProcess === i ? null : i)}
            className={`border-2 border-black border-b-[8px] rounded-[45px] p-6 md:p-12 cursor-pointer transition-all duration-300 ${
              activeProcess === i ? 'bg-[#B9FF66]' : 'bg-[#F3F3F3]'
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 md:gap-6">
                <span className="text-3xl md:text-6xl font-medium">{p.id}</span>
                <span className="text-xl md:text-3xl font-medium leading-tight">{p.title}</span>
              </div>
              
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center bg-[#F3F3F3] text-2xl md:text-3xl shrink-0">
                {activeProcess === i ? '−' : '+'}
              </div>
            </div>
            
            <AnimatePresence>
              {activeProcess === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 mt-6 border-t border-black">
                    <p className="text-base md:text-lg leading-relaxed text-black">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;