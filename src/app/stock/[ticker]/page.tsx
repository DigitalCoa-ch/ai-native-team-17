'use client';
import { useParams, useRouter } from 'next/navigation';

const STOCK_DATA: Record<string, { name: string; price: string; change: string; sector: string; signal: string; revenue: string; netIncome: string; eps: string; pe: string; beta: string; brief: string; flags: { label: string; color: string }[]; quotes: { text: string; speaker: string }[] }> = {
  MSFT: { name: 'Microsoft Corp', price: '$412.50', change: '+2.3%', sector: 'Technology', signal: 'BULLISH', revenue: '$61.3B', netIncome: '$20.2B', eps: '$2.94', pe: '34.2x', beta: '0.89', brief: 'Azure revenue grew 31% YoY driven by AI demand. Cloud margins expanded 120bps. Copilot adoption accelerating across enterprise. GUIDANCE RAISED for Q4. Data center capex scaling to meet demand.', flags: [{ label: 'RAISED GUIDANCE', color: '#F0FDF4' }, { label: 'AZURE +31%', color: '#F0FDF4' }, { label: 'CLOUD MARGIN +120bps', color: '#F0FDF4' }], quotes: [{ text: 'We are all-in on AI. Every product we have is being enhanced by AI.', speaker: 'Satya Nadella, CEO' }, { text: 'Azure margin expansion was better than expected due to workload efficiency.', speaker: 'Amy Hood, CFO' }] },
  AAPL: { name: 'Apple Inc', price: '$189.30', change: '+0.8%', sector: 'Technology', signal: 'BULLISH', revenue: '$119.6B', netIncome: '$23.6B', eps: '$1.53', pe: '28.7x', beta: '1.21', brief: 'Services revenue +18% YoY to $23.1B, a record. iPhone revenue beat estimates despite China weakness. Mac recovered with M3 cycle. GUIDANCE INLINE. Management noted AI features coming to iPhone later this year.', flags: [{ label: 'SERVICES RECORD', color: '#F0FDF4' }, { label: 'iPHONE BEAT', color: '#F0FDF4' }, { label: 'AI COMING', color: '#F8FAFC' }], quotes: [{ text: 'Services reach a new all-time revenue record with strong performance across App Store, Advertising, and AppleCare.', speaker: 'Tim Cook, CEO' }] },
  NVDA: { name: 'NVIDIA Corp', price: '$876.40', change: '+4.1%', sector: 'Semiconductors', signal: 'BULLISH', revenue: '$22.1B', netIncome: '$12.2B', eps: '$5.16', pe: '65.3x', beta: '1.72', brief: 'Data center revenue $18.4B, up 409% YoY driven by H100 demand. H200 ramping. Automotive new record. Chinese export restrictions causing guidance uncertainty for next quarter. GROSS MARGIN 74.6% vs 63% YoY.', flags: [{ label: 'DATA CENTER +409%', color: '#F0FDF4' }, { label: 'MARGIN EXPANSION', color: '#F0FDF4' }, { label: 'EXPORT RISK', color: '#FFFBEB' }], quotes: [{ text: 'The next wave of AI is transitioning to generative inference which requires much more compute.', speaker: 'Jensen Huang, CEO' }] },
  JPM: { name: 'JPMorgan Chase', price: '$198.70', change: '-0.5%', sector: 'Financials', signal: 'NEUTRAL', revenue: '$39.9B', netIncome: '$13.4B', eps: '$4.37', pe: '12.1x', beta: '1.05', brief: 'Net interest income $23.2B, slightly below expectations as rates plateau. Investment banking fees +26% driven by M&A recovery. Credit quality stable but watch for CRE deterioration in commercial portfolio.', flags: [{ label: 'NII SOFT', color: '#F8FAFC' }, { label: 'IB FEES +26%', color: '#F0FDF4' }, { label: 'CRE WATCH', color: '#FFFBEB' }], quotes: [] },
  AMZN: { name: 'Amazon.com Inc', price: '$185.60', change: '+1.2%', sector: 'Consumer', signal: 'BULLISH', revenue: '$143.3B', netIncome: '$10.3B', eps: '$0.65', pe: '62.4x', beta: '1.16', brief: 'AWS revenue $25B, reaccelerated to +17% after deceleration. Advertising +24%. Prime membership grew. Operating margins expanded to 9.7% from 6.2% YoY. CAPEX increasing for AI infrastructure.', flags: [{ label: 'AWS +17%', color: '#F0FDF4' }, { label: 'ADVERTISING +24%', color: '#F0FDF4' }, { label: 'MARGIN EXPANSION', color: '#F0FDF4' }], quotes: [{ text: 'We are still early in the cloud transformation. GenAI adoption is accelerating.', speaker: 'Andy Jassy, CEO' }] },
  GS: { name: 'Goldman Sachs', price: '$465.20', change: '-1.1%', sector: 'Financials', signal: 'AMBER', revenue: '$14.9B', netIncome: '$3.0B', eps: '$8.62', pe: '14.8x', beta: '1.38', brief: 'Equities revenue +15% on strong macro activity. FICC +8%. However, CAPEX up 53% YoY for technology and J人为 intelligence with no clear timeline to monetization. Headcount reduced but compensation expense still elevated. CFO noted normalization will take multiple quarters.', flags: [{ label: 'CAPEX +53%', color: '#FEF2F2' }, { label: 'EQUITIES +15%', color: '#F0FDF4' }, { label: 'NO NORMALIZATION DATE', color: '#FFFBEB' }], quotes: [{ text: 'We continue to invest in our platform and in technology, particularly in AI.', speaker: 'Denis Coleman, CFO' }] },
};

export default function StockPage() {
  const params = useParams();
  const router = useRouter();
  const ticker = typeof params.ticker === 'string' ? params.ticker.toUpperCase() : '';
  const data = STOCK_DATA[ticker];

  if (!data) {
    return (
      <main style={{ backgroundColor: '#FAFAFA', color: '#1A1A1A', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Ticker not found</p>
          <button onClick={() => router.push('/dashboard')} style={{ padding: '12px 24px', borderRadius: 8, backgroundColor: '#1A3C2A', color: '#FFFFFF', fontSize: 14, fontWeight: 600, border: 'none', cursor: 'pointer' }}>Back to dashboard</button>
        </div>
      </main>
    );
  }

  const signalColors: Record<string, { bg: string; text: string; border: string }> = {
    BULLISH: { bg: '#F0FDF4', text: '#166534', border: '#BBF7D0' },
    NEUTRAL: { bg: '#F8FAFC', text: '#475569', border: '#E5E7EB' },
    AMBER: { bg: '#FFFBEB', text: '#92400E', border: '#FDE68A' },
    RED: { bg: '#FEF2F2', text: '#991B1B', border: '#FECACA' },
  };
  const colors = signalColors[data.signal] || signalColors.NEUTRAL;

  return (
    <main style={{ backgroundColor: '#FAFAFA', color: '#1A1A1A', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <nav style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB', padding: '16px 24px', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={() => router.push('/dashboard')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748B', fontSize: 14, display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Dashboard
            </button>
            <span style={{ color: '#E5E7EB' }}>/</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: '#1A1A1A' }}>{ticker}</span>
          </div>
          <span style={{ padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 700, backgroundColor: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>{data.signal}</span>
        </div>
      </nav>

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
            <div>
              <h1 style={{ fontSize: 36, fontWeight: 700, color: '#1A1A1A', marginBottom: 4 }}>{ticker}</h1>
              <p style={{ fontSize: 16, color: '#64748B' }}>{data.name} &middot; {data.sector}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: 32, fontWeight: 700, color: '#1A1A1A' }}>{data.price}</p>
              <p style={{ fontSize: 15, fontWeight: 500, color: data.change.startsWith('+') ? '#16A34A' : '#DC2626' }}>{data.change}</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
          {[
            { label: 'Revenue', value: data.revenue },
            { label: 'Net Income', value: data.netIncome },
            { label: 'EPS (TTM)', value: data.eps },
            { label: 'P/E Ratio', value: data.pe },
            { label: 'Beta', value: data.beta },
          ].map((metric) => (
            <div key={metric.label} style={{ padding: 16, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
              <p style={{ fontSize: 11, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>{metric.label}</p>
              <p style={{ fontSize: 20, fontWeight: 700, color: '#1A1A1A' }}>{metric.value}</p>
            </div>
          ))}
        </div>

        <div style={{ padding: 24, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA', marginBottom: 24 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#1A3C2A', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Brief &mdash; {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: '#475569', marginBottom: 16 }}>{data.brief}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {data.flags.map((flag, i) => (
              <span key={i} style={{ padding: '4px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, backgroundColor: flag.color, color: '#475569', border: '1px solid #E5E7EB' }}>{flag.label}</span>
            ))}
          </div>
        </div>

        {data.quotes.length > 0 && (
          <div style={{ padding: 24, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA' }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#1A3C2A', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Notable quotes</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {data.quotes.map((q, i) => (
                <div key={i} style={{ display: 'flex', gap: 12 }}>
                  <div style={{ width: 4, borderRadius: 2, backgroundColor: '#1A3C2A', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: 14, fontStyle: 'italic', color: '#1A1A1A', lineHeight: 1.6, marginBottom: 4 }}>&ldquo;{q.text}&rdquo;</p>
                    <p style={{ fontSize: 12, color: '#94A3B8' }}>&mdash; {q.speaker}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
