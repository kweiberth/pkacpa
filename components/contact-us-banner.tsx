import Image from 'next/image';
import Link from 'next/link';
import skyline from '@/app/images/pittsburgh-skyline.webp';

const ContactUsBanner = () => {
  return (
    <div className="relative h-96 overflow-hidden rounded-xl shadow-xl">
      <Image
        src={skyline}
        alt="Pittsburgh skyline"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 px-12 text-white max-sm:px-10">
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
  );
};

export default ContactUsBanner;
