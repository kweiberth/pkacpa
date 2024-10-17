import Link from 'next/link';
import Image from 'next/image';
import skyline from '@/app/images/pittsburgh-skyline.webp';
import alanMannHeadshot from '@/app/images/alan-mann-headshot-fake.webp';
import headshotFrankJr from '@/app/images/headshot-employee-frank-jr.jpg';
import headshotGary from '@/app/images/headshot-employee-gary.jpg';
import headshotFrankIII from '@/app/images/headshot-employee-frank-iii.jpg';
import headshotJohn from '@/app/images/headshot-employee-john.jpg';
import headshotLisa from '@/app/images/headshot-employee-lisa.jpg';
import headshotDenise from '@/app/images/headshot-employee-denise.jpg';
import headshotLindsay from '@/app/images/headshot-employee-lindsay.jpg';

const employeeHeadshots = [
  headshotFrankJr,
  headshotGary,
  headshotFrankIII,
  headshotJohn,
  headshotLisa,
  headshotDenise,
  headshotLindsay,
];

export default function Home() {
  return (
    <>
      <div className="relative mb-12 h-[50vh]">
        <Image
          src={skyline}
          alt="Pittsburgh skyline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-start bg-black bg-opacity-60 p-4 pt-24 text-white md:pt-32">
          <div className="mx-auto w-full max-w-5xl px-8 sm:px-16 md:px-24 lg:px-32">
            <h1 className="mb-4 text-left text-2xl font-bold sm:text-3xl md:text-4xl">
              Not just tax time, anytime.
            </h1>
            <p className="text-md mb-8 text-pretty text-left font-bold sm:text-xl">
              {`There's never a bad time to reach out.`}
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-pka-gold px-5 py-3 font-bold text-pka-green shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:text-lg"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-12 grid grid-cols-1 gap-8 px-4 lg:container md:mb-16 md:grid-cols-3 md:gap-4 lg:gap-8">
        <Link
          href="/our-practice"
          className="overflow-hidden rounded-xl border border-gray-200 transition duration-300 hover:-translate-y-0.5 hover:border-pka-green hover:shadow-md"
        >
          <div className="p-6 pb-0">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              Our practice
            </h2>
            <p>
              Learn about our amazing team that can help you with comprehensive
              business accounting, consultation, audits of for-profit and
              non-profit entities and the full spectrum of tax services.
            </p>
          </div>
          <div className="relative mt-6 pb-6 pl-6">
            <div className="mr-6 flex -space-x-3">
              {employeeHeadshots.map((headshot, index) => (
                <div
                  key={index}
                  className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-white"
                  style={{
                    zIndex: employeeHeadshots.length - index,
                  }}
                >
                  <Image
                    src={headshot}
                    alt={`Team member ${index + 1}`}
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
        </Link>
        <Link
          href="/financial-services"
          className="rounded-lg bg-gray-100 p-6 transition duration-300 hover:shadow-md"
        >
          <h2 className="mb-2 text-xl font-semibold md:text-2xl">
            Financial services
          </h2>
          <p>Discover our range of financial services.</p>
        </Link>
        <Link
          href="/tools"
          className="rounded-lg bg-gray-100 p-6 transition duration-300 hover:shadow-md"
        >
          <h2 className="mb-2 text-xl font-semibold md:text-2xl">
            Financial tools
          </h2>
          <p>Access our client portal and resources.</p>
        </Link>
      </div>

      <div className="mx-auto mb-12 mt-12 px-4 lg:container md:mb-20 md:mt-16">
        <h2 className="ml-6 text-pretty text-left text-xl font-bold md:ml-0 md:text-center md:text-2xl">
          {`Trusted by individuals and businesses alike`}
        </h2>
        <div className="relative mx-auto mb-12 mt-20 max-w-3xl">
          <div className="rounded-xl border border-gray-200 p-6 pt-12">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="h-24 w-24 rounded-full shadow-lg">
                <div className="h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={alanMannHeadshot}
                    alt="Dr. Alan Mann"
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-md mt-6 font-light">
                {`Palermo/Kissinger & Associates has helped my business along every step from acquisition, expansion, strategic additions and succession planning not to mention their business and personal tax expertise.`}
              </p>
            </div>
            <div className="mt-4 text-center">
              <span className="block font-semibold">Dr. Alan Mann</span>
              <span className="text-sm">Greentree Animal Clinic</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
