import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Use Cases", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white max-w-7xl mx-auto px-4 md:px-6 py-6 font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 0L15.3 9.2H25L17.1 14.8L19.9 24L12.5 18.4L5.1 24L7.9 14.8L0 9.2H9.7L12.5 0Z" fill="black"/>
          </svg>
          <span className="text-2xl md:text-3xl font-bold tracking-tight">Positivus</span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-10 text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-gray-600 transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="border border-black px-8 py-4 rounded-xl text-lg hover:bg-black hover:text-white transition-all duration-300">
            Request a quote
          </button>
        </div>

        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none"
          >
            <div className="space-y-1.5">
              <span className={`block w-8 h-0.5 bg-black transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-black ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 z-50 shadow-sm animate-in fade-in slide-in-from-top-4">
          <ul className="flex flex-col p-6 gap-6 text-center text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="block py-2 hover:font-bold" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button className="w-full border border-black px-8 py-4 rounded-xl font-medium">
                Request a quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;