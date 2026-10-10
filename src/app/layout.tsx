import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'DAI Web Next App',
  description: 'Next.js + React + Tailwind CSS + Supabase Starter',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' className={inter.variable}>
      <body className='bg-[#090d16] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200'>
        {children}
      </body>
    </html>
  );
}
