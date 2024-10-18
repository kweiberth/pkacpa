'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import logo from '@/app/images/logo.png';
import Image from 'next/image';

const hamburgerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="size-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="size-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

export const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className={classNames('size-4', className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

enum Page {
  ABOUT_US = 'ABOUT_US',
  SERVICES = 'SERVICES',
  TOOLS = 'TOOLS',
  CONTACT = 'CONTACT',
}

const pageTitles: Record<Page, string> = {
  [Page.ABOUT_US]: 'Our practice',
  [Page.SERVICES]: 'Financial services',
  [Page.TOOLS]: 'Tools',
  [Page.CONTACT]: 'Contact us',
};

const pageHrefs: Record<Page, string> = {
  [Page.ABOUT_US]: '/about-us',
  [Page.SERVICES]: '/services',
  [Page.TOOLS]: '/tools',
  [Page.CONTACT]: '/contact',
};

export default function Main({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={classNames(
          'relative z-10 border-b border-gray-100 bg-white text-lg font-bold text-pka-green',
          {
            'shadow-sm': isMenuOpen,
          },
        )}
      >
        <div className="mx-auto bg-pka-gold px-4 py-2 text-white">
          <Link
            href="http://www.naremote.com/pka/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto flex items-center justify-center space-x-1"
          >
            <span className="text-sm">Access our remote connection here</span>
            <span className="-mt-1">{<ExternalLinkIcon />}</span>
          </Link>
        </div>
        <div className="mx-auto flex items-center justify-between px-4 py-4 xl:container">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Palermo/Kissinger & Associates logo"
              className="h-auto w-[200px] min-[480px]:w-[275px]"
            />
          </Link>
          <nav className="hidden space-x-8 md:flex [&>a:hover]:text-pka-gold [&>a]:transition-colors [&>a]:duration-200">
            <Link href={pageHrefs[Page.ABOUT_US]}>
              {pageTitles[Page.ABOUT_US]}
            </Link>
            <Link href={pageHrefs[Page.SERVICES]}>
              {pageTitles[Page.SERVICES]}
            </Link>
            <Link href={pageHrefs[Page.TOOLS]}>{pageTitles[Page.TOOLS]}</Link>
            <Link href={pageHrefs[Page.CONTACT]}>
              {pageTitles[Page.CONTACT]}
            </Link>
          </nav>
          <button
            className="group flex h-full items-center px-4 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="mr-2 transition-colors duration-200 group-hover:text-pka-gold">
              {isMenuOpen ? 'Close' : 'Menu'}
            </span>
            <div className="transition-colors duration-200 group-hover:text-pka-gold">
              {isMenuOpen ? closeIcon : hamburgerIcon}
            </div>
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute flex w-full flex-col overflow-hidden bg-white shadow-md md:hidden [&>a:hover]:text-pka-gold [&>a:not(:last-child)]:border-b [&>a:not(:last-child)]:border-gray-100 [&>a]:p-4 [&>a]:transition-colors [&>a]:duration-200"
            >
              <Link href={pageHrefs[Page.ABOUT_US]}>
                {pageTitles[Page.ABOUT_US]}
              </Link>
              <Link href={pageHrefs[Page.SERVICES]}>
                {pageTitles[Page.SERVICES]}
              </Link>
              <Link href={pageHrefs[Page.TOOLS]}>{pageTitles[Page.TOOLS]}</Link>
              <Link href={pageHrefs[Page.CONTACT]}>
                {pageTitles[Page.CONTACT]}
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-pka-green text-white">
        <div className="mx-auto max-w-xl px-4 py-8 md:py-16 md:pb-8">
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-bold">Office info</h3>
              <p>9 East Beau Street</p>
              <p>Washington, PA 15301</p>
              <p>Mon—Fri 8:30am—5:00pm</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Contact info</h3>
              <p>(724) 228-1177</p>
              <a href="mailto:info@pkacpa.com">info@pkacpa.com</a>
            </div>
          </div>
          <div className="mt-12 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Palermo/Kissinger & Associates
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
