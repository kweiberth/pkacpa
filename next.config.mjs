/** @type {import('next').NextConfig} */

const config = {
  async redirects() {
    return [
      {
        source: '/our-practice',
        destination: '/about-us',
        permanent: false,
      },
      {
        source: '/financial-services',
        destination: '/services',
        permanent: false,
      },
      {
        source: '/financial-tools',
        destination: '/tools',
        permanent: false,
      },
    ];
  },
};

export default config;
