import React from 'react';
import ContactUsBanner from '@/components/contact-us-banner';
import Container from '@/components/ui/container';
import PageHeader from '@/components/page-header';

export default function AboutUsPage() {
  return (
    <Container>
      <PageHeader heading="Meet the team" subheading="Best team ever!" />
      <ContactUsBanner />
    </Container>
  );
}
