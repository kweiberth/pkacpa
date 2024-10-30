import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact us — Palermo/Kissinger & Associates',
  description: `Get in touch with Palermo/Kissinger & Associates. We're here to help with your accounting, tax, and financial service needs.`,
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
