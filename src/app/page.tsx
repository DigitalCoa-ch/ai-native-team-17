'use client';
import { useState, useEffect, useRef } from 'react';

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      {threshold}
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${visible ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
function DocStackIllustration() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 320 }}>
      <ellipse cx="160" cy="115" rx="110" ry="75" fill="#1A3C2A" opacity="0.05"/>
      <rect x="85" y="60" width="155" height="105" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1.5" transform="rotate(-5 162 112)"/>
      <rect x="76" y="55" width="155" height="105" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1.5" transform="rotate(-1.5 153 107)"/>
      <rect x="66" y="50" width="155" height="105" rx="8" fill="white" stroke="#1A3C2A" strokeWidth="1.5" className="animate-float"/>
      <rect x="82" y="70" width="90" height="6" rx="3" fill="#1A3C2A" opacity="0.28"/>
      <rect x="82" y="84" width="125" height="6" rx="3" fill="#1A3C2A" opacity="0.28"/>
      <rect x="82" y="98" width="100" height="6" rx="3" fill="#1A3C2A" opacity="0.28"/>
      <rect x="82" y="112" width="80" height="6" rx="3" fill="#1A3C2A" opacity="0.28"/>
      <circle cx="208" cy="78" r="18" fill="#F0FDF4" stroke="#22C55E" strokeWidth="1.5"/>
      <path d="M200 78l5 5 10-10" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="208" cy="122" r="14" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5"/>
      <path d="M208 114v8l5 4" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ProcessingIllustration() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 320 }}>
      <circle cx="160" cy="100" r="36" fill="#1A3C2A" opacity="0.06" className="animate-pulse-dot"/>
      <circle cx="160" cy="100" r="24" fill="#1A3C2A" opacity="0.14"/>
      <circle cx="160" cy="100" r="15" fill="#1A3C2A"/>
      {[0, 120, 240].map((deg, i) => (
        <circle key={i} cx={160 + 40 * Math.cos((deg * Math.PI) / 180)} cy={100 + 40 * Math.sin((deg * Math.PI) / 180)} r="5" fill={["#1A3C2A","#22C55E","#3B82F6"][i]} opacity="0.6" className="animate-spin-slow" style={{ transformOrigin: "160px 100px", animationDelay: `${i * 0.4}s` }}/>
      ))}
      <rect x="130" y="26" width="60" height="40" rx="6" fill="white" stroke="#1A3C2A" strokeWidth="1.5"/>
      <rect x="140" y="38" width="30" height="4" rx="2" fill="#1A3C2A" opacity="0.4"/>
      <rect x="140" y="48" width="40" height="4" rx="2" fill="#1A3C2A" opacity="0.4"/>
      <rect x="215" y="72" width="60" height="40" rx="6" fill="white" stroke="#1A3C2A" strokeWidth="1.5"/>
      <path d="M231 88 L239 96 L255 80" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="45" y="72" width="60" height="40" rx="6" fill="white" stroke="#1A3C2A" strokeWidth="1.5"/>
      <rect x="55" y="86" width="36" height="4" rx="2" fill="#1A3C2A" opacity="0.4"/>
      <rect x="61" y="94" width="24" height="4" rx="2" fill="#1A3C2A" opacity="0.4"/>
      <rect x="120" y="148" width="80" height="40" rx="6" fill="#F0FDF4" stroke="#22C55E" strokeWidth="1.5"/>
      <rect x="132" y="162" width="44" height="4" rx="2" fill="#22C55E" opacity="0.55"/>
      <rect x="132" y="172" width="28" height="4" rx="2" fill="#22C55E" opacity="0.55"/>
    </svg>
  );
}

function BriefPreviewIllustration() {
  return (
    <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 320 }}>
      <rect x="24" y="16" width="272" height="188" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1.5"/>
      <rect x="24" y="16" width="272" height="44" rx="12" fill="#1A3C2A" opacity="0.06"/>
      <rect x="24" y="52" width="272" height="8" fill="#E5E7EB" opacity="0.3"/>
      <circle cx="48" cy="38" r="11" fill="#1A3C2A"/>
      <rect x="64" y="33" width="88" height="5" rx="2.5" fill="#1A3C2A" opacity="0.3"/>
      <rect x="64" y="42" width="56" height="4" rx="2" fill="#1A3C2A" opacity="0.2"/>
      <rect x="238" y="30" width="46" height="18" rx="9" fill="#F0FDF4" stroke="#22C55E" strokeWidth="1"/>
      <rect x="248" y="37" width="26" height="4" rx="2" fill="#22C55E" opacity="0.65"/>
      <rect x="40" y="74" width="76" height="44" rx="6" fill="#FAFAFA" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="48" y="84" width="32" height="4" rx="2" fill="#94A3B8" opacity="0.5"/>
      <rect x="48" y="96" width="50" height="7" rx="3.5" fill="#1A1A1A" opacity="0.5"/>
      <rect x="128" y="74" width="76" height="44" rx="6" fill="#FAFAFA" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="136" y="84" width="32" height="4" rx="2" fill="#94A3B8" opacity="0.5"/>
      <rect x="136" y="96" width="50" height="7" rx="3.5" fill="#1A1A1A" opacity="0.5"/>
      <rect x="216" y="74" width="76" height="44" rx="6" fill="#FAFAFA" stroke="#E5E7EB" strokeWidth="1"/>
      <rect x="224" y="84" width="32" height="4" rx="2" fill="#94A3B8" opacity="0.5"/>
      <rect x="224" y="96" width="50" height="7" rx="3.5" fill="#1A1A1A" opacity="0.5"/>
      <rect x="40" y="126" width="236" height="26" rx="5" fill="#FEF2F2" stroke="#FECACA" strokeWidth="0.75"/>
      <rect x="52" y="136" width="20" height="7" rx="2.5" fill="#DC2626" opacity="0.7"/>
      <rect x="80" y="137" width="160" height="5" rx="2.5" fill="#475569" opacity="0.3"/>
      <rect x="40" y="158" width="236" height="26" rx="5" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="0.75"/>
      <rect x="52" y="168" width="24" height="7" rx="2.5" fill="#D97706" opacity="0.7"/>
      <rect x="84" y="169" width="140" height="5" rx="2.5" fill="#475569" opacity="0.3"/>
      <rect x="40" y="190" width="236" height="10" rx="5" fill="transparent"/>
      <rect x="52" y="192" width="18" height="6" rx="3" fill="#16A34A" opacity="0.7"/>
      <rect x="78" y="193" width="180" height="4" rx="2" fill="#475569" opacity="0.2"/>
      <rect x="24" y="16" width="272" height="2.5" rx="1.25" fill="#1A3C2A" opacity="0.12">
        <animate attributeName="y" from="16" to="204" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite"/>
      </rect>
    </svg>
  );
}

function HeroDecorations() {
  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      <svg style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", opacity: 0.3 }} xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1.5" fill="#1A3C2A"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#dots)" className="animate-grid-pulse"/>
      </svg>
      <div style={{ position: "absolute", top: "18%", left: "5%", animation: "float 7s ease-in-out infinite" }}>
        <svg width="52" height="66" viewBox="0 0 52 66" fill="none"><rect x="3" y="3" width="30" height="40" rx="4" fill="white" stroke="#1A3C2A" strokeWidth="1.5" opacity="0.65"/><rect x="9" y="13" width="14" height="2" rx="1" fill="#1A3C2A" opacity="0.4"/><rect x="9" y="19" width="18" height="2" rx="1" fill="#1A3C2A" opacity="0.4"/><rect x="9" y="25" width="12" height="2" rx="1" fill="#1A3C2A" opacity="0.4"/></svg>
      </div>
      <div style={{ position: "absolute", top: "28%", right: "8%", animation: "float 9s ease-in-out infinite", animationDelay: "1.2s" }}>
        <svg width="44" height="56" viewBox="0 0 44 56" fill="none"><rect x="3" y="3" width="26" height="36" rx="4" fill="white" stroke="#1A3C2A" strokeWidth="1.5" opacity="0.55"/><rect x="8" y="11" width="12" height="2" rx="1" fill="#1A3C2A" opacity="0.4"/><rect x="8" y="17" width="16" height="2" rx="1" fill="#1A3C2A" opacity="0.4"/><rect x="8" y="23" width="10" height="2" rx="1" fill="#1A3C2A" opacity="0.4"/></svg>
      </div>
      <div style={{ position: "absolute", bottom: "20%", left: "9%", animation: "float 8s ease-in-out infinite", animationDelay: "2.4s" }}>
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><circle cx="19" cy="19" r="15" fill="white" stroke="#1A3C2A" strokeWidth="1.5" opacity="0.45"/><path d="M12 19l5 5 9-10" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <div style={{ position: "absolute", top: "48%", right: "14%", animation: "float 6.5s ease-in-out infinite", animationDelay: "0.5s" }}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="3" y="3" width="30" height="30" rx="6" fill="white" stroke="#1A3C2A" strokeWidth="1.5" opacity="0.3"/><path d="M3 13h30M13 3v30" stroke="#1A3C2A" strokeWidth="0.75" opacity="0.25"/></svg>
      </div>
      <div style={{ position: "absolute", bottom: "35%", right: "5%", animation: "float 5.5s ease-in-out infinite", animationDelay: "1.8s" }}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="12" fill="white" stroke="#3B82F6" strokeWidth="1.5" opacity="0.4"/><path d="M10 15h10M15 10v10" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </div>
      <div style={{ position: "absolute", top: "65%", left: "15%", animation: "float 10s ease-in-out infinite", animationDelay: "0.9s" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polygon points="12,2 22,20 2,20" fill="white" stroke="#D97706" strokeWidth="1.5" opacity="0.4"/></svg>
      </div>
      <div style={{ position: "absolute", bottom: "12%", left: "20%", animation: "float 8.5s ease-in-out infinite", animationDelay: "3s" }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" fill="white" stroke="#1A3C2A" strokeWidth="1.5" opacity="0.35"/></svg>
      </div>
      <div style={{ position: "absolute", top: "8%", left: "40%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,60,42,0.06) 0%, transparent 70%)", animation: "float-slow 10s ease-in-out infinite" }}/>
      <div style={{ position: "absolute", bottom: "15%", right: "25%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)", animation: "float-slow 8s ease-in-out infinite", animationDelay: "2s" }}/>
    </div>
  );
}

export default function Page() {
  return (
    <main style={{ backgroundColor: '#FAFAFA', color: '#1A1A1A', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Nav />
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <SampleBrief />
      <WhoItsFor />
      <Differentiators />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: 32, height: 32, backgroundColor: '#1A3C2A', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 14 }}>B</span>
          </div>
          <span style={{ fontSize: 18, fontWeight: 600, color: '#1A1A1A' }}>BriefEdge</span>
        </div>
        <div style={{ display: 'flex', gap: 32, fontSize: 14, color: '#64748B' }}>
          <a href='#features' style={{ color: '#64748B' }}>Features</a>
          <a href='#how-it-works' style={{ color: '#64748B' }}>How it works</a>
          <a href='#pricing' style={{ color: '#64748B' }}>Pricing</a>
          <a href='#who-its-for' style={{ color: '#64748B' }}>Who it is for</a>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href='#' style={{ fontSize: 14, fontWeight: 500, padding: '8px 16px', borderRadius: 8, color: '#1A3C2A' }}>Sign in</a>
          <a href='#cta' style={{ fontSize: 14, fontWeight: 500, padding: '8px 16px', borderRadius: 8, backgroundColor: '#1A3C2A', color: '#FFFFFF' }}>Request access</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero-bg" style={{ paddingTop: 160, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, position: 'relative', overflow: 'hidden' }}>
      <HeroDecorations />
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: 'relative', zIndex: 1 }}>
        <Reveal>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1A3C2A", marginBottom: 24 }}>
            Equity Research Infrastructure
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#1A1A1A", marginBottom: 24 }}>
            Your analyst reads everything.<br/>Overnight.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "#475569", maxWidth: 560, margin: "0 auto 40px" }}>
            BriefEdge monitors SEC filings across your watchlist and delivers structured analyst briefs before market open.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#cta" style={{ padding: "14px 28px", borderRadius: 8, backgroundColor: "#1A3C2A", color: "#FFFFFF", fontSize: 15, fontWeight: 600 }}>Request early access</a>
            <a href="#sample-brief" style={{ padding: "14px 28px", borderRadius: 8, border: "1px solid #E5E7EB", color: "#475569", fontSize: 15, fontWeight: 500 }}>See a sample brief</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section style={{ paddingTop: 48, paddingBottom: 48, paddingLeft: 24, paddingRight: 24, borderTop: "1px solid #E5E7EB", backgroundColor: "#FFFFFF" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 13, color: "#94A3B8", marginBottom: 16 }}>
          Used by analysts at long/short equity funds, family offices, and research boutiques
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", fontSize: 14, color: "#64748B", flexWrap: "wrap" }}>
          <span>Long/short equity</span><span style={{color:"#CBD5E1"}}>.</span><span>Family offices</span><span style={{color:"#CBD5E1"}}>.</span><span>Research boutiques</span><span style={{color:"#CBD5E1"}}>.</span><span>Multi-manager funds</span>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <Reveal>
          <div style={{ maxWidth: 560, marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 12 }}>The problem</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.2, marginBottom: 16 }}>Your analysts are reading. The market is not waiting.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: '#475569' }}>During earnings season, an analyst might have two to three hours per company before the stock moves. If they are still on page 47 of a 10-Q when a number comes out, the opportunity is gone.</p>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {[{stat:'60-70%',label:'of earnings week spent on extraction',desc:'Hours pulling numbers, building comparison tables, and diffing prior filings - not forming views.'},{label:'Soft signals get missed at scale',desc:'A CFO used normalize for the first time. A question was deflected twice. These shifts precede hard misses by quarters and are invisible at scale.'},{label:'The edge is in what takes time to read',desc:'Numbers are public the moment they are filed. Alpha is in the MD&A narrative, risk factor changes, and tone of the call - which takes the most time.'}].map((item,i)=>(
            <Reveal key={i} delay={i * 80}>
              <div style={{ padding: 32, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}>
                {item.stat && <p style={{ fontSize: 36, fontWeight: 700, color: '#DC2626', marginBottom: 8 }}>{item.stat}</p>}
                <p style={{ fontSize: 16, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>{item.label}</p>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: '#64748B' }}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, borderTop: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'start' }}>
        <Reveal>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 12 }}>The solution</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.2, marginBottom: 16 }}>Your analyst reads everything. Overnight.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#475569', marginBottom: 32 }}>BriefEdge monitors SEC EDGAR continuously, reads every section of every filing overnight, extracts structured metrics, detects language shifts, and delivers a structured brief before market open.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {['Monitors 10-K, 10-Q, and 8-K filings across your watchlist','Reads and parses MD&A, risk factors, and financial statements','Extracts XBRL-tagged metrics automatically','Detects tone changes and hedging language in transcripts','Delivers structured brief before market open'].map((item,i)=>(
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: '#1A3C2A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="10" height="10" fill="none" stroke="#FFFFFF" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span style={{ fontSize: 14, color: '#475569' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div style={{ padding: 24, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16, marginBottom: 16, borderBottom: '1px solid #E5E7EB' }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: '#1A1A1A' }}>Pipeline status</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22C55E' }}/>
                <span style={{ fontSize: 12, color: '#22C55E' }}>Live</span>
              </div>
            </div>
            {[{step:'01',name:'Document ingestion',status:'complete'},{step:'02',name:'NLP parsing',status:'complete'},{step:'03',name:'Metric extraction',status:'complete'},{step:'04',name:'Language analysis',status:'complete'},{step:'05',name:'Flag generation',status:'complete'},{step:'06',name:'Brief assembly',status:'pending'}].map((item,i)=>(
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 12, paddingBottom: 12 }}>
                <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#94A3B8', width: 24 }}>{item.step}</span>
                <span style={{ fontSize: 13, flex: 1, color: '#475569' }}>{item.name}</span>
                <div style={{ width: 80, height: 4, borderRadius: 2, backgroundColor: '#E5E7EB' }}>
                  <div style={{ width: item.status==='complete'?'100%':'0%', height: '100%', borderRadius: 2, backgroundColor: '#1A3C2A', transition: 'width 1s ease' }}/>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 12 }}>How it works</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A' }}>Four steps</h2>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32 }}>
          {[{num:'01',title:'Connect your watchlist',desc:'Add tickers or CIK numbers. No manual setup required per company.'},{num:'02',title:'Agent reads overnight',desc:'10-K, 10-Q, 8-K, and earnings call transcripts parsed and extracted.'},{num:'03',title:'Changes detected',desc:'Metrics compared to prior periods. Language scored across calls.'},{num:'04',title:'Brief delivered',desc:'Structured brief with metrics, flags, guidance diff, and quotes.'}].map((step,i)=>(
            <Reveal key={i} delay={i * 80}>
              <div style={{ padding: 24 }}>
                <div style={{ width: 56, height: 56, marginBottom: 16, backgroundColor: '#1A3C2A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 18 }}>{step.num}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: '#64748B' }}>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, borderTop: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 12 }}>Features</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A' }}>Built for equity research</h2>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {[{title:'Full filing coverage',desc:'Reads 10-K, 10-Q, 8-K, and earnings call transcripts. Processes every section.'},{title:'Period-over-period diff',desc:'Every metric compared against the prior quarter and prior year. Guidance revisions flagged.'},{title:'Language shift detection',desc:'Tracks hedging words, tone changes, and deflected analyst questions across transcripts.'},{title:'Real-time 8-K alerts',desc:'When an 8-K is filed, the brief is delivered within 15 minutes - not the next morning.'},{title:'Structured brief format',desc:'Every brief: key metrics, flags, guidance diff, notable quotes, and tone score.'},{title:'Watchlist scale',desc:'Covers 1 to 500+ companies simultaneously. Adding a 31st stock costs zero analyst time.'}].map((f,i)=>(
            <Reveal key={i} delay={i * 60}>
              <div className="card-hover" style={{ padding: 24, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>{f.title}</p>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: '#64748B' }}>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SampleBrief() {
  return (
    <section id="sample-brief" style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 12 }}>Sample brief</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A' }}>What a brief looks like</h2>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div style={{ maxWidth: 720, margin: '0 auto', padding: 32, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: 24, marginBottom: 24, borderBottom: '1px solid #E5E7EB' }}>
              <div>
                <p style={{ fontSize: 18, fontWeight: 700, color: '#1A1A1A', marginBottom: 4 }}>Microsoft (MSFT) - Q3 FY2025</p>
                <p style={{ fontSize: 13, color: '#94A3B8' }}>Filed: 2025-04-30 | vs Q3 FY2024</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: 16, fontWeight: 700, color: '#1A3C2A' }}>BULLISH</p>
                <p style={{ fontSize: 12, color: '#94A3B8' }}>Tone score</p>
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 16 }}>Key metrics</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
                {[{label:'Revenue',value:'$70.1B (+13% YoY)'},{label:'Operating income',value:'$31.7B (+16% YoY)'},{label:'Azure growth',value:'+35% (vs +31% est)'},{label:'EPS diluted',value:'$3.46 (+18% YoY)'},{label:'Free cash flow',value:'$20.3B (+2% YoY)'},{label:'Q4 guidance midpoint',value:'$73.9B (+$0.8B vs street)'}].map((m,i)=>(
                  <div key={i} style={{ padding: 12, borderRadius: 8, backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
                    <p style={{ fontSize: 12, color: '#94A3B8', marginBottom: 4 }}>{m.label}</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#1A1A1A' }}>{m.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 16 }}>Flags</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', gap: 12, padding: 12, borderRadius: 8, backgroundColor: '#FEF2F2', border: '1px solid #FECACA' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#DC2626', width: 40 }}>RED</span>
                  <p style={{ fontSize: 13, color: '#475569' }}>Capex up 53% YoY ($21.4B vs $14.0B). FCF margin compressed. No normalisation timeline given.</p>
                </div>
                <div style={{ display: 'flex', gap: 12, padding: 12, borderRadius: 8, backgroundColor: '#FFFBEB', border: '1px solid #FDE68A' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#D97706', width: 40 }}>AMBER</span>
                  <p style={{ fontSize: 13, color: '#475569' }}>Headwinds used 6x this call (0x last quarter). CEO tone shifted from confident to measured.</p>
                </div>
                <div style={{ display: 'flex', gap: 12, padding: 12, borderRadius: 8, backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#16A34A', width: 40 }}>GREEN</span>
                  <p style={{ fontSize: 13, color: '#475569' }}>Q4 Azure guided 34-35% vs 31% street consensus. Second consecutive upward revision.</p>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 12 }}>Notable quote</p>
              <p style={{ fontSize: 14, color: '#475569', fontStyle: 'italic', borderLeft: '3px solid #1A3C2A', paddingLeft: 16, lineHeight: 1.65 }}>
                "We are investing heavily in infrastructure today to capture the opportunity ahead, and we expect this to normalise as AI workloads mature." - CFO
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhoItsFor() {
  const personas = [
    { title: 'Buy-side analyst', desc: 'Covers 25-40 stocks. Needs pre-market briefs during earnings season. Values language shift detection most.' },
    { title: 'Portfolio manager', desc: 'Wants one-page summaries for each position. Needs guidance revision alerts while the position can still be acted on.' },
    { title: 'Research associate', desc: 'Spends most of earnings week on extraction work. BriefEdge eliminates that entirely.' },
    { title: 'IR / corporate finance', desc: 'Monitors competitor filings. Uses briefs for competitive intelligence and benchmarking.' },
  ];
  return (
    <section id="who-its-for" style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 12 }}>Who it is for</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A' }}>Built for the buy side</h2>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {personas.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="card-hover" style={{ display: 'flex', gap: 16, padding: 24, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: '#1A3C2A', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, flexShrink: 0 }}>
                  {String.fromCharCode(65 + i)}
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#1A1A1A', marginBottom: 6 }}>{p.title}</p>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: '#64748B' }}>{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  const items = [
    { title: 'Language shift detection', desc: 'Bloomberg gives you the numbers. Neither Bloomberg nor FactSet detect that a CFO used normalize for the first time, or stopped saying confident. That is where the alpha lives.' },
    { title: 'Brief format, not raw data', desc: 'Terminals give analysts more data. BriefEdge gives them exactly the right pieces, pre-structured, with prior period context already applied.' },
    { title: 'Real-time 8-K processing', desc: 'An 8-K filing triggers the full analysis pipeline within 15 minutes. Within the trading session, while the market is still reacting.' },
    { title: 'Watchlist economics', desc: 'Adding a 31st stock costs zero analyst time with BriefEdge. With a terminal it costs reading hours.' },
  ];
  return (
    <section style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, backgroundColor: '#FAFAFA', borderTop: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 12 }}>Why not Bloomberg</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A' }}>Built differently, not just faster</h2>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="card-hover" style={{ padding: 24, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>{item.title}</p>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: '#64748B' }}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    { name: 'Starter', price: '$199', period: '/mo', desc: 'Up to 15 tickers. Daily briefs (10-K, 10-Q). Email delivery. 3-month historical comparison.', highlight: false },
    { name: 'Professional', price: '$599', period: '/mo', desc: 'Up to 75 tickers. Real-time 8-K alerts (15-min delivery). Slack and email. Language shift detection. 8-quarter comparison.', highlight: true },
    { name: 'Enterprise', price: 'Custom', period: '', desc: 'Unlimited tickers. API access. Custom brief format. White-label option. Dedicated onboarding.', highlight: false },
  ];
  return (
    <section id="pricing" style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 12 }}>Pricing</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A', marginBottom: 16 }}>Scale with your watchlist</h2>
            <p style={{ fontSize: 16, color: '#475569', maxWidth: 480, margin: '0 auto' }}>No seat-based pricing. No per-filing costs. Your watchlist grows, your cost does not.</p>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {tiers.map((tier, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{ padding: 32, borderRadius: 12, border: tier.highlight ? '2px solid #1A3C2A' : '1px solid #E5E7EB', backgroundColor: tier.highlight ? '#F0FDF4' : '#FAFAFA', position: 'relative' }}>
                {tier.highlight && (
                  <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', backgroundColor: '#1A3C2A', color: '#FFFFFF', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 12 }}>
                    Most popular
                  </div>
                )}
                <p style={{ fontSize: 16, fontWeight: 700, color: '#1A1A1A', marginBottom: 4 }}>{tier.name}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 16 }}>
                  <span style={{ fontSize: 36, fontWeight: 700, color: '#1A3C2A' }}>{tier.price}</span>
                  <span style={{ fontSize: 14, color: '#94A3B8' }}>{tier.period}</span>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: '#64748B', marginBottom: 16 }}>{tier.desc}</p>
                <a href="#cta" style={{ display: 'inline-block', padding: '10px 20px', borderRadius: 8, backgroundColor: tier.highlight ? '#1A3C2A' : '#FFFFFF', color: tier.highlight ? '#FFFFFF' : '#1A3C2A', fontSize: 14, fontWeight: 600, border: '1px solid #1A3C2A', textAlign: 'center' }}>Get started</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const [email, setEmail] = useState('');
  return (
    <section id="cta" style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, backgroundColor: '#FAFAFA', borderTop: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
        <Reveal>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A', marginBottom: 16 }}>Get your first brief free</h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: '#475569', marginBottom: 40 }}>No credit card required. Add your watchlist and receive your first AI analyst brief before tomorrow morning.</p>
        </Reveal>
        <Reveal delay={80}>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 15, width: '100%', maxWidth: 280, outline: 'none', backgroundColor: '#FFFFFF', color: '#1A1A1A' }} />
            <button style={{ padding: '12px 24px', borderRadius: 8, backgroundColor: '#1A3C2A', color: '#FFFFFF', fontSize: 15, fontWeight: 600, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              Request access
            </button>
          </div>
          <p style={{ fontSize: 12, color: '#94A3B8', marginTop: 16 }}>Join analysts covering 500+ stocks. No card required.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ paddingTop: 32, paddingBottom: 32, paddingLeft: 24, paddingRight: 24, borderTop: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 24, height: 24, backgroundColor: '#1A3C2A', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 12 }}>B</span>
          </div>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#1A1A1A' }}>BriefEdge</span>
        </div>
        <div style={{ display: 'flex', gap: 24, fontSize: 13, color: '#64748B' }}>
          <a href="#" style={{ color: '#64748B' }}>Privacy</a>
          <a href="#" style={{ color: '#64748B' }}>Terms</a>
          <a href="#" style={{ color: '#64748B' }}>Contact</a>
          <a href="#" style={{ color: '#64748B' }}>LinkedIn</a>
        </div>
        <p style={{ fontSize: 12, color: '#94A3B8' }}>AI analyst intelligence for the buy side.</p>
      </div>
    </footer>
  );
}
