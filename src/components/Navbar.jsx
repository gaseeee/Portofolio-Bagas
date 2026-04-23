import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const getNavClass = ({ isActive }) => {
    const baseClass = "font-['Inter'] font-bold tracking-tight uppercase text-sm px-3 py-2 transition-all duration-300 scale-95 active:scale-90 ";
    return isActive
      ? baseClass + "text-[#00F5FF] border-b-2 border-[#00F5FF] pb-1 hover:bg-[#353534]"
      : baseClass + "text-slate-400 font-medium hover:text-[#00F5FF] hover:bg-[#353534]";
  };

  return (
    <header className="bg-[#1C1B1B] shadow-[0_1px_0_0_rgba(255,255,255,0.05)] shadow-[0_4px_20px_rgba(0,245,255,0.1)] w-full top-0 sticky z-50">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-full mx-auto">
        <NavLink to="/" className="text-xl font-black text-[#00F5FF] tracking-tighter hover:opacity-80 transition-opacity">
          PORTOFOLIO
        </NavLink>
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={getNavClass}>Home</NavLink>
          <NavLink to="/about-experience" className={getNavClass}>About</NavLink>
          <NavLink to="/about-experience" className={getNavClass}>Experience</NavLink>
          <NavLink to="/projects" className={getNavClass}>Projects</NavLink>
          <NavLink to="/certifications-contact" className={getNavClass}>Certifications</NavLink>
          <NavLink to="/certifications-contact" className={getNavClass}>Contact</NavLink>
        </nav>

        {/* Changed from button to anchor tag with Google Drive functionality */}
        <a
          href="https://drive.google.com/file/d/1BjXC3ZhCpMxAiPo45E8jpg19rq61mq5g/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex bg-primary-container text-on-primary-container font-['Inter'] font-bold tracking-tight uppercase px-6 py-2 hover:bg-[#353534] hover:text-primary transition-all duration-300 scale-95 active:scale-90 items-center gap-2 text-sm"
        >
          CV
          <span className="material-symbols-outlined text-[18px]">download</span>
        </a>

        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
