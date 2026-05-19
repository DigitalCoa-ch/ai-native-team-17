'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
type Page = 'home' | 'login' | 'dashboard' | 'watchlist' | 'brief' | 'alerts' | 'settings';

export default function Page() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedBrief, setSelectedBrief] = useState<string | null>(null);
  const [showAddDrawer, setShowAddDrawer] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); }); },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));
    const handleScroll = () => {
      const nav = document.getElementById('main-nav');
      if (nav) { window.scrollY > 60 ? nav.classList.add('nav-scrolled') : nav.classList.remove('nav-scrolled'); }
    };
    window.addEventListener('scroll', handleScroll);
    return () => { observer.disconnect(); window.removeEventListener('scroll', handleScroll); };
  }, [currentPage]);

  const navigateTo = useCallback((page: Page) => { setCurrentPage(page); window.scrollTo(0, 0); }, []);

  return (
    <div className="page-transition">
      {currentPage === 'home' && <HomePage onLogin={() => navigateTo('login')} onGetAccess={() => navigateTo('login')} />}
      {currentPage === 'login' && <LoginPage onLogin={() => { setIsLoggedIn(true); navigateTo('dashboard'); }} onBack={() => navigateTo('home')} />}
      {currentPage === 'dashboard' && isLoggedIn && <DashboardPage onViewBrief={(id) => { setSelectedBrief(id); navigateTo('brief'); }} onNavigate={navigateTo} />}
      {currentPage === 'watchlist' && isLoggedIn && <WatchlistPage onViewBrief={(id) => { setSelectedBrief(id); navigateTo('brief'); }} showAddDrawer={showAddDrawer} setShowAddDrawer={setShowAddDrawer} onNavigate={navigateTo} />}
      {currentPage === 'brief' && isLoggedIn && <BriefPage briefId={selectedBrief} onBack={() => navigateTo('dashboard')} onNavigate={navigateTo} />}
      {currentPage === 'alerts' && isLoggedIn && <AlertsPage alertFilter="all" setAlertFilter={() => {}} onViewBrief={(id) => { setSelectedBrief(id); navigateTo('brief'); }} onNavigate={navigateTo} />}
      {currentPage === 'settings' && isLoggedIn && <SettingsPage onNavigate={navigateTo} />}
    </div>
  );
}


function HomePage({ onLogin, onGetAccess }: { onLogin: () => void; onGetAccess: () => void }) {
  return (
    <div>
      <Nav onLogin={onLogin} onGetAccess={onGetAccess} isHome />
      <Hero />
      <StatsBar />
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
    </div>
  );
}


function Nav({ onLogin, onGetAccess, isHome }: { onLogin: () => void; onGetAccess: () => void; isHome?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav id="main-nav" className={"fixed top-0 left-0 right-0 z-50 bg-white border-b transition-all duration-200 " + (isHome ? "" : "hidden")} style={{ height: "64px", borderColor: "#E5E2DC" }}>
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.reload()}>
          <div className="w-[14px] h-[14px] rounded-sm" style={{ background: "#1A3C2A" }} />
          <span className="font-display text-[20px] font-bold" style={{ color: "#1A3C2A" }}>BriefEdge</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium" style={{ color: "#6B6560" }}>Features</a>
          <a href="#how-it-works" className="text-sm font-medium" style={{ color: "#6B6560" }}>How it works</a>
          <a href="#pricing" className="text-sm font-medium" style={{ color: "#6B6560" }}>Pricing</a>
          <a href="#who-its-for" className="text-sm font-medium" style={{ color: "#6B6560" }}>Who it is for</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button onClick={onLogin} className="text-sm font-semibold" style={{ color: "#1A3C2A" }}>Login</button>
          <button onClick={onGetAccess} className="btn-primary">Get early access</button>
        </div>
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: "#6B6560" }}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">{mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4 bg-white" style={{ borderColor: "#E5E2DC" }}>
          <a href="#features" className="text-sm" style={{ color: "#6B6560" }}>Features</a>
          <a href="#how-it-works" className="text-sm" style={{ color: "#6B6560" }}>How it works</a>
          <a href="#pricing" className="text-sm" style={{ color: "#6B6560" }}>Pricing</a>
          <a href="#who-its-for" className="text-sm" style={{ color: "#6B6560" }}>Who it is for</a>
          <button onClick={onLogin} className="text-sm font-semibold text-left" style={{ color: "#1A3C2A" }}>Login</button>
          <button onClick={onGetAccess} className="btn-primary w-full text-center">Get early access</button>
        </div>
      )}
    </nav>
  );
}


function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-6" style={{ background: "#F8F7F4", paddingTop: "120px", paddingBottom: "96px" }}>
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid md:grid-cols-[55%_45%] gap-12 items-center">
          <div>
            <div className={"flex items-center gap-3 mb-6 " + (loaded ? "animate-fade-in-up" : "opacity-0")} style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
              <div className="w-[24px] h-[1.5px]" style={{ background: "#1A3C2A" }} />
              <span className="text-[11px] font-semibold uppercase" style={{ color: "#1A3C2A", letterSpacing: "0.1em", fontFamily: "Plus Jakarta Sans, system-ui, sans-serif" }}>AI-powered equity research</span>
            </div>
            <h1 className={"font-display mb-6 " + (loaded ? "animate-fade-in-up" : "opacity-0")} style={{ fontSize: "58px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, animationDelay: "150ms", animationFillMode: "forwards" }}>
              <span style={{ color: "#1A1916" }}>30 stocks.</span><br />
              <span style={{ color: "#1A1916" }}>Every filing.</span><br />
              <span style={{ color: "#1A3C2A" }}>One 5-minute brief.</span>
            </h1>
            <p className={"text-base max-w-[480px] " + (loaded ? "animate-fade-in-up" : "opacity-0")} style={{ animationDelay: "300ms", animationFillMode: "forwards", color: "#6B6560", lineHeight: 1.65 }}>
              AI reads 10-Ks, 10-Qs, 8-Ks, and earnings transcripts across your watchlist then delivers a structured brief with every change, flag, and language shift before market open.
            </p>
            <div className={"flex gap-3 mt-9 " + (loaded ? "animate-fade-in-up" : "opacity-0")} style={{ animationDelay: "450ms", animationFillMode: "forwards" }}>
              <button className="btn-primary px-[28px] py-[14px] text-[15px]">Get early access</button>
              <button className="btn-secondary px-[28px] py-[14px] text-[15px]">See a sample brief</button>
            </div>
            <div className={"mt-12 flex flex-wrap items-center gap-3 " + (loaded ? "animate-fade-in-up" : "opacity-0")} style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
              <span className="text-xs" style={{ color: "#9E9891" }}>Used by analysts at:</span>
              {["Long/short equity", "Family offices", "Research boutiques", "500+ stocks covered"].map((label) => (
                <span key={label} className="px-3 py-1.5 rounded text-xs" style={{ background: "#F0EDE8", border: "1px solid #E5E2DC", color: "#9E9891" }}>{label}</span>
              ))}
            </div>
          </div>
          <div className={" " + (loaded ? "animate-fade-in-right" : "opacity-0")} style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            <div className="bg-white rounded-xl p-5 border" style={{ boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)", borderColor: "#E5E2DC" }}>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[12px] font-semibold" style={{ color: "#1A1916" }}>EDGAR Monitor</span>
                <div className="flex items-center gap-1.5">
                  <div className="relative">
                    <div className="w-[8px] h-[8px] rounded-full" style={{ background: "#1A7340" }} />
                    <div className="absolute inset-0 w-[8px] h-[8px] rounded-full animate-pulse-ring" style={{ background: "#1A7340" }} />
                  </div>
                  <span className="text-[11px]" style={{ color: "#1A7340" }}>Live</span>
                </div>
              </div>
              <div className="border-t pt-4 space-y-3" style={{ borderColor: "#E5E2DC" }}>
                {[{ticker:"MSFT",type:"10-Q",time:"2 min ago",flag:"green"},{ticker:"NVDA",type:"8-K",time:"8 min ago",flag:"red"},{ticker:"AAPL",type:"10-K",time:"34 min ago",flag:"green"},{ticker:"GOOGL",type:"8-K",time:"1 hr ago",flag:"amber"}].map((row,i) => (
                  <div key={i} className={"flex items-center justify-between py-2 " + (loaded ? "animate-fade-in-up" : "opacity-0")} style={{ animationDelay: (400 + i * 80) + "ms", animationFillMode: "forwards" }}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[14px] font-semibold" style={{ color: "#1A1916" }}>{row.ticker}</span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold rounded" style={{ background: "#1A3C2A", color: "white" }}>{row.type}</span>
                      <span className="text-[11px]" style={{ color: "#9E9891" }}>{row.time}</span>
                    </div>
                    <div className="w-[8px] h-[8px] rounded-full" style={{ background: row.flag === "red" ? "#C0392B" : row.flag === "amber" ? "#B7760D" : "#1A7340" }} />
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t" style={{ borderColor: "#E5E2DC" }}>
                <span className="font-mono text-[11px]" style={{ color: "#9E9891" }}>4 filings processed today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function StatsBar() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.3 }); if (ref.current) observer.observe(ref.current); return () => observer.disconnect(); }, []);
  const stats = [{number:"30+",label:"Companies covered per analyst"},{number:"15 min",label:"8-K brief delivery time"},{number:"5 min",label:"Average brief read time"},{number:"100%",label:"Human approval required"}];
  return (
    <section ref={ref} className="py-10 px-6" style={{ background: "#1A3C2A" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat,i) => (
            <div key={i} className="text-center">
              <div className="font-display text-[36px] font-bold text-white mb-1" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(10px)", transition: "all 600ms ease-out " + (i * 150) + "ms" }}>{stat.number}</div>
              <div className="text-[13px]" style={{ color: "rgba(255, 255, 255, 0.7)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Problem() {
  const cards = [
    {stat:"60-70%",label:"Of earnings week lost to extraction",desc:"Analysts spend hours pulling numbers and manually comparing periods not forming views. That is the job AI should do."},
    {label:"Soft signals get missed at scale",desc:"Headwinds for the first time. A deflected analyst question. These language shifts precede hard misses by quarters and are invisible to humans reading across 30 names."},
    {label:"The edge is in what takes time to read",desc:"Numbers are public the moment they are filed. By the time an analyst reads the EPS, the market has too. The alpha is in the MD&A narrative."}
  ];
  return (
    <section className="py-24 px-6" style={{ background: "#F8F7F4" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase" style={{ color: "#1A3C2A", letterSpacing: "0.1em" }}>The problem</span>
          <h2 className="font-display text-[40px] font-bold mt-4" style={{ color: "#1A1916", letterSpacing: "-0.02em" }}>Your analysts are reading. The market is not waiting.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card,i) => (
            <div key={i} className="bg-white rounded-xl p-8 border scroll-animate" style={{ borderColor: "#E5E2DC", transitionDelay: (i * 100) + "ms" }}>
              {card.stat && <div className="font-display text-[42px] font-bold mb-3" style={{ color: "#C0392B" }}>{card.stat}</div>}
              <h3 className="text-[18px] font-bold mb-3" style={{ fontFamily: "Plus Jakarta Sans, system-ui, sans-serif", color: "#1A1916" }}>{card.label}</h3>
              <p className="text-[14px]" style={{ color: "#6B6560", lineHeight: 1.65 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Solution() {
  const items = ['Monitors 10-K, 10-Q, and 8-K filings across your watchlist','Reads and parses MD&A, risk factors, financial statements','Extracts XBRL-tagged metrics automatically','Detects tone changes and hedging language in transcripts','Delivers structured brief before market open'];
  const steps = [{num:'01',name:'Document ingestion',status:'LIVE'},{num:'02',name:'NLP parsing',status:'LIVE'},{num:'03',name:'Metric extraction',status:'LIVE'},{num:'04',name:'Language analysis',status:'LIVE'},{num:'05',name:'Flag generation',status:'LIVE'},{num:'06',name:'Brief assembly',status:'PENDING'}];
  return (
    <section className="py-24 px-6" style={{ background: 'rgba(26, 60, 42, 0.04)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <span className="text-[11px] font-semibold uppercase" style={{ color: '#1A3C2A', letterSpacing: '0.1em' }}>The solution</span>
          <h2 className="font-display text-[40px] font-bold mt-4" style={{ color: '#1A1916', letterSpacing: '-0.02em' }}>Your analyst reads everything. Overnight.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            {items.map((item,i) => (
              <div key={i} className="flex items-center gap-3 text-[15px] font-medium" style={{ color: '#1A1916', fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
                <span style={{ color: '#1A3C2A', fontSize: '12px' }}>check</span>
                {item}
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-6 border" style={{ borderColor: '#E5E2DC' }}>
            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-[12px] font-semibold" style={{ color: '#1A1916' }}>Pipeline status</span>
              <div className="flex items-center gap-1.5">
                <div className="w-[6px] h-[6px] rounded-full" style={{ background: '#1A7340' }} />
                <span className="text-[11px]" style={{ color: '#1A7340' }}>LIVE</span>
              </div>
            </div>
            <div className="space-y-4">
              {steps.map((step,i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="font-mono text-[11px]" style={{ color: '#9E9891', width: '20px' }}>{step.num}</span>
                  <span className="text-[13px] font-medium flex-1" style={{ color: '#1A1916', fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>{step.name}</span>
                  <div className="flex-1 h-[4px] rounded-full overflow-hidden" style={{ background: '#E5E2DC' }}>
                    <div className="h-full rounded-full animate-shimmer" style={{ width: step.status === 'PENDING' ? '0%' : '100%', background: step.status === 'PENDING' ? '#E5E2DC' : '#1A7340' }} />
                  </div>
                  <span className="font-mono text-[9px] font-semibold" style={{ color: step.status === 'LIVE' ? '#1A7340' : '#B7760D', padding: '2px 6px', borderRadius: '4px', background: step.status === 'LIVE' ? 'rgba(26, 115, 64, 0.08)' : 'rgba(183, 118, 13, 0.08)' }}>{step.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function HowItWorks() {
  const steps = [{num:'01',title:'Connect your watchlist',desc:'Add tickers or CIK numbers. BriefEdge monitors SEC EDGAR and transcript providers continuously.'},{num:'02',title:'Agent reads every filing overnight',desc:'10-K, 10-Q, 8-K, and earnings transcripts are parsed and extracted into structured data.'},{num:'03',title:'Changes detected and flagged',desc:'Every metric compared to prior periods. Language scored and compared to prior call.'},{num:'04',title:'Brief delivered before market open',desc:'Structured PDF or email with metrics, flags, guidance diff, and notable quotes.'}];
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase" style={{ color: '#1A3C2A', letterSpacing: '0.1em' }}>How it works</span>
          <h2 className="font-display text-[40px] font-bold mt-4" style={{ color: '#1A1916', letterSpacing: '-0.02em' }}>Four steps to analyst intelligence</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step,i) => (
            <div key={i} className="relative p-6 scroll-animate" style={{ transitionDelay: (i * 100) + 'ms' }}>
              <div className="font-display text-[48px] font-bold opacity-10 mb-2" style={{ color: '#1A3C2A' }}>{step.num}</div>
              <h3 className="text-[18px] font-bold mb-2" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif', color: '#1A1916' }}>{step.title}</h3>
              <p className="text-[14px]" style={{ color: '#6B6560', lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Features() {
  const features = [
    {num:'F.01',title:'Full filing coverage',desc:'Reads 10-K, 10-Q, 8-K, and earnings call transcripts. Processes every section MD&A, Risk Factors, financial statements, guidance.'},
    {num:'F.02',title:'Period-over-period diff',desc:'Every metric compared against the prior quarter and prior year. Guidance revisions and margin shifts flagged automatically.'},
    {num:'F.03',title:'Language shift detection',desc:'Tracks hedging words, tone changes, and deflected analyst questions across transcripts.'},
    {num:'F.04',title:'Real-time 8-K alerts',desc:'When an 8-K is filed, the brief is delivered within 15 minutes, not the next morning.'},
    {num:'F.05',title:'Structured brief format',desc:'Every brief: key metrics, red/amber/green flags, guidance diff, notable quotes, management tone score.'},
    {num:'F.06',title:'Watchlist scale',desc:'Covers 1 to 500+ companies simultaneously. Adding a 31st stock costs zero analyst time.'},
  ];
  return (
    <section id="features" className="py-24 px-6" style={{ background: '#F8F7F4' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase" style={{ color: '#1A3C2A', letterSpacing: '0.1em' }}>Features</span>
          <h2 className="font-display text-[40px] font-bold mt-4" style={{ color: '#1A1916', letterSpacing: '-0.02em' }}>Everything your analyst needs. Automated.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f,i) => (
            <div key={i} className="bg-white rounded-xl p-7 border scroll-animate" style={{ borderColor: '#E5E2DC', transitionDelay: (i * 60) + 'ms' }}>
              <div className="font-mono text-[11px] mb-3" style={{ color: '#9E9891' }}>{f.num}</div>
              <h3 className="text-[17px] font-bold mb-2" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif', color: '#1A1916' }}>{f.title}</h3>
              <p className="text-[14px]" style={{ color: '#6B6560', lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function SampleBrief() {
  return (
    <section id="sample-brief" className="py-24 px-6" style={{ background: '#1A3C2A' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}>Sample brief</span>
          <h2 className="font-display text-[40px] font-bold mt-4 text-white" style={{ letterSpacing: '-0.02em' }}>What a brief looks like</h2>
          <p className="text-[15px] mt-3" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Real output from our analysis pipeline</p>
        </div>
        <div className="max-w-[800px] mx-auto bg-white rounded-2xl p-10" style={{ borderRadius: '16px' }}>
          <div className="flex items-center justify-between mb-6 pb-6 border-b" style={{ borderColor: '#E5E2DC' }}>
            <div>
              <div className="font-mono text-[13px] font-semibold mb-1" style={{ color: '#1A1916' }}>MSFT US EQUITY  Q3 FY2025</div>
              <div className="text-[12px]" style={{ color: '#9E9891' }}>Filed Apr 30, 2025  Earnings call Apr 29, 2025</div>
            </div>
            <div className="px-3 py-1.5 rounded" style={{ background: '#1A7340' }}>
              <span className="font-mono text-[11px] font-semibold text-white">BULLISH</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[{label:'Revenue',value:'$70.1B',delta:'+13% YoY',positive:true},{label:'Operating income',value:'$31.7B',delta:'+16% YoY',positive:true},{label:'Azure growth',value:'+35%',delta:'vs +31% est',positive:true},{label:'EPS diluted',value:'$3.46',delta:'Beat +$0.17',positive:true},{label:'Free cash flow',value:'$20.3B',delta:'+2% YoY',positive:true},{label:'Q4 guidance',value:'$73.9B',delta:'+$0.8B vs st',positive:true}].map((m,i) => (
              <div key={i} className="text-center p-3 rounded-lg" style={{ background: '#F8F7F4' }}>
                <div className="font-mono text-[10px] mb-1" style={{ color: '#9E9891' }}>{m.label}</div>
                <div className="font-display text-[22px] font-bold" style={{ color: '#1A1916' }}>{m.value}</div>
                <div className="text-[12px]" style={{ color: m.positive ? '#1A7340' : '#C0392B' }}>{m.delta}</div>
              </div>
            ))}
          </div>
          <div className="space-y-3 mb-6">
            {[{type:'RED',title:'New risk factor',body:'Geographic concentration of AI infrastructure not present in prior year filing.',color:'red'},{type:'RED',title:'Capex spike +53%',body:'$21.4B vs $14.0B prior year. FCF margin compressed.',color:'red'},{type:'AMBER',title:'Language shift',body:'Headwinds used 6x this call (0x last quarter). CEO tone shifted.',color:'amber'},{type:'GREEN',title:'Guidance raised',body:'Q4 Azure guided 34-35% vs 31% street consensus.',color:'green'}].map((flag,i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg" style={{ background: flag.color === 'red' ? 'rgba(192, 57, 43, 0.08)' : flag.color === 'amber' ? 'rgba(183, 118, 13, 0.08)' : 'rgba(26, 115, 64, 0.08)', border: '1px solid ' + (flag.color === 'red' ? 'rgba(192, 57, 43, 0.2)' : flag.color === 'amber' ? 'rgba(183, 118, 13, 0.2)' : 'rgba(26, 115, 64, 0.2)') }}>
                <span className="font-mono text-[9px] font-semibold uppercase mt-0.5" style={{ color: flag.color === 'red' ? '#C0392B' : flag.color === 'amber' ? '#B7760D' : '#1A7340' }}>{flag.type}</span>
                <div>
                  <div className="text-[14px] font-bold mb-1" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif', color: '#1A1916' }}>{flag.title}</div>
                  <div className="text-[13px]" style={{ color: '#6B6560' }}>{flag.body}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="border-l-4 pl-4 italic font-display text-[15px]" style={{ borderColor: '#1A3C2A', color: '#6B6560' }}>
            &ldquo;We are investing heavily in infrastructure today to capture the opportunity ahead, and we expect this to normalise as AI workloads mature.&rdquo;
            <div className="font-mono text-[11px] mt-2" style={{ color: '#9E9891' }}>— CFO, on capex</div>
          </div>
        </div>
      </div>
    </section>
  );
}


function WhoItsFor() {
  const personas = [{letter:'A',title:'Buy-side analyst',desc:'Covers 25-40 stocks. Needs pre-market briefs during earnings season. Values language shift detection most.'},{letter:'B',title:'Portfolio manager',desc:'Wants one-page summaries for each position, not raw filings. Needs guidance revision alerts immediately.'},{letter:'C',title:'Research associate',desc:'Spends most of earnings week on extraction work. BriefEdge eliminates that entirely.'},{letter:'D',title:'IR / corporate finance',desc:'Monitors competitor filings and tracks how analysts read them. Uses briefs for competitive intelligence.'}];
  return (
    <section id="who-its-for" className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase" style={{ color: '#1A3C2A', letterSpacing: '0.1em' }}>Who it is for</span>
          <h2 className="font-display text-[40px] font-bold mt-4" style={{ color: '#1A1916', letterSpacing: '-0.02em' }}>Built for the buy side</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {personas.map((p,i) => (
            <div key={i} className="bg-white rounded-xl p-8 border-t-4 scroll-animate" style={{ borderColor: '#1A3C2A', borderTopWidth: '3px', transitionDelay: (i * 100) + 'ms' }}>
              <div className="font-display text-[32px] font-bold mb-3" style={{ color: '#1A3C2A' }}>{p.letter}</div>
              <h3 className="text-[17px] font-bold mb-2" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif', color: '#1A1916' }}>{p.title}</h3>
              <p className="text-[14px]" style={{ color: '#6B6560', lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Differentiators() {
  const items = [
    {title:'Language shift detection',desc:'Bloomberg gives you the numbers. Neither Bloomberg nor FactSet detect that a CFO used normalise for the first time when describing capex. That is where the soft signal alpha lives.'},
    {title:'Brief format, not raw data',desc:'Terminals give analysts more data. BriefEdge gives them less but exactly the right pieces, pre-structured, with prior period context already applied.'},
    {title:'Real-time 8-K processing',desc:'An 8-K filing triggers the full analysis pipeline within 15 minutes. Not in tomorrow morning is morning pack, but within the trading session.'},
    {title:'Watchlist economics',desc:'Adding a 31st stock costs zero analyst time with BriefEdge. With a terminal it costs reading hours. The value compounds as the watchlist grows.'},
  ];
  return (
    <section className="py-24 px-6" style={{ background: '#F8F7F4' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase" style={{ color: '#1A3C2A', letterSpacing: '0.1em' }}>Why not Bloomberg</span>
          <h2 className="font-display text-[40px] font-bold mt-4" style={{ color: '#1A1916', letterSpacing: '-0.02em' }}>Built differently, not just faster</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item,i) => (
            <div key={i} className="bg-white rounded-xl p-8 border scroll-animate" style={{ borderColor: '#E5E2DC', transitionDelay: (i * 100) + 'ms' }}>
              <h3 className="text-[17px] font-bold mb-3" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif', color: '#1A1916' }}>{item.title}</h3>
              <p className="text-[14px]" style={{ color: '#6B6560', lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Pricing() {
  const tiers = [
    {name:'Starter',price:'$199',period:'/mo',desc:'Up to 15 tickers. Daily briefs. Email delivery. 3-month historical comparison.',best:'Individual analysts',highlight:false},
    {name:'Professional',price:'$599',period:'/mo',desc:'Up to 75 tickers. Real-time 8-K alerts. Slack + email. Language shift detection. 8-quarter comparison.',best:'Recommended for analysts and PMs',highlight:true},
    {name:'Enterprise',price:'Custom',period:'',desc:'Unlimited tickers. API access. Custom brief format. White-label option.',best:'Asset managers and multi-PM funds',highlight:false},
  ];
  return (
    <section id="pricing" className="py-24 px-6" style={{ background: '#F8F7F4' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase" style={{ color: '#1A3C2A', letterSpacing: '0.1em' }}>Pricing</span>
          <h2 className="font-display text-[40px] font-bold mt-4" style={{ color: '#1A1916', letterSpacing: '-0.02em' }}>Scale with your watchlist</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier,i) => (
            <div key={i} className={"bg-white rounded-xl p-8 border scroll-animate " + (tier.highlight ? 'border-[#1A3C2A] border-2' : '')} style={{ borderColor: '#E5E2DC', transitionDelay: (i * 100) + 'ms' }}>
              {tier.highlight && <div className="text-center mb-2"><span className="px-3 py-1 text-[11px] font-semibold rounded-full" style={{ background: '#1A3C2A', color: 'white' }}>Most Popular</span></div>}
              <div className="text-[18px] font-bold mb-1" style={{ color: '#1A1916', fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>{tier.name}</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display text-[36px] font-bold" style={{ color: '#1A3C2A' }}>{tier.price}</span>
                <span className="text-[14px]" style={{ color: '#9E9891' }}>{tier.period}</span>
              </div>
              <p className="text-[14px] mb-4" style={{ color: '#6B6560', lineHeight: 1.65 }}>{tier.desc}</p>
              <div className="text-[11px] font-semibold" style={{ color: '#1A3C2A' }}>{tier.best}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function CTASection() {
  return (
    <section className="py-24 px-6" style={{ background: '#1A3C2A' }}>
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="font-display text-[40px] font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>Get your first brief free</h2>
        <p className="text-[15px] mb-10" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>No credit card required. Add your watchlist and receive your first AI analyst brief before tomorrow morning.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input type="email" placeholder="your@email.com" className="w-full sm:w-80 px-4 py-3 rounded-xl bg-white text-[15px]" style={{ color: '#1A1916' }} />
          <button className="px-6 py-3.5 rounded-xl font-semibold text-[15px] whitespace-nowrap" style={{ background: '#C9913A', color: '#1A1916' }}>Request access</button>
        </div>
        <p className="text-[12px] mt-4" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Join analysts covering 500+ stocks. No card required.</p>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="py-12 px-6 border-t" style={{ background: '#1A1916', borderColor: 'rgba(255,255,255,0.1)' }}>
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-[14px] h-[14px] rounded-sm" style={{ background: '#1A3C2A' }} />
          <span className="text-[16px] font-bold" style={{ color: 'white' }}>BriefEdge</span>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-[12px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <span>AI analyst intelligence for the buy side.</span>
          <a href="#" style={{ color: 'rgba(255,255,255,0.5)' }}>Privacy</a>
          <a href="#" style={{ color: 'rgba(255,255,255,0.5)' }}>Terms</a>
          <a href="#" style={{ color: 'rgba(255,255,255,0.5)' }}>Contact</a>
        </div>
      </div>
    </footer>
  );
}


function LoginPage({ onLogin, onBack }: { onLogin: () => void; onBack: () => void }) {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: '#F8F7F4' }}>
      <div className="bg-white rounded-2xl p-10 w-full max-w-[440px] border" style={{ borderColor: '#E5E2DC' }}>
        <div className="flex items-center gap-2 mb-8">
          <div className="w-[14px] h-[14px] rounded-sm" style={{ background: '#1A3C2A' }} />
          <span className="font-display text-[20px] font-bold" style={{ color: '#1A3C2A' }}>BriefEdge</span>
        </div>
        <div className="flex mb-8 border-b" style={{ borderColor: '#E5E2DC' }}>
          <button onClick={() => setIsSignUp(false)} className={"flex-1 pb-3 text-[14px] font-semibold " + (!isSignUp ? 'border-b-2' : 'text-muted')} style={{ borderColor: !isSignUp ? '#1A3C2A' : 'transparent', color: !isSignUp ? '#1A3C2A' : '#9E9891' }}>Sign in</button>
          <button onClick={() => setIsSignUp(true)} className={"flex-1 pb-3 text-[14px] font-semibold " + (isSignUp ? 'border-b-2' : 'text-muted')} style={{ borderColor: isSignUp ? '#1A3C2A' : 'transparent', color: isSignUp ? '#1A3C2A' : '#9E9891' }}>Create account</button>
        </div>
        <div className="space-y-4">
          {!isSignUp && <div>
            <label className="text-[12px] font-semibold uppercase" style={{ color: '#1A1916', letterSpacing: '0.04em' }}>Email address</label>
            <input type="email" className="form-input mt-1" placeholder="you@company.com" />
          </div>}
          {isSignUp && <div>
            <label className="text-[12px] font-semibold uppercase" style={{ color: '#1A1916', letterSpacing: '0.04em' }}>Full name</label>
            <input type="text" className="form-input mt-1" placeholder="Alex Chen" />
          </div>}
          {isSignUp && <div>
            <label className="text-[12px] font-semibold uppercase" style={{ color: '#1A1916', letterSpacing: '0.04em' }}>Email address</label>
            <input type="email" className="form-input mt-1" placeholder="you@company.com" />
          </div>}
          {!isSignUp && <div>
            <label className="text-[12px] font-semibold uppercase" style={{ color: '#1A1916', letterSpacing: '0.04em' }}>Password</label>
            <input type="password" className="form-input mt-1" placeholder="Enter your password" />
          </div>}
          {isSignUp && <div>
            <label className="text-[12px] font-semibold uppercase" style={{ color: '#1A1916', letterSpacing: '0.04em' }}>Password</label>
            <input type="password" className="form-input mt-1" placeholder="Create a password" />
          </div>}
          {!isSignUp && <div className="flex justify-end">
            <a href="#" className="text-[13px]" style={{ color: '#1A3C2A' }}>Forgot password?</a>
          </div>}
          <button onClick={onLogin} className="btn-primary w-full py-3 text-[15px] mt-4">Sign in</button>
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 border-t" style={{ borderColor: '#E5E2DC' }}></div>
            <span className="text-[12px]" style={{ color: '#9E9891' }}>or</span>
            <div className="flex-1 border-t" style={{ borderColor: '#E5E2DC' }}></div>
          </div>
          <button className="btn-secondary w-full py-3 text-[14px] flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.65l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}


function DashboardPage({ onViewBrief, onNavigate }: { onViewBrief: (id: string) => void; onNavigate: (page: any) => void }) {
  const briefs = [
    {id:'msft',ticker:'MSFT',period:'Q3 FY2025',borderColor:'#C0392B',flags:{red:2,amber:1,green:1},metrics:['Revenue $70.1B','+13% YoY','Azure +35%']},
    {id:'amzn',ticker:'AMZN',period:'Q2 2025',borderColor:'#B7760D',flags:{red:0,amber:3,green:0},metrics:['Revenue $143B','+11% YoY','AWS +19%']},
    {id:'nvda',ticker:'NVDA',period:'Q2 FY2025',borderColor:'#1A7340',flags:{red:0,amber:0,green:2},metrics:['Revenue $30B','+122% YoY','Data center $28B']},
  ];
  const alerts = [
    {ticker:'NVDA',type:'8-K',time:'8 min ago',summary:'Capex increase and new risk factor added',flag:'red'},
    {ticker:'MSFT',type:'10-Q',time:'2 hr ago',summary:'Azure guidance raised for Q4',flag:'green'},
    {ticker:'GOOGL',type:'8-K',time:'3 hr ago',summary:'Language shift in earnings call',flag:'amber'},
  ];
  return (
    <div className="min-h-screen" style={{ background: '#F8F7F4' }}>
      <div className="sidebar">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-[14px] h-[14px] rounded-sm" style={{ background: '#1A3C2A' }} />
          <span className="font-display text-[18px] font-bold" style={{ color: '#1A3C2A' }}>BriefEdge</span>
        </div>
        <div className="space-y-1">
          <button className="sidebar-nav-item active">Dashboard</button>
          <button className="sidebar-nav-item" onClick={() => onNavigate('watchlist')}>Watchlist</button>
          <button className="sidebar-nav-item" onClick={() => onNavigate('brief')}>Briefs</button>
          <button className="sidebar-nav-item" onClick={() => onNavigate('alerts')}>Alerts <span className="ml-auto px-2 py-0.5 text-[10px] rounded-full" style={{ background: '#C0392B', color: 'white' }}>4</span></button>
          <button className="sidebar-nav-item" onClick={() => onNavigate('settings')}>Settings</button>
        </div>
        <div className="absolute bottom-6 left-4 right-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-semibold text-white" style={{ background: '#1A3C2A' }}>AC</div>
            <div className="text-[13px]" style={{ color: '#1A1916' }}>Alex Chen</div>
          </div>
          <button className="text-[12px]" style={{ color: '#9E9891' }}>Sign out</button>
        </div>
      </div>
      <div className="ml-[240px] p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-[22px] font-bold" style={{ color: '#1A1916' }}>Good morning, Alex.</h1>
            <p className="text-[14px]" style={{ color: '#6B6560' }}>Earnings season is active.</p>
          </div>
          <div className="px-3 py-1.5 rounded-full text-[12px] font-semibold" style={{ background: '#1A7340', color: 'white' }}>3 New briefs ready</div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[{num:'3',label:'Unread red flags',color:'#C0392B'},{num:'4',label:'Briefs ready today',color:'#1A7340'},{num:'6',label:'Amber signals',color:'#B7760D'},{num:'15 min',label:'Avg. delivery',color:'#1A3C2A'}].map((stat,i) => (
            <div key={i} className="bg-white rounded-xl p-5 border" style={{ borderColor: '#E5E2DC' }}>
              <div className="font-mono text-[32px] font-semibold mb-1" style={{ color: stat.color }}>{stat.num}</div>
              <div className="text-[12px] uppercase" style={{ color: '#9E9891' }}>{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[18px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif', color: '#1A1916' }}>Todays briefs</h2>
            <select className="text-[13px] px-3 py-1.5 rounded border" style={{ borderColor: '#E5E2DC', color: '#6B6560' }}>
              <option>Sort by: Severity</option>
            </select>
          </div>
          <div className="space-y-4">
            {briefs.map((brief,i) => (
              <div key={i} className="bg-white rounded-xl p-6 border-l-4 cursor-pointer" style={{ borderColor: brief.borderColor, borderLeftWidth: '4px' }} onClick={() => onViewBrief(brief.id)}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[16px] font-semibold" style={{ color: '#1A1916' }}>{brief.ticker}</span>
                    <span className="text-[12px]" style={{ color: '#6B6560' }}>{brief.period}</span>
                  </div>
                  <div className="flex gap-2">
                    {brief.flags.red > 0 && <span className="px-2 py-1 text-[10px] font-semibold rounded" style={{ background: '#C0392B', color: 'white' }}>{brief.flags.red} RED</span>}
                    {brief.flags.amber > 0 && <span className="px-2 py-1 text-[10px] font-semibold rounded" style={{ background: '#B7760D', color: 'white' }}>{brief.flags.amber} AMBER</span>}
                    {brief.flags.green > 0 && <span className="px-2 py-1 text-[10px] font-semibold rounded" style={{ background: '#1A7340', color: 'white' }}>{brief.flags.green} GREEN</span>}
                  </div>
                </div>
                <div className="flex gap-4 text-[13px]" style={{ color: '#6B6560' }}>
                  {brief.metrics.map((m,j) => <span key={j}>{m}</span>)}
                </div>
                <div className="mt-3 text-[13px] font-semibold" style={{ color: '#1A3C2A' }}>View brief</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border" style={{ borderColor: '#E5E2DC' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[16px] font-bold" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif', color: '#1A1916' }}>Recent alerts</h2>
            <button className="text-[13px]" style={{ color: '#1A3C2A' }}>View all</button>
          </div>
          <div className="space-y-3">
            {alerts.map((alert,i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b" style={{ borderColor: '#E5E2DC' }}>
                <div className="w-[8px] h-[8px] rounded-full" style={{ background: alert.flag === 'red' ? '#C0392B' : alert.flag === 'amber' ? '#B7760D' : '#1A7340' }} />
                <span className="font-mono text-[13px] font-semibold" style={{ color: '#1A1916' }}>{alert.ticker}</span>
                <span className="px-2 py-0.5 text-[10px] rounded" style={{ background: '#1A3C2A', color: 'white' }}>{alert.type}</span>
                <span className="text-[13px] flex-1" style={{ color: '#6B6560' }}>{alert.summary}</span>
                <span className="text-[11px]" style={{ color: '#9E9891' }}>{alert.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


function WatchlistPage({ onViewBrief, showAddDrawer, setShowAddDrawer, onNavigate }: { onViewBrief: (id: string) => void; showAddDrawer: boolean; setShowAddDrawer: (v: boolean) => void; onNavigate: (page: any) => void }) {
  const companies = [
    {ticker:'MSFT',company:'Microsoft Corp.',priority:'HIGH',lastFiling:'10-Q',filingDate:'Apr 30, 2025',status:'Ready'},
    {ticker:'AMZN',company:'Amazon.com Inc.',priority:'HIGH',lastFiling:'10-Q',filingDate:'Apr 28, 2025',status:'Ready'},
    {ticker:'NVDA',company:'NVIDIA Corp.',priority:'HIGH',lastFiling:'8-K',filingDate:'May 1, 2025',status:'Processing'},
    {ticker:'GOOG',company:'Alphabet Inc.',priority:'MEDIUM',lastFiling:'10-Q',filingDate:'Apr 25, 2025',status:'Ready'},
    {ticker:'META',company:'Meta Platforms',priority:'MEDIUM',lastFiling:'10-Q',filingDate:'Apr 27, 2025',status:'Waiting'},
    {ticker:'AAPL',company:'Apple Inc.',priority:'LOW',lastFiling:'-',filingDate:'-',status:'Waiting'},
  ];
  const suggestions = ['TSLA','AMD','CRM','NFLX','JPM','GS'];
  return (
    <div className="min-h-screen" style={{ background: '#F8F7F4' }}>
      <div className="sidebar">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-[14px] h-[14px] rounded-sm" style={{ background: '#1A3C2A' }} />
          <span className="font-display text-[18px] font-bold" style={{ color: '#1A3C2A' }}>BriefEdge</span>
        </div>
        <div className="space-y-1">
          <button className="sidebar-nav-item" onClick={() => onNavigate('dashboard')}>Dashboard</button>
          <button className="sidebar-nav-item active">Watchlist</button>
          <button className="sidebar-nav-item" onClick={() => onNavigate('brief')}>Briefs</button>
          <button className="sidebar-nav-item" onClick={() => onNavigate('alerts')}>Alerts <span className="ml-auto px-2 py-0.5 text-[10px] rounded-full" style={{ background: '#C0392B', color: 'white' }}>4</span></button>
          <button className="sidebar-nav-item" onClick={() => onNavigate('settings')}>Settings</button>
        </div>
      </div>
      <div className="ml-[240px] p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-display text-[28px] font-bold" style={{ color: '#1A1916' }}>Watchlist</h1>
            <p className="text-[14px]" style={{ color: '#6B6560' }}>6 companies  4 briefs ready today</p>
          </div>
          <button onClick={() => setShowAddDrawer(true)} className="btn-primary">Add ticker</button>
        </div>
        <div className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: '#E5E2DC' }}>
          <div className="grid grid-cols-[100px_1fr_80px_100px_100px_100px_80px] gap-4 px-5 py-3 border-b" style={{ background: '#F8F7F4', borderColor: '#E5E2DC' }}>
            <span className="text-[11px] font-semibold uppercase" style={{ color: '#9E9891' }}>Ticker</span>
            <span className="text-[11px] font-semibold uppercase" style={{ color: '#9E9891' }}>Company</span>
            <span className="text-[11px] font-semibold uppercase" style={{ color: '#9E9891' }}>Priority</span>
            <span className="text-[11px] font-semibold uppercase" style={{ color: '#9E9891' }}>Last filing</span>
            <span className="text-[11px] font-semibold uppercase" style={{ color: '#9E9891' }}>Filing date</span>
            <span className="text-[11px] font-semibold uppercase" style={{ color: '#9E9891' }}>Status</span>
            <span className="text-[11px] font-semibold uppercase" style={{ color: '#9E9891' }}>Actions</span>
          </div>
          {companies.map((c,i) => (
            <div key={i} className="grid grid-cols-[100px_1fr_80px_100px_100px_100px_80px] gap-4 px-5 py-4 table-row" style={{ borderColor: '#E5E2DC' }}>
              <div className="flex items-center gap-2">
                <div className="w-[8px] h-[8px] rounded-full" style={{ background: c.priority === 'HIGH' ? '#C0392B' : c.priority === 'MEDIUM' ? '#B7760D' : '#9E9891' }} />
                <span className="font-mono text-[14px] font-semibold" style={{ color: '#1A1916' }}>{c.ticker}</span>
              </div>
              <span className="text-[14px]" style={{ color: '#6B6560' }}>{c.company}</span>
              <span className={"px-2 py-1 text-[10px] font-semibold rounded text-center " + (c.priority === 'HIGH' ? 'bg-red-light text-red' : c.priority === 'MEDIUM' ? 'bg-amber-light text-amber' : 'text-muted')} style={{ background: c.priority === 'HIGH' ? 'rgba(192,57,43,0.08)' : c.priority === 'MEDIUM' ? 'rgba(183,118,13,0.08)' : 'transparent', color: c.priority === 'HIGH' ? '#C0392B' : c.priority === 'MEDIUM' ? '#B7760D' : '#9E9891' }}>{c.priority}</span>
              <span className="font-mono text-[13px]" style={{ color: '#1A1916' }}>{c.lastFiling}</span>
              <span className="font-mono text-[13px]" style={{ color: '#9E9891' }}>{c.filingDate}</span>
              <span className={"px-2 py-1 text-[10px] font-semibold rounded text-center " + (c.status === 'Ready' ? 'bg-green-light text-green' : c.status === 'Processing' ? 'bg-amber-light text-amber' : 'bg-border-light text-muted')} style={{ background: c.status === 'Ready' ? 'rgba(26,115,64,0.08)' : c.status === 'Processing' ? 'rgba(183,118,13,0.08)' : 'rgba(0,0,0,0.05)', color: c.status === 'Ready' ? '#1A7340' : c.status === 'Processing' ? '#B7760D' : '#9E9891' }}>{c.status}</span>
              <div className="flex items-center gap-2">
                <button onClick={() => onViewBrief(c.ticker.toLowerCase())} className="text-[12px] font-semibold" style={{ color: '#1A3C2A' }}>View</button>
                <button className="text-[12px]" style={{ color: '#9E9891' }}>x</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-[13px]" style={{ color: '#9E9891' }}>Showing 6 of 6 companies</div>
      </div>
      {showAddDrawer && (
        <div className="fixed inset-0 z-50" style={{ background: 'rgba(0,0,0,0.3)' }} onClick={() => setShowAddDrawer(false)}>
          <div className="absolute right-0 top-0 bottom-0 w-[380px] bg-white border-l animate-slide-in-right" style={{ borderColor: '#E5E2DC' }} onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b flex items-center justify-between" style={{ borderColor: '#E5E2DC' }}>
              <h3 className="text-[20px] font-bold" style={{ color: '#1A1916', fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>Add to watchlist</h3>
              <button onClick={() => setShowAddDrawer(false)} className="text-[20px]" style={{ color: '#9E9891' }}>x</button>
            </div>
            <div className="p-6">
              <input type="text" className="form-input text-[15px]" placeholder="Search by ticker or company name" style={{ padding: '14px 16px' }} />
              <div className="mt-6">
                <span className="text-[11px] font-semibold uppercase" style={{ color: '#9E9891' }}>Popular</span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {suggestions.map((s,i) => (
                    <button key={i} className="px-3 py-2 rounded border text-[13px]" style={{ borderColor: '#E5E2DC', color: '#1A1916' }}>{s}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


function BriefPage({ briefId, onBack, onNavigate }: { briefId: string | null; onBack: () => void; onNavigate: (page: any) => void }) {
  return (
    <div className="min-h-screen" style={{ background: '#F8F7F4' }}>
      <div className="max-w-[900px] mx-auto py-8 px-6">
        <div className="mb-6">
          <button onClick={onBack} className="text-[14px] font-semibold" style={{ color: '#1A3C2A' }}>Back to dashboard</button>
        </div>
        <div className="bg-white rounded-2xl p-10 border" style={{ borderColor: '#E5E2DC' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="font-display text-[32px] font-bold" style={{ color: '#1A1916' }}>Microsoft Corp. (MSFT)</h1>
              <p className="text-[13px]" style={{ color: '#6B6560' }}>Q3 FY2025</p>
            </div>
            <div className="px-3 py-1.5 rounded" style={{ background: '#1A7340' }}>
              <span className="font-mono text-[11px] font-semibold text-white">BULLISH</span>
            </div>
          </div>
          <div className="text-[13px] mb-4" style={{ color: '#9E9891' }}>10-Q filed Apr 30, 2025  Earnings call Apr 29, 2025  Compared to Q3 FY2024</div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-[13px]" style={{ background: 'rgba(183,118,13,0.08)', color: '#B7760D', border: '1px solid rgba(183,118,13,0.2)' }}>
            <span>Tone:</span>
            <span className="font-semibold">Measured</span>
            <span>down from Confident</span>
          </div>
          <div className="border-t my-6" style={{ borderColor: '#E5E2DC' }}></div>
          <div className="mb-6">
            <span className="text-[11px] font-semibold uppercase" style={{ color: '#9E9891', letterSpacing: '0.08em' }}>Key metrics</span>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[{label:'Revenue',value:'$70.1B',delta:'+13% YoY'},{label:'Operating income',value:'$31.7B',delta:'+16% YoY'},{label:'Azure growth',value:'+35%',delta:'vs +31% est'},{label:'EPS diluted',value:'$3.46',delta:'Beat +$0.17'},{label:'Free cash flow',value:'$20.3B',delta:'+2% YoY'},{label:'Q4 guidance',value:'$73.9B',delta:'+$0.8B vs st'}].map((m,i) => (
                <div key={i} className="p-4 rounded-lg" style={{ background: '#F8F7F4' }}>
                  <div className="font-mono text-[10px] mb-1" style={{ color: '#9E9891' }}>{m.label}</div>
                  <div className="font-display text-[22px] font-bold" style={{ color: '#1A1916' }}>{m.value}</div>
                  <div className="text-[12px]" style={{ color: '#1A7340' }}>{m.delta}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t my-6" style={{ borderColor: '#E5E2DC' }}></div>
          <div className="mb-6">
            <span className="text-[11px] font-semibold uppercase" style={{ color: '#9E9891', letterSpacing: '0.08em' }}>Flagged changes</span>
            <div className="space-y-4 mt-4">
              {[{type:'RED',title:'New risk factor Geographic concentration of AI infrastructure',body:'This risk factor was not present in the prior year filing. It describes concentration risk in AI data center geography.',color:'red'},{type:'RED',title:'Capex spike +53% YoY',body:'$21.4B vs $14.0B prior year. FCF margin compressed to 29% from 34%. No normalisation timeline provided by management.',color:'red'},{type:'AMBER',title:'Language shift Headwinds mentioned 6x this call',body:'CEO used headwinds 6 times this call vs 0 times last quarter. Tone appears more cautious on second half展望.',color:'amber'},{type:'GREEN',title:'Q4 Azure guidance raised',body:'Azure guided 34-35% for Q4 vs 31% street consensus. Second consecutive upward revision.',color:'green'}].map((flag,i) => (
                <div key={i} className="p-6 rounded-lg" style={{ background: flag.color === 'red' ? 'rgba(192,57,43,0.08)' : flag.color === 'amber' ? 'rgba(183,118,13,0.08)' : 'rgba(26,115,64,0.08)', border: '1px solid ' + (flag.color === 'red' ? 'rgba(192,57,43,0.2)' : flag.color === 'amber' ? 'rgba(183,118,13,0.2)' : 'rgba(26,115,64,0.2)') }}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[9px] font-semibold uppercase" style={{ color: flag.color === 'red' ? '#C0392B' : flag.color === 'amber' ? '#B7760D' : '#1A7340' }}>{flag.type}</span>
                    <span className="text-[14px] font-bold" style={{ color: '#1A1916' }}>{flag.title}</span>
                  </div>
                  <p className="text-[14px]" style={{ color: '#6B6560', lineHeight: 1.65 }}>{flag.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t my-6" style={{ borderColor: '#E5E2DC' }}></div>
          <div className="border-l-4 pl-4 italic font-display" style={{ borderColor: '#1A3C2A', color: '#6B6560' }}>
            &ldquo;We are investing heavily in infrastructure today to capture the opportunity ahead, and we expect this to normalise as AI workloads mature.&rdquo;
            <div className="font-mono text-[11px] mt-2" style={{ color: '#9E9891' }}>— CFO, on Q2 capex increase</div>
          </div>
          <div className="border-t my-6" style={{ borderColor: '#E5E2DC' }}></div>
          <div>
            <span className="text-[11px] font-semibold uppercase" style={{ color: '#9E9891', letterSpacing: '0.08em' }}>Sources reviewed</span>
            <div className="flex gap-2 mt-3">
              {['10-Q (Apr 30, 2025)','8-K (Apr 29, 2025)','Earnings call transcript'].map((s,i) => (
                <span key={i} className="px-3 py-1.5 rounded font-mono text-[11px]" style={{ background: '#F8F7F4', color: '#6B6560' }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 mt-6">
          <button className="btn-secondary px-6 py-3">Add note</button>
          <button className="btn-primary px-6 py-3">Approve + send brief</button>
        </div>
      </div>
    </div>
  );
}


function AlertsPage({ alertFilter, setAlertFilter, onViewBrief, onNavigate }: { alertFilter: string; setAlertFilter: (f: any) => void; onViewBrief: (id: string) => void; onNavigate: (page: any) => void }) {
  const filters = ['all','red','amber','green','today','week'];
  const alerts = [
    {ticker:'NVDA',type:'8-K',time:'8 min ago',summary:'Capex increase and new risk factor added',flag:'red'},
    {ticker:'MSFT',type:'10-Q',time:'2 hr ago',summary:'Azure guidance raised for Q4',flag:'green'},
    {ticker:'GOOGL',type:'8-K',time:'3 hr ago',summary:'Language shift in earnings call',flag:'amber'},
    {ticker:'AAPL',type:'10-K',time:'5 hr ago',summary:'Services revenue acceleration',flag:'green'},
    {ticker:'META',type:'10-Q',time:'6 hr ago',summary:'Reels monetization unchanged',flag:'amber'},
  ];
  return (
    <div className="min-h-screen" style={{ background: '#F8F7F4' }}>
      <div className="sidebar">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-[14px] h-[14px] rounded-sm" style={{ background: '#1A3C2A' }} />
          <span className="font-display text-[18px] font-bold" style={{ color: '#1A3C2A' }}>BriefEdge</span>
        </div>
        <div className="space-y-1">
          <button className="sidebar-nav-item" onClick={() => onNavigate('dashboard')}>Dashboard</button>
          <button className="sidebar-nav-item" onClick={() => onNavigate('watchlist')}>Watchlist</button>
          <button className="sidebar-nav-item" onClick={() => onNavigate('brief')}>Briefs</button>
          <button className="sidebar-nav-item active">Alerts <span className="ml-auto px-2 py-0.5 text-[10px] rounded-full" style={{ background: '#C0392B', color: 'white' }}>4</span></button>
          <button className="sidebar-nav-item" onClick={() => onNavigate('settings')}>Settings</button>
        </div>
      </div>
      <div className="ml-[240px] p-8">
        <div className="mb-6">
          <h1 className="font-display text-[28px] font-bold" style={{ color: '#1A1916' }}>Alerts</h1>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-[14px]" style={{ color: '#6B6560' }}>Live 8-K feed</p>
            <div className="flex items-center gap-1">
              <div className="w-[6px] h-[6px] rounded-full" style={{ background: '#1A7340' }} />
              <span className="text-[11px]" style={{ color: '#1A7340' }}>LIVE</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mb-6">
          {filters.map((f) => (
            <button key={f} onClick={() => setAlertFilter(f)} className={"filter-pill " + (alertFilter === f ? 'active' : '')} style={{ textTransform: 'capitalize' }}>{f}</button>
          ))}
        </div>
        <div className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: '#E5E2DC' }}>
          {alerts.map((alert,i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-4 border-b" style={{ borderColor: '#E5E2DC' }}>
              <div className="w-[8px] h-[8px] rounded-full" style={{ background: alert.flag === 'red' ? '#C0392B' : alert.flag === 'amber' ? '#B7760D' : '#1A7340' }} />
              <span className="font-mono text-[14px] font-semibold w-[50px]" style={{ color: '#1A1916' }}>{alert.ticker}</span>
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded" style={{ background: '#1A3C2A', color: 'white' }}>{alert.type}</span>
              <span className="text-[14px] flex-1" style={{ color: '#6B6560' }}>{alert.summary}</span>
              <span className="text-[11px]" style={{ color: '#9E9891' }}>{alert.time}</span>
              <button onClick={() => onViewBrief(alert.ticker.toLowerCase())} className="text-[13px] font-semibold" style={{ color: '#1A3C2A' }}>View brief</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


function SettingsPage({ onNavigate }: { onNavigate: (page: any) => void }) {
  const [toggles, setToggles] = useState({brief:true, redFlag:true, eightK:true, weeklyDigest:false});
  return (
    <div className="min-h-screen" style={{ background: '#F8F7F4' }}>
      <div className="sidebar">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-[14px] h-[14px] rounded-sm" style={{ background: '#1A3C2A' }} />
          <span className="font-display text-[18px] font-bold" style={{ color: '#1A3C2A' }}>BriefEdge</span>
        </div>
        <div className="space-y-1">
          <button className="sidebar-nav-item" onClick={() => onNavigate('dashboard')}>Dashboard</button>
          <button className="sidebar-nav-item" onClick={() => onNavigate('watchlist')}>Watchlist</button>
          <button className="sidebar-nav-item" onClick={() => onNavigate('brief')}>Briefs</button>
          <button className="sidebar-nav-item" onClick={() => onNavigate('alerts')}>Alerts <span className="ml-auto px-2 py-0.5 text-[10px] rounded-full" style={{ background: '#C0392B', color: 'white' }}>4</span></button>
          <button className="sidebar-nav-item active">Settings</button>
        </div>
      </div>
      <div className="ml-[240px] p-8">
        <h1 className="font-display text-[28px] font-bold mb-8" style={{ color: '#1A1916' }}>Settings</h1>
        <div className="grid grid-cols-[140px_1fr] gap-8">
          <div className="space-y-2">
            <button className="sidebar-nav-item active w-full justify-start">Account</button>
            <button className="sidebar-nav-item w-full justify-start text-muted">Notifications</button>
            <button className="sidebar-nav-item w-full justify-start text-muted">Delivery</button>
            <button className="sidebar-nav-item w-full justify-start text-muted">Integrations</button>
            <button className="sidebar-nav-item w-full justify-start text-muted">Plan</button>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 border" style={{ borderColor: '#E5E2DC' }}>
              <h3 className="text-[18px] font-bold mb-6" style={{ color: '#1A1916' }}>Account</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-[12px] font-semibold uppercase" style={{ color: '#1A1916' }}>Full name</label>
                  <input type="text" defaultValue="Alex Chen" className="form-input mt-1" />
                </div>
                <div>
                  <label className="text-[12px] font-semibold uppercase" style={{ color: '#1A1916' }}>Email address</label>
                  <input type="email" defaultValue="alex.chen@fund.com" className="form-input mt-1" />
                </div>
                <div className="pt-4 border-t" style={{ borderColor: '#E5E2DC' }}>
                  <h4 className="text-[14px] font-bold mb-4" style={{ color: '#1A1916' }}>Change password</h4>
                  <div className="space-y-3">
                    <input type="password" placeholder="Current password" className="form-input" />
                    <input type="password" placeholder="New password" className="form-input" />
                    <input type="password" placeholder="Confirm new password" className="form-input" />
                    <button className="btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 border" style={{ borderColor: '#E5E2DC' }}>
              <h3 className="text-[18px] font-bold mb-6" style={{ color: '#1A1916' }}>Notifications</h3>
              <div className="space-y-4">
                {[
                  {key:'brief',label:'New brief ready',desc:'When a new brief is generated for any watchlist company'},
                  {key:'redFlag',label:'Red flag detected',desc:'When a red flag is identified in any filing'},
                  {key:'eightK',label:'8-K filed for watchlist company',desc:'When an 8-K is filed for a company on your watchlist'},
                  {key:'weeklyDigest',label:'Weekly digest',desc:'Summary of all activity from the past week'},
                ].map((t) => (
                  <div key={t.key} className="flex items-center justify-between">
                    <div>
                      <div className="text-[14px] font-medium" style={{ color: '#1A1916' }}>{t.label}</div>
                      <div className="text-[13px]" style={{ color: '#9E9891' }}>{t.desc}</div>
                    </div>
                    <button onClick={() => setToggles({...toggles,[t.key]:!toggles[t.key as keyof typeof toggles]})} className={"toggle " + (toggles[t.key as keyof typeof toggles] ? 'active' : '')} />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 border" style={{ borderColor: '#E5E2DC' }}>
              <h3 className="text-[18px] font-bold mb-6" style={{ color: '#1A1916' }}>Plan</h3>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[16px] font-bold" style={{ color: '#1A1916' }}>Professional</div>
                  <div className="text-[14px]" style={{ color: '#6B6560' }}>$599/month</div>
                </div>
                <button className="btn-primary">Upgrade plan</button>
              </div>
              <div className="border-t pt-4" style={{ borderColor: '#E5E2DC' }}>
                <div className="text-[13px] mb-2" style={{ color: '#6B6560' }}>27 of 75 tickers used</div>
                <div className="w-full h-2 rounded-full" style={{ background: '#E5E2DC' }}>
                  <div className="h-full rounded-full" style={{ width: '36%', background: '#1A3C2A' }}></div>
                </div>
              </div>
              <div className="mt-4 text-[13px]" style={{ color: '#9E9891' }}>Next billing date: June 15, 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
