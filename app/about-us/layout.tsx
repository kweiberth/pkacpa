import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our practice — Palermo/Kissinger & Associates',
  description:
    'Meet our team of accounting professionals. Serving clients since 1983 with comprehensive business and personal accounting, audits, and tax services.',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
