'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    // In a real app this would auth - here we just redirect
    window.location.href = '/dashboard';
  };

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

      <div style={{ maxWidth: 400, margin: '80px auto 0', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>Sign in</h1>
          <p style={{ fontSize: 15, color: '#64748B' }}>Access your analyst dashboard</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 500, color: '#1A1A1A', marginBottom: 8 }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="analyst@fund.com"
              style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 15, outline: 'none', backgroundColor: '#FFFFFF', color: '#1A1A1A', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 500, color: '#1A1A1A', marginBottom: 8 }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 15, outline: 'none', backgroundColor: '#FFFFFF', color: '#1A1A1A', boxSizing: 'border-box' }}
            />
          </div>

          {error && (
            <p style={{ fontSize: 13, color: '#DC2626', backgroundColor: '#FEF2F2', padding: '12px 16px', borderRadius: 8, border: '1px solid #FECACA' }}>{error}</p>
          )}

          <button type="submit" style={{ padding: '14px 24px', borderRadius: 8, backgroundColor: '#1A3C2A', color: '#FFFFFF', fontSize: 15, fontWeight: 600, border: 'none', cursor: 'pointer' }}>
            Sign in
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: 13, color: '#94A3B8', marginTop: 24 }}>
          Don&apos;t have an account?{' '}
          <Link href="/#cta" style={{ color: '#1A3C2A', fontWeight: 500 }}>Request access</Link>
        </p>
      </div>
    </main>
  );
}