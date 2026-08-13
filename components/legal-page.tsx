import type { ReactNode } from 'react';

export function LegalPage({ children }: { children: ReactNode }) {
  return (
    <article className="mx-auto max-w-[760px] px-[18px] pb-12 pt-6 text-[15px] font-normal leading-[1.55] text-gray-950 md:pt-10 md:text-base md:leading-6">
      {children}
    </article>
  );
}

export function LegalTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="mb-5 text-2xl font-normal leading-[1.25] text-pka-green md:text-[26px]">
      {children}
    </h1>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 mt-6 text-[15px] font-semibold leading-[1.35] text-pka-green md:text-base md:leading-6">
        {heading}
      </h2>
      {children}
    </section>
  );
}

export function LegalParagraph({ children }: { children: ReactNode }) {
  return <p className="mb-4">{children}</p>;
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="mb-4 list-disc pl-8">{children}</ul>;
}

export function LegalContact() {
  return (
    <address className="not-italic">
      <strong>Palermo/Kissinger &amp; Associates, P.C.</strong>
      <br />
      9 East Beau Street
      <br />
      Washington, PA 15301
      <br />
      Phone: <a href="tel:+17242281177">(724) 228-1177</a>
      <br />
      Website:{' '}
      <a
        href="https://www.pkacpa.com/contact"
        className="text-pka-green underline underline-offset-2"
      >
        https://www.pkacpa.com/contact
      </a>
    </address>
  );
}
