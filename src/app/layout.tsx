import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BriefEdge — AI Analyst Intelligence for the Buy Side',
  description: '30 stocks. Every filing. One 5-minute brief. AI that reads SEC 10-K, 10-Q, 8-K filings and earnings transcripts to deliver analyst briefs before market open.',
  keywords: 'fintech, AI agent, equity research, SEC EDGAR, 10-K, 10-Q, buy-side, NLP, RAG',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}