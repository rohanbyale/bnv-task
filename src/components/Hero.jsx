import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const logos = [
    { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Dribbble", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOAjqOz2znXgruzHYHTzE2LL2VyXv8KQCrQ&s" },
    { name: "HubSpot", src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
    { name: "Notion", src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" },
    { name: "Netflix", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Zoom", src: "https://evolved.cx/wp-content/uploads/2025/01/Zoom-Logo.png" }
  ];

  const MarqueeTrack = ({ items, direction = "right-to-left", speed = 25 }) => (
    <motion.div 
      className="flex flex-nowrap gap-12 md:gap-24 items-center pr-12 md:pr-24"
      animate={{ x: direction === "right-to-left" ? ["0%", "-100%"] : ["-100%", "0%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: speed }}
    >
      {[...items, ...items].map((logo, index) => (
        <img 
          key={index}
          src={logo.src} 
          alt={logo.name} 
          className="h-7 md:h-9 w-auto object-contain flex-shrink-0" 
        />
      ))}
    </motion.div>
  );

  return (
    <div className="bg-white font-sans selection:bg-[#B9FF66]">
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-16 md:pt-16 md:pb-24 w-full">
        <motion.div 
          className="flex flex-col md:flex-row items-start justify-between gap-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="w-full md:w-1/2 flex flex-col order-1">
            <motion.h1 
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-black mb-6 tracking-tight"
            >
              Navigating the <br className="hidden md:block" /> 
              digital landscape <br className="hidden md:block" /> 
              for success
            </motion.h1>

            <motion.div variants={item} className="md:hidden w-full mb-8">
               <HeroIllustration />
            </motion.div>

            <motion.p 
              variants={item}
              className="text-lg md:text-xl text-black leading-relaxed mb-8 max-w-lg"
            >
              Our digital marketing agency helps businesses grow and succeed online 
              through a range of services including SEO, PPC, social media marketing, 
              and content creation.
            </motion.p>

            <motion.div variants={item}>
              <button className="bg-[#191A23] text-white text-lg py-4 px-8 rounded-xl hover:bg-[#B9FF66] hover:text-black transition-all duration-300 w-full md:w-auto shadow-sm">
                Book a consultation
              </button>
            </motion.div>
          </div>

          <motion.div className="hidden md:block md:w-1/2 order-2" variants={item}>
            <HeroIllustration />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 md:mt-24 w-full overflow-hidden flex flex-col gap-8"
        >
          <div className="flex flex-col gap-6 md:hidden grayscale opacity-60">
            <div className="flex overflow-hidden">
              <MarqueeTrack items={logos.slice(0, 3)} direction="left-to-right" speed={15} />
            </div>
            <div className="flex overflow-hidden">
              <MarqueeTrack items={logos.slice(3, 6)} direction="right-to-left" speed={15} />
            </div>
          </div>

          <div className="hidden md:flex grayscale opacity-70 hover:opacity-100 transition-opacity overflow-hidden">
            <MarqueeTrack items={logos} direction="right-to-left" speed={30} />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

const HeroIllustration = () => (
  <div className="w-full max-w-[500px] md:max-w-full ml-auto">
    <img 
      src="https://raw.githubusercontent.com/schurrerpame/Amazing-LandingPage-Bootstrap-React/5beface7347a6aa951ba0426dc0327f668106b24/src/assets/hero.png" 
      alt="Marketing Illustration" 
      className="w-full h-auto"
    />
  </div>
);

export default Hero;