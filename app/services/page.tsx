import React from 'react';
import ContactUsBanner from '@/components/contact-us-banner';
import Container from '@/components/ui/container';

export default function ServicesPage() {
  return (
    <Container>
      <h1 className="mb-1 text-3xl font-bold">Financial services</h1>
      <p className="mb-8 text-pretty">We do it all!</p>
      <ContactUsBanner />
    </Container>
  );
}
