import type { Metadata } from 'next';
import { Outfit as Font } from 'next/font/google';
import './globals.css';
import Main from '@/app/main';
import AmplitudeScripts from '@/app/amplitude-scripts';

const font = Font({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});
const description =
  'Palermo/Kissinger & Associates, P.C. is a certified public accounting and consulting firm located in Washington, Pennsylvania serving the greater Pittsburgh area. Not just tax time, anytime.';

export const metadata: Metadata = {
  title: 'Palermo/Kissinger & Associates',
  description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Palermo/Kissinger & Associates',
    description,
    images: [
      {
        url: '/logo.png',
        width: 1023,
        height: 201,
        alt: 'Palermo/Kissinger & Associates Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
        <AmplitudeScripts />
      </body>
    </html>
  );
}
