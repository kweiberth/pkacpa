'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import logo from '@/public/logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Page, pageHrefs, pageTitles } from '@/utils/pages';

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

const contactUsButton = (
  <Link
    href={pageHrefs[Page.CONTACT]}
    className="overflow-hidden whitespace-nowrap rounded-lg bg-pka-green px-5 py-3 font-semibold text-white shadow-md transition duration-300 hover:text-pka-gold hover:shadow-lg sm:text-lg"
  >
    Contact us
  </Link>
);

export default function Main({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isCurrentPage = (page: Page) => pathname === pageHrefs[page];

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={classNames(
          'relative z-50 border-b border-gray-100 bg-white text-lg font-semibold text-pka-green',
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
            <span className="text-base">Access our remote connection here</span>
            <span className="">{<ExternalLinkIcon />}</span>
          </Link>
        </div>
        <div className="mx-auto flex items-center justify-between px-4 py-4 xl:container md:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Palermo/Kissinger & Associates logo"
              className="h-auto w-[160px] min-[480px]:w-[180px]"
            />
          </Link>
          <nav className="hidden items-center space-x-8 menu:flex [&>a:hover]:text-pka-gold [&>a]:transition-colors [&>a]:duration-200">
            {Object.values(Page)
              .filter((page) => page !== Page.CONTACT)
              .map((page) => (
                <Link
                  key={page}
                  href={pageHrefs[page]}
                  className={isCurrentPage(page) ? 'text-pka-gold' : ''}
                  data-testid={'desktop-menu-item'}
                >
                  {pageTitles[page]}
                </Link>
              ))}
            {!isCurrentPage(Page.CONTACT) && contactUsButton}
          </nav>
          <div className="flex items-center justify-center menu:hidden">
            {!isCurrentPage(Page.CONTACT) && (
              <div className="ml-8 mr-4 hidden sm:block">{contactUsButton}</div>
            )}
            <button
              className="group flex h-full items-center pl-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="mr-2 text-pka-green transition-colors duration-200 [@media(hover:hover)]:group-hover:text-pka-gold">
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
              <div className="text-pka-green transition-colors duration-200 [@media(hover:hover)]:group-hover:text-pka-gold">
                {isMenuOpen ? closeIcon : hamburgerIcon}
              </div>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute flex w-full flex-col overflow-hidden rounded-b-2xl bg-white shadow-md menu:hidden [&>a:hover]:text-pka-gold [&>a:not(:last-child)]:border-b [&>a:not(:last-child)]:border-gray-100 [&>a]:p-4 [&>a]:transition-colors [&>a]:duration-200"
              data-testid="mobile-menu"
            >
              {Object.values(Page).map((page) => (
                <Link
                  key={page}
                  href={pageHrefs[page]}
                  onClick={() => setIsMenuOpen(false)}
                  className={isCurrentPage(page) ? 'text-pka-gold' : ''}
                  data-testid={'mobile-menu-item'}
                >
                  {pageTitles[page]}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-pka-green text-white">
        <div className="mx-auto max-w-xl px-4 py-8 md:py-16 md:pb-8">
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Office info</h3>
              <p>9 East Beau Street</p>
              <p>Washington, PA 15301</p>
              <p>Mon—Fri 8:30am—5:00pm</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact info</h3>
              <a href="tel:+17242281177">(724) 228-1177</a>
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
