import React from 'react';
import Image from 'next/image';
import shareFileLogo from '@/app/images/sharefile-logo.png';
import safeSendLogo from '@/app/images/safesend-logo.png';
import { ScreenShare } from 'lucide-react';
import ContactUsBanner from '@/components/contact-us-banner';
import Container from '@/components/ui/container';
import PageHeader from '@/components/page-header';
import Card from '@/components/link-card';

const Header = ({ heading }: { heading: string }) => {
  return <h2 className="mb-4 text-xl font-semibold lg:text-2xl">{heading}</h2>;
};

const Description = ({ description }: { description: string }) => {
  return <p className="mb-6">{description}</p>;
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex h-full flex-col">{children}</div>;
};

export default function ToolsPage() {
  return (
    <Container>
      <PageHeader
        heading="Financial tools"
        subheading="The tools you need to focus on what you do best."
      />
      <div className="mx-auto mb-12 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-3 md:gap-4 lg:gap-8">
        <Card href="http://www.naremote.com/pka/">
          <Content>
            <Header heading="Remote connection" />
            <Description description="Connect direclty with our team for remote support." />
            <div className="flex items-center">
              <ScreenShare className="mr-1 mt-auto h-6 w-6 text-[#3a0e82]" />
              <span className="font-bold text-[#fd5a1f]">tnac.us/pka</span>
            </div>
          </Content>
        </Card>
        <Card href="https://pkacpa.sharefile.com/Authentication/Login">
          <Content>
            <Header heading="File sharing" />
            <Description description="Safely and securely share files with us." />
            <Image
              src={shareFileLogo}
              alt="ShareFile logo"
              height={18}
              className="mb-1 mt-auto"
            />
          </Content>
        </Card>
        <Card href="https://login.safesendreturns.com/">
          <Content>
            <Header heading="Safe send portal" />
            <Description description="View, manage, and e-sign your tax returns." />
            <Image
              src={safeSendLogo}
              alt="SafeSend logo"
              height={20}
              className="mt-auto"
            />
          </Content>
        </Card>
      </div>
      <ContactUsBanner />
    </Container>
  );
}
