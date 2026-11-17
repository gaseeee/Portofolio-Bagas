import React from 'react';

function AboutExperience() {
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
                  2024 - 2028
                </p>
                <p className="text-sm text-on-surface-variant font-body">
                  Bachelor Information and Communication Technology
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
              Here are the technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Offensive / Defensive Card */}
            <div className="bg-surface-container border border-outline-variant/20 p-6 hover:bg-surface-bright transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-label font-bold text-lg text-on-surface tracking-wide">
                  BLUE TEAM
                </h3>
                <span className="material-symbols-outlined text-tertiary-fixed-dim">
                  shield
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim"></span>
                  <span className="font-label text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                    Wazuh
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-fixed-dim"></span>
                  <span className="font-label text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                    Elastic
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim"></span>
                  <span className="font-label text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                    Wireshark
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-fixed-dim"></span>
                  <span className="font-label text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                    Network Miner
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim"></span>
                  <span className="font-label text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                    Suricata
                  </span>
                </li>
              </ul>
            </div>

            {/* Tools Card */}
            <div className="bg-surface-container border border-outline-variant/20 p-6 hover:bg-surface-bright transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-label font-bold text-lg text-on-surface tracking-wide">
                  RED TEAM
                </h3>
                <span className="material-symbols-outlined text-primary-fixed-dim">
                  terminal
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary-container text-on-secondary-container font-label text-xs px-2 py-1">
                  NMAP
                </span>
                <span className="bg-secondary-container text-on-secondary-container font-label text-xs px-2 py-1">
                  SQLMAP
                </span>
                <span className="bg-secondary-container text-on-secondary-container font-label text-xs px-2 py-1">
                  DIRSEARCH
                </span>
                <span className="bg-secondary-container text-on-secondary-container font-label text-xs px-2 py-1">
                  HYDRA
                </span>
                <span className="bg-secondary-container text-on-secondary-container font-label text-xs px-2 py-1">
                  BURPSUITE
                </span>
                <span className="bg-secondary-container text-on-secondary-container font-label text-xs px-2 py-1">
                  OWASP
                </span>
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-surface-container border border-outline-variant/20 p-6 hover:bg-surface-bright transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-label font-bold text-lg text-on-surface tracking-wide">
                  PROGRAMMING LANGUAGES
                </h3>
                <span className="material-symbols-outlined text-on-surface-variant">
                  code
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface font-label text-xs px-2 py-1">
                    Python
                  </span>
                  <span className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface font-label text-xs px-2 py-1">
                    C
                  </span>
                  <span className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface font-label text-xs px-2 py-1">
                    JavaScript
                  </span>
                  <span className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface font-label text-xs px-2 py-1">
                    PHP
                  </span>
                </div>
                <div className="w-full h-[1px] bg-outline-variant/10"></div>
                <div className="flex flex-col gap-2">
                  <span className="font-label text-xs text-on-surface-variant uppercase"></span>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface font-label text-xs px-2 py-1"></span>
                    <span className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface font-label text-xs px-2 py-1"></span>
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
    </main>
  );
}

export default AboutExperience;