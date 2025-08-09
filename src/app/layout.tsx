import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Faiz Hassan - Full-Stack AI Developer',
  description: 'Building end-to-end AI solutions with LangChain, LangGraph, and agentic workflows that transform businesses.',
  keywords: ['AI Developer', 'LangChain', 'LangGraph', 'Machine Learning', 'Full-Stack', 'Agentic Workflows'],
  authors: [{ name: 'Faiz Hassan' }],
  openGraph: {
    title: 'Faiz Hassan - Full-Stack AI Developer',
    description: 'Building end-to-end AI solutions with LangChain, LangGraph, and agentic workflows that transform businesses.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}