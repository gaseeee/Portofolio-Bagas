import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#131313] w-full border-t border-white/5 relative z-10 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-10 gap-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center md:items-start gap-2">
                <Link to="/" className="text-lg font-black text-[#00F5FF] hover:opacity-80 transition-opacity">
                    Portofolio
                </Link>
                <span className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-slate-500 hidden md:block">
                    © 2026 Portofolio Muhammad Radhwa Bagas Widyasa.
                </span>
            </div>
            
            <div className="flex flex-wrap gap-6 font-['Space_Grotesk'] text-[10px] tracking-widest uppercase">
                <a className="text-slate-500 hover:text-[#00F5FF] hover:glow-sm transition-all opacity-80 hover:opacity-100" href="#">LinkedIn</a>
                <a className="text-slate-500 hover:text-[#00F5FF] hover:glow-sm transition-all opacity-80 hover:opacity-100" href="#">GitHub</a>
                <a className="text-slate-500 hover:text-[#00F5FF] hover:glow-sm transition-all opacity-80 hover:opacity-100" href="#">Medium</a>
                <a className="text-slate-500 hover:text-[#00F5FF] hover:glow-sm transition-all opacity-80 hover:opacity-100" href="#">Email</a>
            </div>
            
            <span className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-slate-500 md:hidden text-center">
                © 2026 Portofolio Muhammad Radhwa Bagas Widyasa.
            </span>
        </div>
    </footer>
  );
}

export default Footer;
