import type { Metadata } from 'next';
import { Outfit as Font } from 'next/font/google';
import './globals.css';
import Main from '@/app/main';

const font = Font({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: 'Palermo/Kissinger & Associates',
  description:
    'Palermo/Kissinger & Associates, P.C. is a certified public accounting and consulting firm located in Washington, Pennsylvania serving the greater Pittsburgh area. Not just tax time, anytime.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
