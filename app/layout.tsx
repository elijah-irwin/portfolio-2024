import type { Metadata } from 'next';

// Components.
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

// Fonts.
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

// Meta-data.
export const metadata: Metadata = {
  title: 'Mak Irwin',
  description:
    'Developer portfolio and blog for Canadian born developer, Mak Irwin',
};

// Global Styles.
import './globals.css';

// Root Layout.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
