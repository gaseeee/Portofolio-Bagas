import React from 'react';

function CertificationsContact() {
  return (
    <main className="flex-grow flex flex-col items-center w-full">
      {/* Certifications Section */}
      <section className="w-full max-w-7xl px-8 py-24 flex flex-col gap-12 bg-surface">
        <div className="flex flex-col gap-4">
          <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface uppercase">Certifications</h1>
          <p className="font-body text-on-surface-variant text-lg max-w-2xl leading-relaxed">Cryptographic validation of operational capabilities across defensive perimeters and system administration.</p>
        </div>
        
        {/* Container Grid: Diubah menjadi 3 kolom agar 6 kartu terbagi rata (3 di atas, 3 di bawah) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Cert Card 1 */}
          <a 
            href="https://coursera.org/share/2c568c0d0b9644d31acdda91740d0b76" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-surface-container-low p-6 flex flex-col gap-6 hover:bg-surface-container transition-colors border-l-2 border-transparent hover:border-primary group cursor-pointer"
          >
            <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-2xl group-hover:glow-primary">security</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label text-xs text-primary tracking-widest uppercase">Issued 2025</span>
              <h3 className="font-headline text-xl font-bold text-on-surface leading-tight">Google Cyber Security</h3>
              <p className="font-label text-sm text-on-surface-variant mt-2">Credential ID: 3637LXK954YB</p>
            </div>
          </a>
          
          {/* Cert Card 2 */}
          <a 
            href="https://www.credly.com/badges/342df846-dafc-4f2d-9b19-4f5b3319e571/public_url" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-surface-container-low p-6 flex flex-col gap-6 hover:bg-surface-container transition-colors border-l-2 border-transparent hover:border-tertiary group cursor-pointer"
          >
            <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary-container text-2xl group-hover:glow-primary">terminal</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label text-xs text-tertiary-container tracking-widest uppercase">Issued 2025</span>
              <h3 className="font-headline text-xl font-bold text-on-surface leading-tight">Red Hat RH124 - RHA</h3>
              <p className="font-label text-sm text-on-surface-variant mt-2">Credential ID: 342df846-dafc-4f2d-9b19-4f5b3319e571</p>
            </div>
          </a>
          
          {/* Cert Card 3 */}
          <a 
            href="https://drive.google.com/file/d/13ZBreat9aO8qc6sbtRhO_WUe4mSGxv83/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-surface-container-low p-6 flex flex-col gap-6 hover:bg-surface-container transition-colors border-l-2 border-transparent hover:border-primary group cursor-pointer"
          >
            <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl group-hover:glow-primary">router</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label text-xs text-primary tracking-widest uppercase">Issued 2025</span>
              <h3 className="font-headline text-xl font-bold text-on-surface leading-tight">Network Security Huawei ICT</h3>
              <p className="font-label text-sm text-on-surface-variant mt-2">Credential ID: EBG20250930000003</p>
            </div>
          </a>
          
          {/* Cert Card 4 */}
          <a 
            href="https://drive.google.com/file/d/1dO-47lrkR1ohm5B-UCSBPKj54QXvgp5H/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-surface-container-low p-6 flex flex-col gap-6 hover:bg-surface-container transition-colors border-l-2 border-transparent hover:border-primary group cursor-pointer"
          >
            <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl group-hover:glow-primary">policy</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label text-xs text-primary tracking-widest uppercase">Issued 2025</span>
              <h3 className="font-headline text-xl font-bold text-on-surface leading-tight">Cybersecurity Komdigi Program</h3>
              <p className="font-label text-sm text-on-surface-variant mt-2">Credential ID: 19511270840-133</p>
            </div>
          </a>

          {/* Cert Card 5 */}
          <a 
            href="https://drive.google.com/file/d/1JFljAKphY758XyLkrIyQvVXB7ef1vg1y/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-surface-container-low p-6 flex flex-col gap-6 hover:bg-surface-container transition-colors border-l-2 border-transparent hover:border-tertiary group cursor-pointer"
          >
            <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary-container text-2xl group-hover:glow-primary">workspace_premium</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label text-xs text-tertiary-container tracking-widest uppercase">Issued 2026</span>
              <h3 className="font-headline text-xl font-bold text-on-surface leading-tight">Bootcamp Penetration Testing ID-NETWORKES</h3>
              <p className="font-label text-sm text-on-surface-variant mt-2"></p>
            </div>
          </a>

          {/* Cert Card 6 */}
          <a 
            href="https://www.credly.com/badges/e16d95db-99d6-49d0-ab7c-4157738fae6a/public_url" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-surface-container-low p-6 flex flex-col gap-6 hover:bg-surface-container transition-colors border-l-2 border-transparent hover:border-primary group cursor-pointer"
          >
            <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl group-hover:glow-primary">verified</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label text-xs text-primary tracking-widest uppercase">Issued 2025</span>
              <h3 className="font-headline text-xl font-bold text-on-surface leading-tight">ISC2 Candidate</h3>
              <p className="font-label text-sm text-on-surface-variant mt-2">Credential ID: e16d95db-99d6-49d0-ab7c-4157738fae6a</p>
            </div>
          </a>

        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Socials */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="font-headline text-4xl font-black tracking-tighter text-on-surface uppercase">contact me</h2>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed">Ready to bring your ideas to life?</p>
            </div>
            
            <div className="flex flex-col gap-6">
              
              {/* LinkedIn */}
              <a 
                className="flex items-center gap-4 group no-underline" 
                href="https://www.linkedin.com/in/bagaswidyasa" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-surface-container flex items-center justify-center group-hover:bg-primary-container transition-colors">
                  <span className="text-on-surface-variant group-hover:text-on-primary-container"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label text-on-surface group-hover:text-primary transition-colors tracking-widest uppercase text-sm">LinkedIn</span>
                  <span className="font-body text-on-surface-variant text-sm mt-0.5">bagaswidyasa</span>
                </div>
              </a>
              
              {/* GitHub */}
              <a 
                className="flex items-center gap-4 group no-underline" 
                href="https://github.com/gaseeee" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-surface-container flex items-center justify-center group-hover:bg-primary-container transition-colors">
                  <span className="text-on-surface-variant group-hover:text-on-primary-container"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label text-on-surface group-hover:text-primary transition-colors tracking-widest uppercase text-sm">GitHub</span>
                  <span className="font-body text-on-surface-variant text-sm mt-0.5">gaseeee</span>
                </div>
              </a>
              
              {/* Medium */}
              <a 
                className="flex items-center gap-4 group no-underline" 
                href="https://medium.com/@radhwabagas" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-surface-container flex items-center justify-center group-hover:bg-primary-container transition-colors">
                  <span className="text-on-surface-variant group-hover:text-on-primary-container"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12s1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12z"></path></svg></span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label text-on-surface group-hover:text-primary transition-colors tracking-widest uppercase text-sm">Medium</span>
                  <span className="font-body text-on-surface-variant text-sm mt-0.5">@radhwabagas</span>
                </div>
              </a>
              
              {/* Email */}
              <a 
                className="flex items-center gap-4 group no-underline" 
                href="mailto:radhwabagas@gmail.com" 
              >
                <div className="w-10 h-10 bg-surface-container flex items-center justify-center group-hover:bg-primary-container transition-colors">
                  <span className="text-on-surface-variant group-hover:text-on-primary-container"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 4.612l3.824 3.091 3.824-3.091 5.103 6.304h-17.854l5.103-6.304zm10.579 1.317l4.623-3.747v9.458l-4.623-5.711z"></path></svg></span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label text-on-surface group-hover:text-primary transition-colors tracking-widest uppercase text-sm">Email</span>
                  <span className="font-body text-on-surface-variant text-sm mt-0.5">radhwabagas@gmail.com</span>
                </div>
              </a>
              
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-surface p-8 relative">
            <div className="absolute inset-0 glow-primary opacity-20 pointer-events-none"></div>
            <form className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs text-on-surface-variant tracking-widest uppercase">Target Alias [Name]</label>
                <input className="bg-surface-container-lowest border-none text-on-surface font-body p-4 focus:ring-1 focus:ring-primary focus:outline-none ghost-border placeholder-on-surface-variant/50" placeholder="Enter identification" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs text-on-surface-variant tracking-widest uppercase">Secure Comms [Email]</label>
                <input className="bg-surface-container-lowest border-none text-on-surface font-body p-4 focus:ring-1 focus:ring-primary focus:outline-none ghost-border placeholder-on-surface-variant/50" placeholder="Enter secure address" type="email" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs text-on-surface-variant tracking-widest uppercase">Vector [Subject]</label>
                <input className="bg-surface-container-lowest border-none text-on-surface font-body p-4 focus:ring-1 focus:ring-primary focus:outline-none ghost-border placeholder-on-surface-variant/50" placeholder="Enter subject vector" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs text-on-surface-variant tracking-widest uppercase">Payload [Message]</label>
                <textarea className="bg-surface-container-lowest border-none text-on-surface font-body p-4 focus:ring-1 focus:ring-primary focus:outline-none ghost-border placeholder-on-surface-variant/50 resize-none" placeholder="Transmit data..." rows="5"></textarea>
              </div>
              <button className="bg-primary-container text-on-primary-container font-label font-bold py-4 px-8 mt-4 uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,245,255,0.2)] transition-all" type="button">Execute Transmission</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CertificationsContact;