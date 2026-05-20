'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const INITIAL_WATCHLIST = [
  { ticker: 'MSFT', name: 'Microsoft Corp', price: '$412.50', change: '+2.3%', signal: 'BULLISH', lastBrief: '2026-05-19', sector: 'Technology' },
  { ticker: 'AAPL', name: 'Apple Inc', price: '$189.30', change: '+0.8%', signal: 'BULLISH', lastBrief: '2026-05-19', sector: 'Technology' },
  { ticker: 'NVDA', name: 'NVIDIA Corp', price: '$876.40', change: '+4.1%', signal: 'BULLISH', lastBrief: '2026-05-18', sector: 'Semiconductors' },
  { ticker: 'JPM', name: 'JPMorgan Chase', price: '$198.70', change: '-0.5%', signal: 'NEUTRAL', lastBrief: '2026-05-17', sector: 'Financials' },
  { ticker: 'AMZN', name: 'Amazon.com Inc', price: '$185.60', change: '+1.2%', signal: 'BULLISH', lastBrief: '2026-05-16', sector: 'Consumer' },
  { ticker: 'GS', name: 'Goldman Sachs', price: '$465.20', change: '-1.1%', signal: 'AMBER', lastBrief: '2026-05-15', sector: 'Financials' },
];

const ALERTS_DATA = [
  { ticker: 'MSFT', type: 'GREEN', message: 'Azure guidance raised. Second consecutive upward revision.', time: '2h ago' },
  { ticker: 'NVDA', type: 'AMBER', message: 'CFO tone shifted to measured. Headwinds mentioned 4x this call.', time: '5h ago' },
  { ticker: 'GS', type: 'RED', message: 'Capex up 53% YoY. No normalization timeline given.', time: '1d ago' },
  { ticker: 'AAPL', type: 'GREEN', message: 'Services revenue +18% YoY, beating consensus.', time: '1d ago' },
];

function WatchlistTab({ watchlist, onTickerClick }: { watchlist: typeof INITIAL_WATCHLIST; onTickerClick: (t: string) => void }) {
  const signalColors: Record<string, { bg: string; text: string; border: string }> = {
    BULLISH: { bg: '#F0FDF4', text: '#166534', border: '#BBF7D0' },
    NEUTRAL: { bg: '#F8FAFC', text: '#475569', border: '#E5E7EB' },
    AMBER: { bg: '#FFFBEB', text: '#92400E', border: '#FDE68A' },
    RED: { bg: '#FEF2F2', text: '#991B1B', border: '#FECACA' },
  };
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <p style={{ fontSize: 20, fontWeight: 700, color: '#1A1A1A', marginBottom: 4 }}>Watchlist</p>
          <p style={{ fontSize: 13, color: '#94A3B8' }}>{watchlist.length} stocks being monitored</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, backgroundColor: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0' }}>4 BULLISH</span>
          <span style={{ padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A' }}>1 AMBER</span>
          <span style={{ padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, backgroundColor: '#F8FAFC', color: '#475569', border: '1px solid #E5E7EB' }}>1 NEUTRAL</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
        {watchlist.map((stock) => {
          const colors = signalColors[stock.signal] || signalColors.NEUTRAL;
          return (
            <div
              key={stock.ticker}
              onClick={() => onTickerClick(stock.ticker)}
              style={{ padding: 20, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div>
                  <p style={{ fontSize: 18, fontWeight: 700, color: '#1A1A1A', marginBottom: 2 }}>{stock.ticker}</p>
                  <p style={{ fontSize: 12, color: '#94A3B8' }}>{stock.name}</p>
                </div>
                <span style={{ padding: '4px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700, backgroundColor: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>{stock.signal}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <p style={{ fontSize: 22, fontWeight: 700, color: '#1A1A1A', marginBottom: 2 }}>{stock.price}</p>
                  <p style={{ fontSize: 13, fontWeight: 500, color: stock.change.startsWith('+') ? '#16A34A' : '#DC2626' }}>{stock.change}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: 11, color: '#94A3B8', marginBottom: 2 }}>Last brief</p>
                  <p style={{ fontSize: 12, color: '#475569' }}>{stock.lastBrief}</p>
                </div>
              </div>
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid #E5E7EB' }}>
                <p style={{ fontSize: 11, color: '#94A3B8' }}>{stock.sector}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ManageTab({ watchlist, setWatchlist }: { watchlist: typeof INITIAL_WATCHLIST; setWatchlist: (w: typeof INITIAL_WATCHLIST) => void }) {
  const [newTicker, setNewTicker] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const addTicker = () => {
    if (!newTicker.trim()) return;
    const upper = newTicker.trim().toUpperCase();
    if (watchlist.find(s => s.ticker === upper)) { setNewTicker(''); return; }
    setWatchlist([...watchlist, { ticker: upper, name: upper + ' Corp', price: '$--.--', change: '--%', signal: 'NEUTRAL', lastBrief: 'Pending', sector: 'Unknown' }]);
    setNewTicker('');
    setShowAdd(false);
  };
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <p style={{ fontSize: 20, fontWeight: 700, color: '#1A1A1A', marginBottom: 4 }}>Manage Watchlist</p>
          <p style={{ fontSize: 13, color: '#94A3B8' }}>Add or remove stocks from your watchlist</p>
        </div>
        <button onClick={() => setShowAdd(true)} style={{ padding: '10px 20px', borderRadius: 8, backgroundColor: '#1A3C2A', color: '#FFFFFF', fontSize: 14, fontWeight: 600, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
          Add ticker
        </button>
      </div>
      {showAdd && (
        <div style={{ padding: 20, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA', marginBottom: 24, display: 'flex', gap: 12, alignItems: 'center' }}>
          <input type="text" value={newTicker} onChange={e => setNewTicker(e.target.value.toUpperCase())} onKeyDown={e => e.key === 'Enter' && addTicker()} placeholder="e.g. TSLA, META, GOOGL" style={{ flex: 1, padding: '10px 16px', borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 15, outline: 'none', backgroundColor: '#FFFFFF', color: '#1A1A1A', fontFamily: 'monospace', textTransform: 'uppercase' }} autoFocus />
          <button onClick={addTicker} style={{ padding: '10px 20px', borderRadius: 8, backgroundColor: '#1A3C2A', color: '#FFFFFF', fontSize: 14, fontWeight: 600, border: 'none', cursor: 'pointer' }}>Add</button>
          <button onClick={() => { setShowAdd(false); setNewTicker(''); }} style={{ padding: '10px 16px', borderRadius: 8, backgroundColor: '#FFFFFF', color: '#64748B', fontSize: 14, border: '1px solid #E5E7EB', cursor: 'pointer' }}>Cancel</button>
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {watchlist.map((stock) => (
          <div key={stock.ticker} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderRadius: 10, border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: '#1A1A1A', fontFamily: 'monospace', width: 60 }}>{stock.ticker}</span>
              <span style={{ fontSize: 13, color: '#64748B' }}>{stock.name}</span>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: '#94A3B8' }}>{stock.sector}</span>
              <button onClick={() => setWatchlist(watchlist.filter(s => s.ticker !== stock.ticker))} style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #FECACA', backgroundColor: '#FEF2F2', color: '#DC2626', fontSize: 12, fontWeight: 500, cursor: 'pointer' }}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32 }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: '#1A3C2A', marginBottom: 16 }}>Recent alerts</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {ALERTS_DATA.map((alert, i) => {
            const colors = alert.type === 'GREEN' ? { bg: '#F0FDF4', border: '#BBF7D0', text: '#166534' } : alert.type === 'AMBER' ? { bg: '#FFFBEB', border: '#FDE68A', text: '#92400E' } : { bg: '#FEF2F2', border: '#FECACA', text: '#991B1B' };
            return (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 16px', borderRadius: 10, border: `1px solid ${colors.border}`, backgroundColor: colors.bg }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: colors.text, width: 60, flexShrink: 0, fontFamily: 'monospace' }}>{alert.ticker}</span>
                <span style={{ fontSize: 13, color: '#475569', flex: 1 }}>{alert.message}</span>
                <span style={{ fontSize: 11, color: '#94A3B8', flexShrink: 0 }}>{alert.time}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SettingsTab({ userSettings, setUserSettings }: {
  userSettings: { name: string; dob: string; email: string; dataSources: string; alertFrequency: string; };
  setUserSettings: (s: typeof userSettings) => void;
}) {
  const [saved, setSaved] = useState(false);
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };
  return (
    <div style={{ maxWidth: 640 }}>
      <div style={{ marginBottom: 32 }}>
        <p style={{ fontSize: 20, fontWeight: 700, color: '#1A1A1A', marginBottom: 4 }}>Settings</p>
        <p style={{ fontSize: 13, color: '#94A3B8' }}>Manage your profile and preferences</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ padding: 24, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#1A3C2A', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Profile</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: '#475569', marginBottom: 6 }}>Full name</label>
              <input value={userSettings.name} onChange={e => setUserSettings({ ...userSettings, name: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 14, outline: 'none', backgroundColor: '#FFFFFF', color: '#1A1A1A', boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: '#475569', marginBottom: 6 }}>Date of birth</label>
              <input type="date" value={userSettings.dob} onChange={e => setUserSettings({ ...userSettings, dob: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 14, outline: 'none', backgroundColor: '#FFFFFF', color: '#1A1A1A', boxSizing: 'border-box' }} />
            </div>
          </div>
        </div>
        <div style={{ padding: 24, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#1A3C2A', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Preferences</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: '#475569', marginBottom: 6 }}>Alert frequency</label>
              <select value={userSettings.alertFrequency} onChange={e => setUserSettings({ ...userSettings, alertFrequency: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 14, outline: 'none', backgroundColor: '#FFFFFF', color: '#1A1A1A', boxSizing: 'border-box' }}>
                <option value="realtime">Real-time (8-K alerts)</option>
                <option value="daily">Daily brief</option>
                <option value="weekly">Weekly summary</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: '#475569', marginBottom: 6 }}>Data sources</label>
              <select value={userSettings.dataSources} onChange={e => setUserSettings({ ...userSettings, dataSources: e.target.value })} style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 14, outline: 'none', backgroundColor: '#FFFFFF', color: '#1A1A1A', boxSizing: 'border-box' }}>
                <option value="sec">SEC EDGAR only</option>
                <option value="all">All sources</option>
              </select>
            </div>
          </div>
        </div>
        <div style={{ padding: 24, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#1A3C2A', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email reports</p>
          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: '#475569', marginBottom: 6 }}>Send analysis to</label>
            <input type="email" value={userSettings.email} onChange={e => setUserSettings({ ...userSettings, email: e.target.value })} placeholder="analyst@fund.com" style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 14, outline: 'none', backgroundColor: '#FFFFFF', color: '#1A1A1A', boxSizing: 'border-box' }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
          <button onClick={handleSave} style={{ padding: '12px 24px', borderRadius: 8, backgroundColor: '#1A3C2A', color: '#FFFFFF', fontSize: 14, fontWeight: 600, border: 'none', cursor: 'pointer' }}>
            {saved ? 'Saved!' : 'Save settings'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [tab, setTab] = useState<'watchlist' | 'manage' | 'source' | 'settings'>('watchlist');
  const [watchlist, setWatchlist] = useState(INITIAL_WATCHLIST);
  const [userSettings, setUserSettings] = useState({ name: 'Alex Morgan', dob: '1990-03-15', email: 'alex@alphafund.com', dataSources: 'sec', alertFrequency: 'daily' });
  const router = useRouter();

  const handleTickerClick = (ticker: string) => { router.push(`/stock/${ticker}`); };

  const tabs = [
    { key: 'watchlist', label: 'Watchlist' },
    { key: 'manage', label: 'Manage' },
    { key: 'source', label: 'Source' },
    { key: 'settings', label: 'Settings' },
  ] as const;

  return (
    <main style={{ backgroundColor: '#FAFAFA', color: '#1A1A1A', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <nav style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB', padding: '16px 24px', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 32, backgroundColor: '#1A3C2A', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 14 }}>B</span>
            </div>
            <span style={{ fontSize: 18, fontWeight: 600, color: '#1A1A1A' }}>BriefEdge</span>
          </div>
          <div style={{ display: 'flex', gap: 4, backgroundColor: '#F1F5F9', borderRadius: 10, padding: 4 }}>
            {tabs.map(t => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                style={{ padding: '8px 16px', borderRadius: 8, fontSize: 14, fontWeight: 500, border: 'none', cursor: 'pointer', transition: 'all 0.2s', backgroundColor: tab === t.key ? '#FFFFFF' : 'transparent', color: tab === t.key ? '#1A1A1A' : '#64748B', boxShadow: tab === t.key ? '0 1px 3px rgba(0,0,0,0.1)' : 'none' }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px' }}>
        {tab === 'watchlist' && <WatchlistTab watchlist={watchlist} onTickerClick={handleTickerClick} />}
        {tab === 'manage' && <ManageTab watchlist={watchlist} setWatchlist={setWatchlist} />}
        {tab === 'source' && (
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: 12, border: '1px solid #E5E7EB', padding: 32 }}>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#1A1A1A', marginBottom: 4 }}>Data Sources</p>
            <p style={{ fontSize: 13, color: '#94A3B8', marginBottom: 24 }}>Connect additional filing sources and feeds</p>
            <a
              href="https://www.microsoft.com/en-us/investor/sec-filings"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', backgroundColor: '#1A3C2A', color: '#FFFFFF', borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: 'none', cursor: 'pointer' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              View SEC Filings
            </a>
          </div>
        )}
        {tab === 'settings' && <SettingsTab userSettings={userSettings} setUserSettings={setUserSettings} />}
      </div>
    </main>
  );
}
