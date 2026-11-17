import React from 'react';

function TechLogo({ name }) {
  const iconClass = 'w-4 h-4 shrink-0';

  switch (name) {
    // Blue Team & GRC
    case 'Wazuh':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <path
            d="M3 6L7.5 18L12 9L16.5 18L21 6"
            stroke="#00f5ff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="5" r="1.5" fill="#00f5ff" />
        </svg>
      );
    case 'Elastic':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="11" height="3.5" rx="1.75" fill="#FEC514" />
          <rect x="6" y="10.25" width="15" height="3.5" rx="1.75" fill="#00BFB3" />
          <rect x="3" y="16.5" width="12" height="3.5" rx="1.75" fill="#F04E98" />
        </svg>
      );
    case 'Wireshark':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 16C7 16 9 7 15 6C13.5 10.5 14.5 14 18 16H4Z"
            fill="#1679A7"
            stroke="#38BDF8"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M2 18.5C5 17.5 8 19.5 11 18.5C14 17.5 17 19.5 22 18.5"
            stroke="#38BDF8"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'Network Miner':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <circle cx="10.5" cy="10.5" r="6" stroke="#38BDF8" strokeWidth="1.8" />
          <path d="M15 15L20 20" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 10.5H13M10.5 8V13" stroke="#00f5ff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'Suricata':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3L19 6.5V12C19 16.5 16 19.8 12 21C8 19.8 5 16.5 5 12V6.5L12 3Z"
            stroke="#F97316"
            strokeWidth="1.8"
          />
          <path
            d="M9 12.5L11 14.5L15.5 9.5"
            stroke="#FDBA74"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'SIEM':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="#00f5ff" strokeWidth="1.7" />
          <path
            d="M6 14L9.5 10.5L12.5 13L17.5 8"
            stroke="#34D399"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'ISO 27001':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8.5" stroke="#60A5FA" strokeWidth="1.7" />
          <ellipse cx="12" cy="12" rx="4" ry="8.5" stroke="#60A5FA" strokeWidth="1.4" />
          <path d="M4 12H20" stroke="#60A5FA" strokeWidth="1.4" />
        </svg>
      );
    case 'NIST SP 800-34':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="#34D399" strokeWidth="1.7" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="#34D399" strokeWidth="1.7" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="#34D399" strokeWidth="1.7" />
          <path d="M13 16.5H20M16.5 13V20" stroke="#00f5ff" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case 'MITRE ATT&CK':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" stroke="#F87171" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="3" stroke="#FCA5A5" strokeWidth="1.7" />
          <path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke="#F87171" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );

    // Red Team & Security Tools
    case 'Burp Suite':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <path
            d="M13 3L7 12H12L11 21L17 12H12L13 3Z"
            fill="#FF6633"
            stroke="#FF8559"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'Nmap':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <path
            d="M2.5 12C5 7.5 8.5 5.5 12 5.5C15.5 5.5 19 7.5 21.5 12C19 16.5 15.5 18.5 12 18.5C8.5 18.5 5 16.5 2.5 12Z"
            stroke="#38BDF8"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="12" r="3" fill="#00f5ff" />
        </svg>
      );
    case 'Metasploit':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <path
            d="M5 4H19V14C19 17.5 15.5 19.5 12 21C8.5 19.5 5 17.5 5 14V4Z"
            stroke="#38BDF8"
            strokeWidth="1.8"
          />
          <path
            d="M8.5 15V9L12 12.5L15.5 9V15"
            stroke="#00f5ff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'Nuclei':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(30 12 12)" stroke="#A78BFA" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-30 12 12)" stroke="#00f5ff" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="2" fill="#00f5ff" />
        </svg>
      );
    case 'Postman':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8.5" fill="#FF6C37" />
          <path d="M9 15L15.5 8.5M15.5 8.5H11M15.5 8.5V13" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'SQLMap':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="6" rx="7" ry="2.8" stroke="#FBBF24" strokeWidth="1.7" />
          <path d="M5 6V12C5 13.5 8.1 14.8 12 14.8C15.9 14.8 19 13.5 19 12V6" stroke="#FBBF24" strokeWidth="1.7" />
          <path d="M5 12V18C5 19.5 8.1 20.8 12 20.8C15.9 20.8 19 19.5 19 18V12" stroke="#FBBF24" strokeWidth="1.7" />
        </svg>
      );
    case 'Dirsearch':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <path
            d="M3 7C3 5.9 3.9 5 5 5H9.5L11.5 7H19C20.1 7 21 7.9 21 9V17C21 18.1 20.1 19 19 19H5C3.9 19 3 18.1 3 17V7Z"
            stroke="#34D399"
            strokeWidth="1.7"
          />
          <circle cx="13.5" cy="13" r="2.2" stroke="#00f5ff" strokeWidth="1.5" />
          <path d="M15.2 14.7L17 16.5" stroke="#00f5ff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'Hydra':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <circle cx="8" cy="12" r="3.5" stroke="#F472B6" strokeWidth="1.7" />
          <path d="M11.5 12H20M17 12V15M20 12V15" stroke="#F472B6" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case 'OWASP':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3L19.5 6V11.8C19.5 16.4 16.3 20.1 12 21.3C7.7 20.1 4.5 16.4 4.5 11.8V6L12 3Z"
            stroke="#38BDF8"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="12" r="2.5" fill="#00f5ff" />
        </svg>
      );
    case 'VAPT':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <path d="M7 8L3 12L7 16M17 8L21 12L17 16M13.5 6L10.5 18" stroke="#F87171" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    // Programming Languages & Technologies
    case 'Python':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3C8.8 3 9 4.4 9 4.4V6.5H12.2V7.2H7.4C7.4 7.2 5 6.9 5 10.3C5 13.7 7.1 13.5 7.1 13.5H8.4V11.8C8.4 11.8 8.3 9.7 10.5 9.7H13.8C13.8 9.7 15.7 9.7 15.7 7.9V4.8C15.7 4.8 16 3 12 3Z"
            fill="#3776AB"
          />
          <path
            d="M12 21C15.2 21 15 19.6 15 19.6V17.5H11.8V16.8H16.6C16.6 16.8 19 17.1 19 13.7C19 10.3 16.9 10.5 16.9 10.5H15.6V12.2C15.6 12.2 15.7 14.3 13.5 14.3H10.2C10.2 14.3 8.3 14.3 8.3 16.1V19.2C8.3 19.2 8 21 12 21Z"
            fill="#FFD43B"
          />
        </svg>
      );
    case 'C':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <path d="M12 2.5L20 7.2V16.8L12 21.5L4 16.8V7.2L12 2.5Z" fill="#283593" stroke="#5C6BC0" strokeWidth="1.4" />
          <path
            d="M14.8 9.6C14.1 8.8 13.1 8.3 12 8.3C9.9 8.3 8.3 9.9 8.3 12C8.3 14.1 9.9 15.7 12 15.7C13.1 15.7 14.1 15.2 14.8 14.4"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'JavaScript':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2.5" fill="#F7DF1E" />
          <path d="M10.5 11V16.2C10.5 17.3 9.8 17.8 8.8 17.8C8.1 17.8 7.6 17.4 7.3 16.9" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="M16.6 11.7C16.2 11.2 15.6 11 14.9 11C13.9 11 13.3 11.5 13.3 12.2C13.3 13 14 13.3 15 13.7C16.1 14.1 16.8 14.5 16.8 15.6C16.8 16.7 15.9 17.5 14.6 17.5C13.6 17.5 12.9 17.1 12.5 16.5"
            stroke="#111827"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'PHP':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="9.5" ry="5.5" fill="#777BB4" />
          <text x="12" y="14.2" textAnchor="middle" fill="#FFFFFF" fontSize="6.8" fontWeight="bold" fontFamily="monospace">
            php
          </text>
        </svg>
      );
    case 'MySQL':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="6.5" rx="7" ry="2.5" stroke="#00758F" strokeWidth="1.8" />
          <path d="M5 6.5V17.5C5 18.9 8.1 20 12 20C15.9 20 19 18.9 19 17.5V6.5" stroke="#00758F" strokeWidth="1.8" />
          <path d="M5 12C5 13.4 8.1 14.5 12 14.5C15.9 14.5 19 13.4 19 12" stroke="#F29111" strokeWidth="1.6" />
        </svg>
      );
    case 'Git':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="12" y="2.8" width="13" height="13" rx="2" transform="rotate(45 12 2.8)" fill="#F05032" />
          <circle cx="12" cy="9" r="1.4" fill="#FFFFFF" />
          <circle cx="12" cy="15" r="1.4" fill="#FFFFFF" />
          <circle cx="15.2" cy="12" r="1.4" fill="#FFFFFF" />
          <path d="M12 9V15M12 10.5L15.2 12" stroke="#FFFFFF" strokeWidth="1.4" />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="4" fill="#00f5ff" />
        </svg>
      );
  }
}

function AboutExperience() {
  const blueTeamSkills = [
    'Wazuh',
    'Elastic',
    'Wireshark',
    'Network Miner',
    'Suricata',
    'SIEM',
    'ISO 27001',
    'NIST SP 800-34',
    'MITRE ATT&CK',
  ];

  const redTeamSkills = [
    'Burp Suite',
    'Nmap',
    'Metasploit',
    'Nuclei',
    'Postman',
    'SQLMap',
    'Dirsearch',
    'Hydra',
    'OWASP',
    'VAPT',
  ];

  const programmingLanguages = ['Python', 'C', 'JavaScript', 'PHP'];
  const coreTechnologies = ['MySQL', 'Git'];
  const networkingProtocols = [
    'TCP/IP',
    'DNS',
    'HTTP/HTTPS',
    'SSH',
    'OSI Layer',
    'Firewall',
  ];

  const projectsAndAchievements = [
    {
      role: 'Cybersecurity Speaker',
      title: 'Exploiting the Windows 7 EternalBlue Vulnerability',
      category: 'Live Exploitation & Security Awareness',
      description:
        'Demonstrated SMBv1 protocol vulnerability mechanics (MS17-010), remote code execution impact, and defensive patching strategies for technical audiences.',
      link: '#',
    },
    {
      role: 'SOC Engineering Project',
      title:
        'Security Event Monitoring and Automated Alert Delivery Using Wazuh, Suricata, and SIEM on Telegram Bot',
      category: 'Blue Team • SIEM & SOAR Automation',
      description:
        'Engineered a real-time threat detection pipeline integrating Suricata IDS/IPS and Wazuh SIEM with automated alert notifications delivered directly to Telegram.',
      link: '#',
    },
    {
      role: 'Offensive Security Project',
      title: 'Penetration Testing of a Vulnerable Web Marketplace Platform',
      category: 'Red Team • Web Application VAPT',
      description:
        'Performed end-to-end web application penetration testing covering reconnaissance, OWASP Top 10 vulnerability exploitation, risk severity scoring, and remediation reporting.',
      link: '#',
    },
  ];

  const certifications = [
    {
      title: 'Cisco CyberOps Associate',
      issuer: 'Faculty of Engineering, University of Indonesia',
      tag: 'SOC & Threat Analysis',
      link: '#',
    },
    {
      title: 'Red Hat System Administration I (RH124 - RHA) - Ver. 9.3',
      issuer: 'Red Hat Academy',
      tag: 'Linux Administration',
      link: '#',
    },
    {
      title: 'ISC2 Candidate',
      issuer: 'ISC2',
      tag: 'Cybersecurity Governance',
      link: '#',
    },
    {
      title: 'Network Security',
      issuer: 'HUAWEI ICT ACADEMY',
      tag: 'Network Defense',
      link: '#',
    },
    {
      title: 'Google Cyber Security Professional',
      issuer: 'Google / Coursera',
      tag: 'Security Operations',
      link: '#',
    },
    {
      title: 'Cybersecurity Digital Talent Scholarship',
      issuer: 'Komdigi',
      tag: 'National Cyber Talent',
      link: '#',
    },
    {
      title: 'Bootcamp Penetration Testing',
      issuer: 'ID-Networkers',
      tag: 'Offensive Security',
      link: '#',
    },
    {
      title: 'Cyber Gig Training: Building a Cyber Talent Ecosystem',
      issuer: 'Ministry of Creative Economy',
      tag: 'Industry Readiness',
      link: '#',
    },
  ];

  return (
    <main className="flex-grow flex flex-col">
      {/* Hero Section: Background */}
      <section className="bg-surface-container-low py-20 px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, #00f5ff 0%, transparent 60%)',
          }}
        ></div>
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="font-label text-primary text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary"></span>
              root
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-tight">
              ABOUT <br />
              <span className="text-on-surface-variant">ME</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-2xl mt-4">
              Information Technology student with a focus on the broader
              cybersecurity ecosystem. I bridge the gap between defense and
              offense by actively exploring the roles of SOC Analyst for threat
              detection and Penetration Tester to assess system resilience.
            </p>
          </div>
          <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant/20 p-6 relative group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-outline-variant/20 pb-4">
                <h3 className="font-label text-on-surface font-bold text-sm tracking-widest uppercase">
                  Academic
                </h3>
                <span className="material-symbols-outlined text-primary text-sm">
                  school
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label text-xs text-primary-fixed-dim"></span>
                <h4 className="font-bold text-on-surface font-headline">
                  CEP CCIT FTUI, University of Indonesia
                </h4>
                <p className="text-sm text-on-surface-variant font-body">
                  2024 - 2026
                </p>
                <p className="text-sm text-on-surface-variant font-body">
                  Information Technology, Cyber Security
                </p>
              </div>
              <div className="w-full h-[1px] bg-outline-variant/10 my-2"></div>
              <div className="flex flex-col gap-1">
                <span className="font-label text-xs text-primary-fixed-dim"></span>
                <h4 className="font-bold text-on-surface font-headline">
                  Asia e University
                </h4>
                <p className="text-sm text-on-surface-variant font-body">
                  2024 - Present
                </p>
                <p className="text-sm text-on-surface-variant font-body">
                  Bachelor of Information and Communication Technology (BICT)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Matrix Section */}
      <section className="bg-surface py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 border-l-4 border-primary pl-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">
              Technology &amp; Skills
            </h2>
            <p className="font-label text-on-surface-variant text-sm tracking-widest">
              SECURITY TOOLS, GOVERNANCE FRAMEWORKS, LANGUAGES &amp; CORE INFRASTRUCTURE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blue Team & GRC Card */}
            <div className="bg-surface-container border border-outline-variant/20 p-6 hover:bg-surface-bright transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-label font-bold text-lg text-on-surface tracking-wide">
                    BLUE TEAM &amp; GRC
                  </h3>
                  <p className="font-label text-xs text-on-surface-variant mt-0.5">
                    SIEM, Monitoring &amp; Frameworks
                  </p>
                </div>
                <span className="material-symbols-outlined text-tertiary-fixed-dim">
                  shield
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {blueTeamSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/25 px-3 py-1.5 hover:border-primary/60 transition-colors"
                  >
                    <TechLogo name={skill} />
                    <span className="font-label text-xs text-on-surface-variant group-hover:text-on-surface transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Red Team & VAPT Card */}
            <div className="bg-surface-container border border-outline-variant/20 p-6 hover:bg-surface-bright transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-label font-bold text-lg text-on-surface tracking-wide">
                    RED TEAM &amp; VAPT
                  </h3>
                  <p className="font-label text-xs text-on-surface-variant mt-0.5">
                    Web &amp; Infrastructure Penetration Testing
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary-fixed-dim">
                  terminal
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {redTeamSkills.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-2 bg-secondary-container/80 border border-outline-variant/20 px-3 py-1.5 hover:border-primary/60 transition-colors"
                  >
                    <TechLogo name={tool} />
                    <span className="font-label text-xs text-on-secondary-container uppercase">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages, Technologies & Networking Card */}
            <div className="bg-surface-container border border-outline-variant/20 p-6 hover:bg-surface-bright transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-label font-bold text-lg text-on-surface tracking-wide">
                    LANGUAGES &amp; TECH
                  </h3>
                  <p className="font-label text-xs text-on-surface-variant mt-0.5">
                    Programming, Database &amp; Networking
                  </p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">
                  code
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2.5">
                  {programmingLanguages.map((lang) => (
                    <div
                      key={lang}
                      className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/30 px-3 py-1.5 hover:border-primary/60 transition-colors"
                    >
                      <TechLogo name={lang} />
                      <span className="font-label text-xs text-on-surface">
                        {lang}
                      </span>
                    </div>
                  ))}
                  {coreTechnologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/30 px-3 py-1.5 hover:border-primary/60 transition-colors"
                    >
                      <TechLogo name={tech} />
                      <span className="font-label text-xs text-on-surface">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="w-full h-[1px] bg-outline-variant/15"></div>

                <div className="flex flex-col gap-2">
                  <span className="font-label text-xs text-primary-fixed-dim uppercase tracking-wider">
                    Networking
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {networkingProtocols.map((proto) => (
                      <span
                        key={proto}
                        className="bg-surface-container-lowest border border-outline-variant/25 text-on-surface-variant font-label text-xs px-2.5 py-1"
                      >
                        {proto}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-surface-container-low py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 border-l-4 border-primary pl-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">
              PROFESSIONAL EXPERIENCE &amp; ORGANIZATION
            </h2>
            <p className="font-label text-on-surface-variant text-sm tracking-widest">
              HANDS-ON SECURITY ASSESSMENTS, IT GRC &amp; ORGANIZATIONAL ROLES
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Experience Item 1: Penetration Tester */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 bg-surface-container p-6 border-l-2 border-transparent hover:border-primary hover:bg-surface-bright transition-all group">
              <div className="md:col-span-1 flex flex-col gap-1.5">
                <span className="font-label text-xs text-primary-fixed-dim tracking-widest uppercase">
                  JUN 2026 - SEP 2026
                </span>
                <span className="font-label text-sm font-bold text-on-surface">
                  PT. Znitech Digital Indonesia
                </span>
                <span className="font-label text-xs text-on-surface-variant">
                  Jakarta, Indonesia • Work Experience
                </span>
              </div>
              <div className="md:col-span-3 flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-headline text-xl font-bold text-on-surface">
                    Penetration Tester
                  </h3>
                  <span className="bg-secondary-container text-on-secondary-container font-label text-xs px-2.5 py-1">
                    Client: PT Bank Tabungan Negara (Persero) Tbk
                  </span>
                </div>
                <ul className="flex flex-col gap-2 font-body text-sm text-on-surface-variant leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 shrink-0"></span>
                    <span>
                      Conducted authorized penetration testing and security
                      assessments across internal banking infrastructure and
                      enterprise services, covering network exposure,
                      application services, and security configurations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 shrink-0"></span>
                    <span>
                      Identified and validated security vulnerabilities through
                      reconnaissance, service enumeration, vulnerability
                      scanning, and manual security testing across the
                      authorized assessment scope.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 shrink-0"></span>
                    <span>
                      Analyzed technical evidence and security impact to assess
                      finding severity, affected assets, exploitability, and
                      potential business risks.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 shrink-0"></span>
                    <span>
                      Prepared professional penetration testing reports
                      containing vulnerability details, technical evidence,
                      impact analysis, remediation recommendations, and retest
                      considerations for client stakeholders.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2: IT GRC Intern */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 bg-surface-container p-6 border-l-2 border-transparent hover:border-primary hover:bg-surface-bright transition-all group">
              <div className="md:col-span-1 flex flex-col gap-1.5">
                <span className="font-label text-xs text-primary-fixed-dim tracking-widest uppercase">
                  JUN 2026 - AUG 2026
                </span>
                <span className="font-label text-sm font-bold text-on-surface">
                  Politeknik Negeri Jakarta
                </span>
                <span className="font-label text-xs text-on-surface-variant">
                  Depok, Indonesia • Internship
                </span>
              </div>
              <div className="md:col-span-3 flex flex-col gap-3">
                <h3 className="font-headline text-xl font-bold text-on-surface">
                  IT Governance Risk Compliance Intern
                </h3>
                <ul className="flex flex-col gap-2 font-body text-sm text-on-surface-variant leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 shrink-0"></span>
                    <span>
                      Supported IT risk and business continuity assessments
                      across critical institutional applications by evaluating
                      system criticality, operational impact, recovery
                      requirements, and responsible personnel.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 shrink-0"></span>
                    <span>
                      Developed Business Continuity Plan (BCP) and IT recovery
                      documentation covering ransomware, data leakage, zero-day
                      vulnerabilities, and service disruption scenarios using
                      ISO 27001 and NIST SP 800-34 as references.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 shrink-0"></span>
                    <span>
                      Classified applications by business impact and recovery
                      priority to support continuity planning and structured
                      incident response for institutional IT services.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 shrink-0"></span>
                    <span>
                      Produced governance and security documentation that
                      translates technical risks into actionable controls,
                      recovery procedures, and escalation requirements for GRC
                      stakeholders.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Item 3: Organizational Experience */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 bg-surface-container p-6 border-l-2 border-transparent hover:border-primary hover:bg-surface-bright transition-all group">
              <div className="md:col-span-1 flex flex-col gap-1.5">
                <span className="font-label text-xs text-primary-fixed-dim tracking-widest uppercase">
                  MAY 2025 - MAY 2026
                </span>
                <span className="font-label text-sm font-bold text-on-surface">
                  Komunitas Android CCIT-FTUI
                </span>
                <span className="font-label text-xs text-on-surface-variant">
                  Depok, Indonesia • Organization
                </span>
              </div>
              <div className="md:col-span-3 flex flex-col gap-3">
                <h3 className="font-headline text-xl font-bold text-on-surface">
                  Visual Media Creative
                </h3>
                <ul className="flex flex-col gap-2 font-body text-sm text-on-surface-variant leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 shrink-0"></span>
                    <span>
                      Responsible for creating and managing visual content for
                      community publications (posters, social media feeds, and
                      event materials).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 shrink-0"></span>
                    <span>
                      Collaborated with other divisions to support the promotion
                      of events, workshops, and internal community activities.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary mt-2 shrink-0"></span>
                    <span>
                      Managed the design workflow from planning to finalization
                      with tight deadlines.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Achievements Section */}
      <section className="bg-surface py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 border-l-4 border-primary pl-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">
              PROJECTS &amp; ACHIEVEMENTS
            </h2>
            <p className="font-label text-on-surface-variant text-sm tracking-widest">
              PORTFOLIO ARTIFACTS &amp; TECHNICAL DEMONSTRATIONS FOR BNSP COMPETENCY EVIDENCE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsAndAchievements.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container border border-outline-variant/20 p-6 flex flex-col justify-between gap-6 hover:border-primary/60 hover:bg-surface-bright transition-all group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-label text-xs text-primary-fixed-dim uppercase tracking-wider">
                      {item.role}
                    </span>
                    <span className="material-symbols-outlined text-primary text-base">
                      folder_special
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-on-surface leading-snug">
                    {item.title}
                  </h3>
                  <span className="bg-secondary-container text-on-secondary-container font-label text-xs px-2.5 py-1 w-fit">
                    {item.category}
                  </span>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-label text-xs text-primary uppercase tracking-widest hover:underline pt-2 border-t border-outline-variant/15"
                >
                  <span>View Artifact</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_outward
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Training Section */}
      <section className="bg-surface-container-low py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2 border-l-4 border-primary pl-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">
              CERTIFICATIONS &amp; TRAINING
            </h2>
            <p className="font-label text-on-surface-variant text-sm tracking-widest">
              VERIFIED CREDENTIALS, BOOTCAMPS &amp; INDUSTRY TRAINING
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-surface-container border border-outline-variant/20 p-5 flex items-center justify-between gap-4 hover:border-primary/60 hover:bg-surface-bright transition-all group"
              >
                <div className="flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim mt-0.5">
                    verified
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-headline text-base font-bold text-on-surface leading-snug">
                      {cert.title}
                    </h3>
                    <p className="font-body text-xs text-on-surface-variant">
                      {cert.issuer}
                    </p>
                    <span className="font-label text-[11px] text-primary-fixed-dim uppercase tracking-wider mt-1">
                      {cert.tag}
                    </span>
                  </div>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${cert.title} certificate`}
                  className="shrink-0 bg-surface-container-lowest border border-outline-variant/30 p-2 text-on-surface-variant hover:text-primary hover:border-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-base">
                    open_in_new
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutExperience;