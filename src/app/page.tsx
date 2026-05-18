'use client';
import { useState } from 'react';

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
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
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="7" fill="#F59E0B"/>
            <path d="M8 20L12 8L16 16L20 10" stroke="#0B1D2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-lg font-bold tracking-tight text-white">BriefEdge</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#who-its-for" className="hover:text-white transition-colors">Who it is for</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="#cta" className="text-sm text-slate-400 hover:text-white transition-colors">Login</a>
          <a href="#cta" className="text-sm font-medium px-4 py-2 rounded-lg bg-amber-500 text-navy-900 hover:bg-amber-400 transition-colors font-semibold">Get early access</a>
        </div>
        <button className="md:hidden text-slate-400" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M6 6l12 12M6 18L18 6"/> : <path d="M4 7h16M4 12h16M4 17h16"/>}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-4 bg-navy-800">
          <a href="#features" className="text-sm text-slate-400 hover:text-white">Features</a>
          <a href="#how-it-works" className="text-sm text-slate-400 hover:text-white">How it works</a>
          <a href="#pricing" className="text-sm text-slate-400 hover:text-white">Pricing</a>
          <a href="#who-its-for" className="text-sm text-slate-400 hover:text-white">Who it is for</a>
          <a href="#cta" className="text-sm font-medium px-4 py-2 rounded-lg bg-amber-500 text-navy-900 text-center font-semibold">Get early access</a>
        </div>
      )}
    </nav>
  );
}
function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"/>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.08)_0%,_transparent_60%)]"/>
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-medium mb-8 animate-fade-in-up opacity-0" style={{animationDelay:"0ms",animationFillMode:"forwards"}}>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"/>
          Built for the pace of earnings season
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up opacity-0" style={{animationDelay:"100ms",animationFillMode:"forwards"}}>
          <span className="text-white">30 stocks. Every filing.</span>
          <br/>
          <span className="text-gradient-amber">One 5-minute brief.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0" style={{animationDelay:"200ms",animationFillMode:"forwards"}}>
          AI that reads 10-Ks, 10-Qs, 8-Ks, and earnings transcripts across your entire watchlist then delivers a structured brief with every change, flag, and language shift before market open.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0" style={{animationDelay:"300ms",animationFillMode:"forwards"}}>
          <a href="#cta" className="px-6 py-3.5 rounded-xl bg-amber-500 text-navy-900 font-bold text-base hover:bg-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-500/25">Get early access</a>
          <a href="#sample-brief" className="px-6 py-3.5 rounded-xl border border-white/10 text-slate-300 font-medium text-base hover:bg-white/5 hover:text-white transition-all">See a sample brief</a>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 animate-fade-in-up opacity-0" style={{animationDelay:"400ms",animationFillMode:"forwards"}}>
          <span>Used by analysts at:</span>
          <span className="text-slate-400">Long/short equity funds</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Family offices</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Research boutiques</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Covering 500+ stocks</span>
        </div>
      </div>
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",backgroundSize:"60px 60px"}}/>
    </section>
  );
}
function Problem() {
  return (
    <section className="py-24 px-6 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">The problem</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Your analysts are reading.<br/>The market is not waiting.</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">During earnings season, an analyst may have 2-3 hours per company before the market reacts. If they are still on page 47 of a 10-Q when the stock moves the opportunity is gone.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-8 hover:border-amber-500/20 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"/></svg>
            </div>
            <div className="text-amber-400 text-2xl font-bold mb-2">60-70%</div>
            <h3 className="text-white font-semibold text-lg mb-3">of earnings week spent on extraction</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Analysts spend hours pulling numbers and manually comparing periods not forming views. That is the job AI should do.</p>
          </div>
          <div className="glass-card rounded-2xl p-8 hover:border-amber-500/20 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>
            </div>
            <div className="text-amber-400 text-2xl font-bold mb-2">Soft signals</div>
            <h3 className="text-white font-semibold text-lg mb-3">get missed at scale</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Headwinds for the first time. A deflected analyst question. These language shifts precede hard misses by quarters and are invisible to humans reading across 30 names.</p>
          </div>
          <div className="glass-card rounded-2xl p-8 hover:border-amber-500/20 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
            </div>
            <div className="text-amber-400 text-2xl font-bold mb-2">The edge</div>
            <h3 className="text-white font-semibold text-lg mb-3">is in what takes time to read</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Numbers are public the moment they are filed. By the time an analyst reads the EPS, the market has too. The alpha is in the MD&amp;A narrative, risk factor changes, and tone of the call exactly what an agent surfaces instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
function Solution() {
  return (
    <section className="py-24 px-6 bg-navy-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">The solution</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Your analyst reads<br/>everything. Overnight.</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">BriefEdge monitors SEC EDGAR continuously, reads and parses every section of every filing overnight, extracts structured metrics, detects language shifts in earnings transcripts, and delivers a structured brief with every flag, metric change, and notable quote before market open.</p>
          <div className="flex flex-col gap-3">
            {["Monitors 10-K, 10-Q, and 8-K filings across your watchlist","Reads and parses MD&A, risk factors, financial statements","Extracts XBRL-tagged metrics automatically","Detects tone changes and hedging language in transcripts","Delivers structured brief before market open"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                <svg width="16" height="16" fill="none" stroke="#F59E0B" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-2xl p-8 border border-amber-500/10 animate-pulse-glow">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs text-slate-500 font-mono">EDGAR MONITOR</span>
            <span className="flex items-center gap-1.5 text-xs text-green-400"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>Live</span>
          </div>
          <div className="space-y-3">
            {[{ticker:"MSFT",type:"10-Q",time:"2 min ago",flag:"red"},{ticker:"NVDA",type:"8-K",time:"8 min ago",flag:"amber"},{ticker:"AAPL",type:"10-K",time:"34 min ago",flag:"green"},{ticker:"GOOGL",type:"8-K",time:"1 hr ago",flag:"red"}].map((row, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-white font-semibold text-sm w-12">{row.ticker}</span>
                  <span className="text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded">{row.type}</span>
                  <span className={"inline-block w-2 h-2 rounded-full " + (row.flag==="red"?"bg-red-500":row.flag==="amber"?"bg-amber-400":"bg-green-400")}/>
                </div>
                <span className="text-xs text-slate-500">{row.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function HowItWorks() {
  const steps = [
    {num:"01",title:"Connect your watchlist",desc:"Add tickers or CIK numbers. BriefEdge monitors SEC EDGAR and transcript providers continuously no manual setup required per company."},
    {num:"02",title:"Agent reads every filing overnight",desc:"10-K, 10-Q, 8-K, and earnings transcripts are parsed, chunked, and extracted into structured data. XBRL-tagged financials captured automatically."},
    {num:"03",title:"Changes detected and flagged",desc:"Every metric compared to prior periods. Risk factors diffed by semantic similarity. Transcript language scored and compared to prior call. Flags colour-coded red/amber/green."},
    {num:"04",title:"Brief delivered before market open",desc:"Structured PDF or email with metrics, flags, guidance diff, notable quotes, and tone score. Triggered within 15 minutes of a new 8-K filing inside the trading session."},
  ];
  return (
    <section id="how-it-works" className="py-24 px-6 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">How it works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Four steps to analyst intelligence</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 h-full">
              <div className="text-amber-400 text-5xl font-black opacity-20 mb-4">{step.num}</div>
              <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Features() {
  const features = [
    {title:"Full filing coverage",desc:"Reads 10-K, 10-Q, 8-K, and earnings call transcripts. Processes every section MD&A, Risk Factors, financial statements, guidance not just the headlines."},
    {title:"Period-over-period diff",desc:"Every metric compared against the prior quarter and prior year. Guidance revisions, margin shifts, and risk factor additions flagged automatically. No manual comparison needed."},
    {title:"Language shift detection",desc:"Tracks hedging words, tone changes, and deflected analyst questions across transcripts. Surfaces soft signals before they show up in hard numbers."},
    {title:"Real-time 8-K alerts",desc:"When an 8-K is filed, the brief is delivered within 15 minutes, not the next morning. Still inside the trading session."},
    {title:"Structured brief format",desc:"Every brief follows the same format: key metrics, red/amber/green flags, guidance diff, notable quotes, management tone score. 5 minutes to read. Every time."},
    {title:"Watchlist scale",desc:"Covers 1 to 500+ companies simultaneously. Adding a 31st stock costs zero analyst time. The agent scales linearly; your team does not."},
  ];
  return (
    <section id="features" className="py-24 px-6 bg-navy-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Everything your analyst needs. Automated.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 hover:border-amber-500/20 transition-all group">
              <div className="text-amber-400 text-2xl mb-4">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function SampleBrief() {
  return (
    <section id="sample-brief" className="py-24 px-6 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">Sample brief</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">What a brief looks like</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg mt-4">Real output from our analysis pipeline. Every section auto-generated from raw filings.</p>
        </div>
        <div className="glass-card rounded-2xl p-8 border border-amber-500/20 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
            <div>
              <div className="text-white font-bold text-xl">Microsoft (MSFT) - Q3 FY2025</div>
              <div className="text-slate-500 text-sm mt-1">Filed: 2025-04-30 | Call: 2025-04-29 | vs Q3 FY2024</div>
            </div>
            <div className="text-right">
              <div className="text-amber-400 font-bold text-lg">BULLISH</div>
              <div className="text-slate-500 text-xs">Management tone score</div>
            </div>
          </div>
          <div className="mb-8">
            <div className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">Key metrics</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {label:"Revenue",value:"$70.1B (+13% YoY, beat by $1.2B)"},
                {label:"Operating income",value:"$31.7B (+16% YoY, margin 45.2%)"},
                {label:"Azure growth",value:"+35% (vs +31% est, +28% prior qtr)"},
                {label:"EPS diluted",value:"$3.46 (+18% YoY, beat by $0.17)"},
                {label:"Free cash flow",value:"$20.3B (+2% YoY, capex elevated)"},
                {label:"Q4 guidance midpoint",value:"$73.9B (+$0.8B vs street)"},
              ].map((m, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4">
                  <div className="text-slate-500 text-xs mb-1">{m.label}</div>
                  <div className="text-white font-semibold text-sm">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <div className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">Flags</div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 flag-red rounded-lg p-4">
                <span className="text-red-400 font-bold text-xs mt-0.5">RED</span>
                <div className="text-sm"><span className="text-white font-semibold">New risk factor:</span> <span className="text-slate-300">Geographic concentration of AI infrastructure - not present in prior year filing.</span></div>
              </div>
              <div className="flex items-start gap-3 flag-red rounded-lg p-4">
                <span className="text-red-400 font-bold text-xs mt-0.5">RED</span>
                <div className="text-sm"><span className="text-white font-semibold">Capex up 53% YoY</span> <span className="text-slate-300">($21.4B vs $14.0B). FCF margin compressed 29% vs 34%. No normalisation timeline given.</span></div>
              </div>
              <div className="flex items-start gap-3 flag-amber rounded-lg p-4">
                <span className="text-amber-400 font-bold text-xs mt-0.5">AMBER</span>
                <div className="text-sm"><span className="text-white font-semibold">Headwinds used 6x</span> <span className="text-slate-300">this call (0x last quarter). CEO tone shifted from confident to measured. Europe enterprise demand question deflected twice.</span></div>
              </div>
              <div className="flex items-start gap-3 flag-green rounded-lg p-4">
                <span className="text-green-400 font-bold text-xs mt-0.5">GREEN</span>
                <div className="text-sm"><span className="text-white font-semibold">Q4 Azure guided 34-35%</span> <span className="text-slate-300">vs 31% street consensus. Second consecutive upward guidance revision.</span></div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">Notable quote</div>
            <div className="border-l-2 border-amber-500 pl-4 italic text-slate-300 text-sm">
              &quot;We are investing heavily in infrastructure today to capture the opportunity ahead, and we expect this to normalise as AI workloads mature.&quot; - CFO, on capex
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function WhoItsFor() {
  const personas = [
    {title:"Buy-side analyst",desc:"Covers 25-40 stocks. Needs pre-market briefs during earnings season. Values language shift detection most - the signal they currently miss manually.",icon:"A"},
    {title:"Portfolio manager",desc:"Wants one-page summaries for each position, not raw filings. Needs guidance revision alerts immediately, while the position can still be acted on.",icon:"B"},
    {title:"Research associate",desc:"Spends most of earnings week on extraction work. BriefEdge eliminates that entirely and lets them focus on forming views and supporting senior analysts.",icon:"C"},
    {title:"IR / corporate finance",desc:"Monitors competitor filings and tracks how analysts read them. Uses briefs for competitive intelligence and benchmarking own disclosure quality.",icon:"D"},
  ];
  return (
    <section id="who-its-for" className="py-24 px-6 bg-navy-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">Who it is for</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Built for the buy side</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {personas.map((p, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 flex gap-6 hover:border-amber-500/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl font-bold flex-shrink-0">{p.icon}</div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Differentiators() {
  const items = [
    {title:"Language shift detection",desc:"Bloomberg gives you the numbers. Neither Bloomberg nor FactSet detect that a CFO used normalise for the first time when describing capex, or stopped saying confident in our trajectory. That is where the soft signal alpha lives."},
    {title:"Brief format, not raw data",desc:"Terminals give analysts more data. BriefEdge gives them less but exactly the right pieces, pre-structured, with prior period context already applied. Built for decision speed, not data depth."},
    {title:"Real-time 8-K processing",desc:"An 8-K filing triggers the full analysis pipeline within 15 minutes. Not in tomorrow morning is morning pack within the trading session, while the market is still reacting."},
    {title:"Watchlist economics",desc:"Adding a 31st stock costs zero analyst time with BriefEdge. With a terminal it costs reading hours. The value compounds as the watchlist grows."},
  ];
  return (
    <section className="py-24 px-6 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">Why not Bloomberg</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Built differently, not just faster</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 hover:border-amber-500/20 transition-all">
              <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {name:"Starter",price:"$199",period:"/mo",desc:"Up to 15 tickers. Daily briefs (10-K, 10-Q). Email delivery. 3-month historical comparison.",best:"Individual analysts",highlight:false},
    {name:"Professional",price:"$599",period:"/mo",desc:"Up to 75 tickers. Real-time 8-K alerts (15-min delivery). Slack + email delivery. Language shift detection. 8-quarter historical comparison. Custom watchlist groups.",best:"Recommended for analysts and PMs",highlight:true},
    {name:"Enterprise",price:"Custom",period:"",desc:"Unlimited tickers. API access for internal tooling. Custom brief format and branding. White-label option. Dedicated onboarding.",best:"Asset managers, research boutiques, multi-PM funds",highlight:false},
  ];
  return (
    <section id="pricing" className="py-24 px-6 bg-navy-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Scale with your watchlist</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg mt-4">No seat-based pricing. No per-filing costs. Your watchlist grows, your cost does not.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div key={i} className={"glass-card rounded-2xl p-8 " + (tier.highlight ? "border-amber-500/40 bg-amber-500/5" : "hover:border-amber-500/20") + " transition-all relative"}>
              {tier.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-navy-900 text-xs font-bold rounded-full">Most Popular</div>}
              <div className="text-white font-bold text-xl mb-1">{tier.name}</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold text-amber-400">{tier.price}</span>
                <span className="text-slate-500 text-sm">{tier.period}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{tier.desc}</p>
              <div className="text-amber-400 text-xs font-semibold">{tier.best}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta" className="py-24 px-6 bg-navy-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get your first brief free</h2>
        <p className="text-slate-400 text-lg mb-10">No credit card required. Add your watchlist and receive your first AI analyst brief before tomorrow morning.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input type="email" placeholder="your@email.com" className="w-full sm:w-80 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50" />
          <button className="px-6 py-3.5 rounded-xl bg-amber-500 text-navy-900 font-bold text-base hover:bg-amber-400 transition-all hover:scale-105 shadow-lg shadow-amber-500/25 whitespace-nowrap">
            Request access
          </button>
        </div>
        <p className="text-slate-600 text-xs mt-4">Join analysts covering 500+ stocks. No card required.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-navy-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="7" fill="#F59E0B"/>
            <path d="M8 20L12 8L16 16L20 10" stroke="#0B1D2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-white font-bold">BriefEdge</span>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500">
          <span>AI analyst intelligence for the buy side.</span>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
