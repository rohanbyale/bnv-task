import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Search engine",
      subtitle: "optimization",
      bgColor: "bg-[#F3F3F3]",
      labelColor: "bg-[#B9FF66]",
      illustration: "https://raw.githubusercontent.com/schurrerpame/Amazing-LandingPage-Bootstrap-React/5beface7347a6aa951ba0426dc0327f668106b24/src/assets/services01.png",
      darkTheme: false
    },
    {
      title: "Pay-per-click",
      subtitle: "advertising",
      bgColor: "bg-[#B9FF66]",
      labelColor: "bg-white",
      illustration: "https://rawcdn.githack.com/schurrerpame/Amazing-LandingPage-Bootstrap-React/5beface7347a6aa951ba0426dc0327f668106b24/src/assets/services02.png",
      darkTheme: false
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pt-10 md:pt-20 pb-20 bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-10 mb-20">
        <h2 className="bg-[#B9FF66] text-black text-4xl font-medium px-2 py-1 rounded-lg">
          Services
        </h2>
        <p className="max-w-[580px] text-lg text-black leading-snug">
          At our digital marketing agency, we offer a range of services to 
          help businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className={`${service.bgColor} p-10 md:p-12 rounded-[45px] border-2 border-b-[8px] border-black flex flex-col justify-between relative min-h-[310px] md:min-h-[350px] overflow-hidden`}
          >
            <div className="flex flex-col items-start gap-1 z-10">
              <span className={`${service.labelColor} text-2xl md:text-3xl font-medium px-2 py-0.5 rounded-lg block`}>
                {service.title}
              </span>
              <span className={`${service.labelColor} text-2xl md:text-3xl font-medium px-2 py-0.5 rounded-lg block`}>
                {service.subtitle}
              </span>
            </div>

            <div className="flex items-end justify-between mt-auto">
              <div className="flex items-center gap-4 group cursor-pointer z-10">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${service.darkTheme ? 'bg-white' : 'bg-[#191A23] group-hover:scale-110'}`}>
                  <svg 
                    width="20" height="20" viewBox="0 0 24 24" fill="none" 
                    className={`${service.darkTheme ? 'text-black' : 'text-[#B9FF66]'}`}
                  >
                    <path 
                      d="M7 17L17 7M17 7H7M17 7V17" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className={`hidden md:block text-xl font-medium ${service.darkTheme ? 'text-white' : 'text-black'}`}>
                  Learn more
                </span>
              </div>

              <div className="absolute bottom-10 right-10 md:static flex items-center justify-end w-32 md:w-48 lg:w-52">
                <img 
                  src={service.illustration} 
                  alt={service.title} 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;