import type { Metadata } from 'next';
import { Miriam_Libre } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import Main from '@/app/main';

const font = Miriam_Libre({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Palermo/Kissinger & Associates, P.C.',
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
        <Toaster
          position="bottom-right"
          richColors
          className={font.className}
        />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
