'use client';
import { useState } from 'react';

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
    <section style={{ paddingTop: 160, paddingBottom: 96, paddingLeft: 24, paddingRight: 24 }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1A3C2A", marginBottom: 24 }}>
          Equity Research Infrastructure
        </p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#1A1A1A", marginBottom: 24 }}>
          Your analyst reads everything.<br/>Overnight.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#475569", maxWidth: 560, margin: "0 auto 40px" }}>
          BriefEdge monitors SEC filings across your watchlist and delivers structured analyst briefs before market open.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#cta" style={{ padding: "14px 28px", borderRadius: 8, backgroundColor: "#1A3C2A", color: "#FFFFFF", fontSize: 15, fontWeight: 600 }}>Request early access</a>
          <a href="#sample-brief" style={{ padding: "14px 28px", borderRadius: 8, border: "1px solid #E5E7EB", color: "#475569", fontSize: 15, fontWeight: 500 }}>See a sample brief</a>
        </div>
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
        <div style={{ maxWidth: 560, marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 12 }}>The problem</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.2, marginBottom: 16 }}>Your analysts are reading. The market is not waiting.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: '#475569' }}>During earnings season, an analyst might have two to three hours per company before the stock moves. If they are still on page 47 of a 10-Q when a number comes out, the opportunity is gone.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {[{stat:'60-70%',label:'of earnings week spent on extraction',desc:'Hours pulling numbers, building comparison tables, and diffing prior filings - not forming views.'},{label:'Soft signals get missed at scale',desc:'A CFO used normalize for the first time. A question was deflected twice. These shifts precede hard misses by quarters and are invisible at scale.'},{label:'The edge is in what takes time to read',desc:'Numbers are public the moment they are filed. Alpha is in the MD&A narrative, risk factor changes, and tone of the call - which takes the most time.'}].map((item,i)=>(
            <div key={i} style={{ padding: 32, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}>
              {item.stat && <p style={{ fontSize: 36, fontWeight: 700, color: '#DC2626', marginBottom: 8 }}>{item.stat}</p>}
              <p style={{ fontSize: 16, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>{item.label}</p>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: '#64748B' }}>{item.desc}</p>
            </div>
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
                <div style={{ width: item.status==='complete'?'100%':'0%', height: '100%', borderRadius: 2, backgroundColor: '#1A3C2A' }}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 12 }}>How it works</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A' }}>Four steps</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32 }}>
          {[{num:'01',title:'Connect your watchlist',desc:'Add tickers or CIK numbers. No manual setup required per company.'},{num:'02',title:'Agent reads overnight',desc:'10-K, 10-Q, 8-K, and earnings transcripts parsed and extracted.'},{num:'03',title:'Changes detected',desc:'Metrics compared to prior periods. Language scored across calls.'},{num:'04',title:'Brief delivered',desc:'Structured brief with metrics, flags, guidance diff, and quotes.'}].map((step,i)=>(
            <div key={i} style={{ padding: 24 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#1A3C2A', marginBottom: 12 }}>{step.num}</p>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>{step.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: '#64748B' }}>{step.desc}</p>
            </div>
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
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 12 }}>Features</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A' }}>Built for equity research</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {[{title:'Full filing coverage',desc:'Reads 10-K, 10-Q, 8-K, and earnings call transcripts. Processes every section.'},{title:'Period-over-period diff',desc:'Every metric compared against the prior quarter and prior year. Guidance revisions flagged.'},{title:'Language shift detection',desc:'Tracks hedging words, tone changes, and deflected analyst questions across transcripts.'},{title:'Real-time 8-K alerts',desc:'When an 8-K is filed, the brief is delivered within 15 minutes - not the next morning.'},{title:'Structured brief format',desc:'Every brief: key metrics, flags, guidance diff, notable quotes, and tone score.'},{title:'Watchlist scale',desc:'Covers 1 to 500+ companies simultaneously. Adding a 31st stock costs zero analyst time.'}].map((f,i)=>(
            <div key={i} style={{ padding: 24, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>{f.title}</p>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: '#64748B' }}>{f.desc}</p>
            </div>
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
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 12 }}>Sample brief</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A' }}>What a brief looks like</h2>
        </div>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: 32, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}>
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
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 12 }}>Who it is for</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A' }}>Built for the buy side</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {personas.map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, padding: 24, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: '#1A3C2A', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, flexShrink: 0 }}>
                {String.fromCharCode(65 + i)}
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#1A1A1A', marginBottom: 6 }}>{p.title}</p>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: '#64748B' }}>{p.desc}</p>
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
    { title: 'Language shift detection', desc: 'Bloomberg gives you the numbers. Neither Bloomberg nor FactSet detect that a CFO used normalize for the first time, or stopped saying confident. That is where the alpha lives.' },
    { title: 'Brief format, not raw data', desc: 'Terminals give analysts more data. BriefEdge gives them exactly the right pieces, pre-structured, with prior period context already applied.' },
    { title: 'Real-time 8-K processing', desc: 'An 8-K filing triggers the full analysis pipeline within 15 minutes. Within the trading session, while the market is still reacting.' },
    { title: 'Watchlist economics', desc: 'Adding a 31st stock costs zero analyst time with BriefEdge. With a terminal it costs reading hours.' },
  ];
  return (
    <section style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, backgroundColor: '#FAFAFA', borderTop: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 12 }}>Why not Bloomberg</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A' }}>Built differently, not just faster</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {items.map((item, i) => (
            <div key={i} style={{ padding: 24, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>{item.title}</p>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: '#64748B' }}>{item.desc}</p>
            </div>
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
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A3C2A', marginBottom: 12 }}>Pricing</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A', marginBottom: 16 }}>Scale with your watchlist</h2>
          <p style={{ fontSize: 16, color: '#475569', maxWidth: 480, margin: '0 auto' }}>No seat-based pricing. No per-filing costs. Your watchlist grows, your cost does not.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {tiers.map((tier, i) => (
            <div key={i} style={{ padding: 32, borderRadius: 12, border: tier.highlight ? '2px solid #1A3C2A' : '1px solid #E5E7EB', backgroundColor: tier.highlight ? '#F0FDF4' : '#FAFAFA', position: 'relative' }}>
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
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta" style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, backgroundColor: '#FAFAFA', borderTop: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1A1A1A', marginBottom: 16 }}>Get your first brief free</h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: '#475569', marginBottom: 40 }}>No credit card required. Add your watchlist and receive your first AI analyst brief before tomorrow morning.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <input type="email" placeholder="your@email.com" style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 15, width: '100%', maxWidth: 280, outline: 'none', backgroundColor: '#FFFFFF', color: '#1A1A1A' }} />
          <button style={{ padding: '12px 24px', borderRadius: 8, backgroundColor: '#1A3C2A', color: '#FFFFFF', fontSize: 15, fontWeight: 600, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
            Request access
          </button>
        </div>
        <p style={{ fontSize: 12, color: '#94A3B8', marginTop: 16 }}>Join analysts covering 500+ stocks. No card required.</p>
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
