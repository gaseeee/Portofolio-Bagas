import React from 'react';
import profileImg from '../assets/profile.jpg';

function Home() {
  return (
    <main className="flex-grow flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center pt-20 pb-32 overflow-hidden bg-surface">
        {/* Atmospheric Background Elements */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-20" 
          style={{ backgroundImage: "radial-gradient(circle at 70% 30%, #00f5ff 0%, transparent 40%), radial-gradient(circle at 30% 80%, #ead5ff 0%, transparent 40%)" }}
        ></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="col-span-1 lg:col-span-8 space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/20 px-3 py-1.5 font-label text-xs uppercase tracking-widest text-primary-fixed-dim">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
              </span>
              Who am i?
            </div>
            
            {/* Headline */}
            <h1 className="font-headline text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[1.05] text-on-surface">
              Muhammad Radhwa<br />Bagas Widyasa.
              <span className="block text-3xl md:text-5xl mt-4 text-surface-tint tracking-tight font-bold">Cyber Security Enthusiast, Aspiring SOC Analyst & Penetration Tester</span>
            </h1>
            
            {/* Value Prop */}
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Information Technology student with a focus on the broader cybersecurity ecosystem. I bridge the gap between defense and offense by actively exploring the roles of SOC Analyst for threat detection and Penetration Tester to assess system resilience.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-6 pt-4">
              {/* Tombol ke halaman Projects */}
              <a 
                href="/projects" 
                className="bg-primary-container text-on-primary-container px-8 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all glow-sm flex items-center gap-2 no-underline"
              >
                <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>shield_with_heart</span>
                View My Projects
              </a>
              
              {/* Tombol Download Resume (Ganti URL-nya dengan link GDrive kamu) */}
              <a 
                href="https://drive.google.com/file/d/1PSYTUsENGnMW1kkQ4lVNdxCciUC6as4C/view?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-outline-variant/20 text-on-surface px-8 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-container-highest transition-colors flex items-center gap-2 no-underline"
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
                Hire Me!
              </a>
            </div>
          </div>
          
          {/* Profile Visual */}
          <div className="col-span-1 lg:col-span-4 hidden lg:block relative h-full min-h-[400px]">
            <div className="absolute inset-0 bg-surface-container-lowest border border-outline-variant/10 p-2 overflow-hidden group">
              <div className="absolute inset-0 bg-primary-container/20 mix-blend-overlay z-10 pointer-events-none group-hover:bg-transparent transition-all duration-500"></div>
              <img 
                src={profileImg}
                alt="Profile Photo"
                className="object-cover w-full h-full filter grayscale-[30%] contrast-125 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#63f7ff] z-20 m-4"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#63f7ff] z-20 m-4"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#63f7ff] z-20 m-4"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#63f7ff] z-20 m-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Focus Area / Bento Grid */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-16">
            <h2 className="font-headline text-3xl font-black tracking-tight text-on-surface">Core Competencies.</h2>
            <p className="font-label text-sm text-on-surface-variant uppercase tracking-widest mt-2">Defensive &amp; Offensive Capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Card 1 */}
            <div className="bg-surface-container border border-outline-variant/10 p-8 hover:bg-surface-bright transition-colors group flex flex-col justify-between md:col-span-2">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-3xl text-primary-fixed-dim" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
                <span className="font-label text-xs text-on-surface-variant">Blue Team</span>
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2 group-hover:text-primary-container transition-colors">Threat Detection &amp; SOC Operations</h3>
                <p className="text-on-surface-variant text-sm max-w-md">Monitoring network traffic, analyzing SIEM logs, and identifying anomalous behavior to mitigate potential breaches before they escalate.</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-surface-container border border-outline-variant/10 p-8 hover:bg-surface-bright transition-colors group flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-3xl text-tertiary-fixed-dim" style={{fontVariationSettings: "'FILL' 1"}}>bug_report</span>
                <span className="font-label text-xs text-on-surface-variant">Red Team</span>
              </div>
              <div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2 group-hover:text-tertiary-container transition-colors">Vulnerability Assessment</h3>
                <p className="text-on-surface-variant text-sm">Understanding attack vectors to build stronger defenses.</p>
              </div>
            </div>
                             
            {/* Card 4: Terminal Widget */}
            <div className="bg-surface-container-lowest border border-outline-variant/10 p-6 flex flex-col md:col-span-2 font-label text-sm text-on-surface-variant">
              <div className="flex gap-2 mb-4 border-b border-outline-variant/10 pb-2">
                <div className="w-3 h-3 bg-surface-variant"></div>
                <div className="w-3 h-3 bg-surface-variant"></div>
                <div className="w-3 h-3 bg-surface-variant"></div>
              </div>
              <div className="space-y-2">
                <p><span className="text-surface-tint">root@local:~$</span> nmap -sV -p- target_ip</p>
                <p>Starting Nmap 7.93...</p>
                <p>Scanning target_ip...</p>
                <p><span className="text-surface-tint">guest@local:~$</span> hydra -L username.txt -P password.txt ssh://target_ip</p>
                <p>[+] Found 452 failed SSH login attempts.</p>
                <p className="text-primary-fixed-dim animate-pulse">_</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;