import React from 'react';
import ContactUsBanner from '@/components/contact-us-banner';
import Container from '@/components/ui/container';
import PageHeader from '@/components/page-header';

export default function ServicesPage() {
  return (
    <Container>
      <PageHeader heading="Financial services" subheading="We do it all!" />
      <ContactUsBanner />
    </Container>
  );
}
