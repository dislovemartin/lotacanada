import type { Metadata } from 'next';
import { Inter, Cormorant } from 'next/font/google';
import '@/styles/globals.css';
import { ToastProvider } from '@/components/ui/toast';
import { ReactNode } from 'react';

// Font configuration
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const cormorant = Cormorant({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

// Metadata configuration
export const metadata: Metadata = {
  title: 'LotaCanada | Premium Roofing Solutions',
  description: 'Discover premium roofing solutions designed for the Canadian climate. Explore our collection of sustainable, high-performance roofing materials.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
