'use client';
import { useState } from 'react';

export default function RegisteredPage() {
  return (
    <main style={{ backgroundColor: '#FAFAFA', color: '#1A1A1A', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <nav style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB', padding: '16px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 32, backgroundColor: '#1A3C2A', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 14 }}>B</span>
            </div>
            <span style={{ fontSize: 18, fontWeight: 600, color: '#1A1A1A' }}>BriefEdge</span>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 560, margin: '80px auto 0', textAlign: 'center', padding: '0 24px' }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: '#F0FDF4', border: '3px solid #22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>

        <h1 style={{ fontSize: 32, fontWeight: 700, color: '#1A1A1A', marginBottom: 16 }}>You&apos;re on the list</h1>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: '#475569', marginBottom: 12 }}>
          Your email has been registered. You&apos;ll hear from us soon with early access details.
        </p>
        <p style={{ fontSize: 14, color: '#94A3B8', marginBottom: 40 }}>
          In the meantime, we&apos;ll be building your personal analyst infrastructure.
        </p>

        <div style={{ padding: 32, borderRadius: 12, border: '1px solid #E5E7EB', backgroundColor: '#FAFAFA', textAlign: 'left' }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#1A3C2A', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>What to expect</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { label: 'Day 1', desc: 'Confirmation email with your dashboard link' },
              { label: 'Week 1', desc: 'Setup call to configure your watchlist' },
              { label: 'Week 2', desc: 'First briefs delivered before market open' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: '#1A3C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 12 }}>{item.label.split(' ')[0]}</span>
                </div>
                <p style={{ fontSize: 14, color: '#475569' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <a href="/" style={{ display: 'inline-block', marginTop: 40, padding: '12px 24px', borderRadius: 8, backgroundColor: '#1A3C2A', color: '#FFFFFF', fontSize: 15, fontWeight: 600 }}>
          Back to homepage
        </a>
      </div>
    </main>
  );
}