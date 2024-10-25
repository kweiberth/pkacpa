import React from 'react';
import ContactUsBanner from '@/components/contact-us-banner';
import Container from '@/components/ui/container';

export default function AboutUsPage() {
  return (
    <Container>
      <h1 className="mb-1 text-3xl font-bold">Meet the team</h1>
      <p className="mb-8 text-pretty">BEst team eVeR!</p>
      <ContactUsBanner />
    </Container>
  );
}
