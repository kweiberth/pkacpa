import Link from 'next/link';
import classNames from 'classnames';
export default function Card({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={classNames(
        'overflow-hidden rounded-xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-pka-green hover:shadow-md',
        className,
      )}
    >
      {children}
    </Link>
  );
}
