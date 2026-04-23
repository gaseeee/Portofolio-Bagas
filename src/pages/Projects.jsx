import React from 'react';

function Projects() {
  return (
    <main className="flex-grow tech-bg relative pb-32">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-8 pt-24 pb-16">
        <div className="flex flex-col gap-4 max-w-3xl">
          <h1 className="font-headline text-5xl md:text-6xl font-black tracking-[-0.02em] text-on-surface">
            PROJECTS &amp; <br/>
            <span className="text-primary-container">WRITE-UPS</span>
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-[1.6]">
            Here are some of my most important projects
          </p>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[minmax(300px,auto)]">
        
        {/* Card 1: Automated SOC Incident Report (Large) */}
        <a 
          href="https://drive.google.com/file/d/1ejKR9-UvIVe7hYLCK7YrEr1dHJ17owQp/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="md:col-span-8 bg-surface-container-low group hover:bg-surface-container transition-colors duration-300 relative overflow-hidden flex flex-col justify-between p-8 border-l-2 border-transparent hover:border-primary-container cursor-pointer block no-underline"
        >
          <div className="flex justify-between items-start mb-12">
            <div className="font-label text-sm text-on-surface-variant flex gap-4 uppercase tracking-widest">
              <span>Defensive</span>
              <span className="text-primary-container">01</span>
            </div>
            <span className="material-symbols-outlined text-primary-container opacity-50 group-hover:opacity-100 transition-opacity">arrow_outward</span>
          </div>
          <div className="z-10 relative">
            <h2 className="font-label text-3xl font-bold text-on-surface mb-4 group-hover:text-primary-fixed-dim transition-colors">Security Event Monitoring and Automated Alert Delivery Using Wazuh
SIEM On Telegram Bot</h2>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed max-w-2xl mb-8">
              Built a Wazuh based SOC automation system for real time security monitoring and automated Telegram based incident response
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="font-label text-xs bg-secondary-container text-on-secondary-container px-3 py-1 tracking-wider uppercase">Wazuh</span>
              <span className="font-label text-xs bg-secondary-container text-on-secondary-container px-3 py-1 tracking-wider uppercase">Telegram Bot</span>
              <span className="font-label text-xs bg-secondary-container text-on-secondary-container px-3 py-1 tracking-wider uppercase">Python</span>
            </div>
          </div>
        </a>
        
        {/* Card 2: System Management Employee Bank (Tall) */}
        <a 
          href="https://github.com/radhwabagas/System-Management-BANK" 
          target="_blank" 
          rel="noopener noreferrer"
          className="md:col-span-4 md:row-span-2 bg-surface-container-low group hover:bg-surface-container transition-colors duration-300 relative flex flex-col justify-between p-8 border-l-2 border-transparent hover:border-primary-container cursor-pointer block no-underline"
        >
          <div>
            <div className="flex justify-between items-start mb-8">
              <div className="font-label text-sm text-on-surface-variant flex gap-4 uppercase tracking-widest">
                <span>AppSecurity</span>
                <span className="text-primary-container">02</span>
              </div>
              <span className="material-symbols-outlined text-primary-container opacity-50 group-hover:opacity-100 transition-opacity">lock</span>
            </div>
            <div className="bg-surface-container-lowest p-6 mb-8 border border-outline-variant/20 font-label text-sm text-primary-fixed-dim overflow-x-auto">
              <code>
                $ bcrypt.hash(password, saltRounds);<br/>
                $ verifyOTP(user.token, input);<br/>
                $ session.secure = true;
              </code>
            </div>
            <h2 className="font-label text-2xl font-bold text-on-surface mb-4 group-hover:text-primary-fixed-dim transition-colors">System Management Employee Bank</h2>
            <p className="font-body text-on-surface-variant text-base leading-relaxed mb-8">
              Secure coding implementation for an internal financial portal. Focused on cryptographic storage using Bcrypt, multi-factor authentication via OTP, and mitigating OWASP Top 10 vulnerabilities in session management.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-auto">
            <span className="font-label text-xs bg-secondary-container text-on-secondary-container px-3 py-1 tracking-wider uppercase">Bcrypt</span>
            <span className="font-label text-xs bg-secondary-container text-on-secondary-container px-3 py-1 tracking-wider uppercase">OTP Auth</span>
            <span className="font-label text-xs bg-secondary-container text-on-secondary-container px-3 py-1 tracking-wider uppercase">OWASP</span>
          </div>
        </a>
        
        {/* Card 3: WarasDigital (Medium) */}
        <a 
          href="https://medium.com/@radhwabagas/exploit-on-port-445-use-nmap-hydra-and-metasploit-tools-on-windows-7-and-using-hashcat-to-5e2ad35deb59" 
          target="_blank" 
          rel="noopener noreferrer"
          className="md:col-span-4 bg-surface-container-low group hover:bg-surface-container transition-colors duration-300 relative flex flex-col justify-between p-8 border-l-2 border-transparent hover:border-tertiary-container cursor-pointer block no-underline"
        >
          <div className="flex justify-between items-start mb-8">
            <div className="font-label text-sm text-on-surface-variant flex gap-4 uppercase tracking-widest">
              <span>Offensive</span>
              <span className="text-tertiary-container">03</span>
            </div>
            <span className="material-symbols-outlined text-tertiary-container opacity-50 group-hover:opacity-100 transition-opacity">phishing</span>
          </div>
          <div>
            <h2 className="font-label text-2xl font-bold text-on-surface mb-4 group-hover:text-tertiary-fixed-dim transition-colors">Exploit Windows 7 Eternal Blue Vulnerability</h2>
            <p className="font-body text-on-surface-variant text-base leading-relaxed mb-8">
             We discussed how the EternalBlue vulnerability is a cyberattack tool developed by the NSA (United States) that targets a vulnerability in the Windows SMBv1 protocol, and how it can lead to Remote Code Execution (RCE) by an attacker on unpatched Windows 7 systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="font-label text-xs bg-tertiary-container text-on-tertiary-container px-3 py-1 tracking-wider uppercase">Metasploit</span>
            <span className="font-label text-xs bg-tertiary-container text-on-tertiary-container px-3 py-1 tracking-wider uppercase">SMB PORT 445</span>
            <span className="font-label text-xs bg-tertiary-container text-on-tertiary-container px-3 py-1 tracking-wider uppercase">HYDRA</span>
            <span className="font-label text-xs bg-tertiary-container text-on-tertiary-container px-3 py-1 tracking-wider uppercase">NMAP</span>
          </div>
        </a>
        
        {/* Card 4: CTF Write-ups (Medium) */}
        <a 
          href="https://drive.google.com/file/d/1-3caj4G8ztnLHk1u1GMmGN6XaGQbhfpg/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="md:col-span-4 bg-surface-container-low group hover:bg-surface-container transition-colors duration-300 relative flex flex-col justify-between p-8 border-l-2 border-transparent hover:border-tertiary-container cursor-pointer block no-underline"
        >
          <div className="flex justify-between items-start mb-8">
            <div className="font-label text-sm text-on-surface-variant flex gap-4 uppercase tracking-widest">
              <span>Ctf Participation</span>
              <span className="text-tertiary-container">04</span>
            </div>
            <span className="material-symbols-outlined text-tertiary-container opacity-50 group-hover:opacity-100 transition-opacity">flag</span>
          </div>
          <div>
            <h2 className="font-label text-2xl font-bold text-on-surface mb-4 group-hover:text-tertiary-fixed-dim transition-colors">CTF Participations</h2>
            <p className="font-body text-on-surface-variant text-base leading-relaxed mb-8">
              I am an active CTF competitor with experience in competitions such as NETCOMP, C2C, and various other cybersecurity events, specializing in vulnerability exploitation and system analysis.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="font-label text-xs bg-tertiary-container text-on-tertiary-container px-3 py-1 tracking-wider uppercase">WEB EXPLOITATION</span>
            <span className="font-label text-xs bg-tertiary-container text-on-tertiary-container px-3 py-1 tracking-wider uppercase">REVERSE ENGINEERING</span>
            <span className="font-label text-xs bg-tertiary-container text-on-tertiary-container px-3 py-1 tracking-wider uppercase">OSINT</span>
          </div>
        </a>
        
        {/* Card 5: SQL Injection Simulation (Full Width Bottom) */}
        <a 
          href="/link-sqli" 
          target="_blank" 
          rel="noopener noreferrer"
          className="md:col-span-12 bg-surface-container-low group hover:bg-surface-container transition-colors duration-300 relative flex flex-col md:flex-row gap-8 p-8 border-l-2 border-transparent hover:border-primary-container items-center cursor-pointer block no-underline"
        >
          <div className="flex-1">
            <div className="flex justify-between items-start mb-6">
              <div className="font-label text-sm text-on-surface-variant flex gap-4 uppercase tracking-widest">
                <span>OFFENSIVE</span>
                <span className="text-primary-container">05</span>
              </div>
            </div>
            <h2 className="font-label text-3xl font-bold text-on-surface mb-4 group-hover:text-primary-fixed-dim transition-colors">Offensive Security Hands on Penetration Testing of a Vulnerable Web
Marketplace Platform
</h2>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-8 max-w-3xl">
              Penetration testing was conducted on a web marketplace to identify and exploit vulnerabilities such as SQL injection, IDOR, business logic flaws, and mass assignment.
The results indicated a high risk of data breaches, transaction manipulation, and privilege escalation, highlighting the need for robust input validation, access controls, and server-side security measures prior to deployment.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="font-label text-xs bg-secondary-container text-on-secondary-container px-3 py-1 tracking-wider uppercase">SQL Injection</span>
              <span className="font-label text-xs bg-secondary-container text-on-secondary-container px-3 py-1 tracking-wider uppercase">IDOR</span>
              <span className="font-label text-xs bg-secondary-container text-on-secondary-container px-3 py-1 tracking-wider uppercase">BAC</span>
            </div>
          </div>
          <div className="hidden md:block w-64 bg-surface-container-lowest p-6 border border-outline-variant/20">
            <span className="material-symbols-outlined text-[120px] text-primary-fixed-dim opacity-20">database</span>
          </div>
        </a>
        
      </div>
    </main>
  );
}

export default Projects;