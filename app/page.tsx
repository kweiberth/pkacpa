import Link from 'next/link';
import Image from 'next/image';
import skyline from '@/app/images/pittsburgh-skyline.webp';
import { ExternalLinkIcon } from './main';
import Card from '@/components/link-card';
import { employees } from '@/utils/employees';

const employeesWithHeadshots = Object.values(employees).filter(
  (employee) => employee.headshot,
);

const Header = ({ heading }: { heading: string }) => {
  return <h2 className="mb-4 text-2xl font-semibold">{heading}</h2>;
};

const ServiceLink = ({ href, text }: { href: string; text: string }) => (
  <div className="mt-4">
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-pka-green"
    >
      <div className="text-balance">
        <span className="underline">{text}</span>
        <span>
          <ExternalLinkIcon className="-mt-0.5 ml-1 inline-block flex-shrink-0" />
        </span>
      </div>
    </Link>
  </div>
);

export default function HomePage() {
  return (
    <>
      <div className="relative mb-12 h-[50vh]">
        <Image
          src={skyline}
          alt="Pittsburgh skyline"
          fill
          className="object-cover"
        />
        <div className="mx-sm:pt-18 absolute inset-0 flex flex-col justify-start bg-black bg-opacity-50 px-12 pt-24 text-white max-sm:px-10 md:pt-32">
          <div className="mx-auto w-full max-w-5xl sm:px-16 md:px-24 lg:px-32">
            <h1 className="mb-4 text-left text-2xl font-semibold sm:text-3xl md:text-4xl">
              Not just tax time, anytime.
            </h1>
            <p className="text-md mb-8 text-pretty text-left font-semibold sm:text-xl">
              {`There's never a bad time to reach out.`}
            </p>
            <Link
              href="/contact"
              className="inline-block overflow-hidden rounded-lg bg-pka-gold px-5 py-3 font-semibold text-pka-green shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:text-lg"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <div
        data-testid="home-page-CTAs"
        className="mx-auto mb-12 grid grid-cols-1 gap-8 px-4 lg:container md:mb-16 md:grid-cols-3 md:gap-4 lg:gap-8"
      >
        <Card href="/our-practice" className="pr-0">
          <div className="pr-6">
            <Header heading="Our practice" />
            <p>
              Learn about our amazing team that can help you with all of your
              financial needs, from tax services to comprehensive business
              accounting.
            </p>
          </div>
          <div className="relative mt-6">
            <div className="mr-6 flex -space-x-3">
              {employeesWithHeadshots.map((employee, index) => (
                <div
                  key={index}
                  className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-pka-gold"
                  style={{
                    zIndex: employeesWithHeadshots.length - index,
                  }}
                >
                  <Image
                    src={employee.headshot as string}
                    alt={`Image of ${employee.name}`}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 right-0 z-10 flex">
              <div className="w-6 bg-gradient-to-l from-white to-transparent"></div>
              <div className="w-6 bg-white"></div>
            </div>
          </div>
        </Card>
        <Card href="/financial-services">
          <Header heading="Financial services" />
          <p>
            We do it all: taxes, audits, statement reviews, bookkeeping,
            payroll, or even your virtual CFO! Learn more about the full range
            of financial services we offer.
          </p>
          <div className="mt-4 font-semibold text-pka-green underline">
            Learn more
          </div>
        </Card>
        <div className="rounded-xl border border-gray-200 p-6">
          <Header heading="Financial tools" />
          <p>
            Already a client? Log in to our client portal or file sharing
            service.
          </p>
          <ServiceLink
            href="http://www.naremote.com/pka/"
            text="Remote connection"
          />
          <ServiceLink
            href="https://pkacpa.sharefile.com/Authentication/Login"
            text="File sharing"
          />
          <ServiceLink
            href="https://login.safesendreturns.com/"
            text="Safe send portal"
          />
        </div>
      </div>
    </>
  );
}
