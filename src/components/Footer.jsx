import React from 'react';
import { Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full font-sans">
      <div className="bg-[#191A23] text-white p-8 md:p-14 rounded-none md:rounded-t-[45px] md:max-w-7xl md:mx-auto">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 md:mb-16">
          <div className="flex items-center gap-2">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 0L15.3 9.2H25L17.1 14.8L19.9 24L12.5 18.4L5.1 24L7.9 14.8L0 9.2H9.7L12.5 0Z" fill="white"/>
            </svg>
            <span className="text-2xl md:text-3xl font-bold tracking-tight">Positivus</span>
          </div>

          <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-10 underline decoration-1 underline-offset-4">
            <a href="#" className="hover:text-[#B9FF66] transition-colors">About us</a>
            <a href="#" className="hover:text-[#B9FF66] transition-colors">Services</a>
            <a href="#" className="hover:text-[#B9FF66] transition-colors">Use Cases</a>
            <a href="#" className="hover:text-[#B9FF66] transition-colors">Pricing</a>
            <a href="#" className="hover:text-[#B9FF66] transition-colors">Blog</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <SocialIcon icon={<Linkedin size={16} fill="currentColor" stroke="none" />} />
            <SocialIcon icon={<Facebook size={16} fill="currentColor" stroke="none" />} />
            <SocialIcon icon={<Twitter size={16} fill="currentColor" stroke="none" />} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-12 md:mb-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">
            <h4 className="bg-[#B9FF66] text-black px-2 py-0.5 rounded-md font-medium text-lg inline-block">
              Contact us:
            </h4>
            <div className="space-y-4 text-base md:text-lg">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p className="max-w-[300px] leading-relaxed">
                Address: 1234 Main St<br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          <div className="flex-1 bg-[#292A32] rounded-[14px] p-6 md:p-10 flex flex-col md:flex-row items-center gap-5">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-transparent border border-white rounded-xl px-6 py-4 focus:outline-none focus:border-[#B9FF66] transition-colors"
            />
            <button className="w-full md:w-auto whitespace-nowrap bg-[#B9FF66] text-black font-medium px-8 py-4 rounded-xl hover:bg-white transition-all duration-300">
              Subscribe to news
            </button>
          </div>
        </div>

        <div className="flex md:hidden items-center justify-center gap-6 mb-10">
          <SocialIcon icon={<Linkedin size={20} fill="currentColor" stroke="none" />} />
          <SocialIcon icon={<Facebook size={20} fill="currentColor" stroke="none" />} />
          <SocialIcon icon={<Twitter size={20} fill="currentColor" stroke="none" />} />
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center gap-4 md:gap-10 text-sm md:text-base text-center md:text-left">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="underline hover:text-[#B9FF66] transition-colors decoration-1 underline-offset-4">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <div className="bg-white text-[#191A23] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B9FF66] transition-all duration-300">
    {icon}
  </div>
);

export default Footer;