'use client';

import React from 'react';
import ContactUsBanner from '@/components/contact-us-banner';
import Container from '@/components/ui/container';
import PageHeader from '@/components/page-header';

import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { EmployeeData, employees } from '@/utils/employees';
import Image from 'next/image';

function EmployeeCard({ employee }: { employee: EmployeeData }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="h-full p-0">
        <div className="flex h-full flex-col">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={employee.headshot}
              alt={employee.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="flex h-full flex-col p-4 lg:p-6">
            <div>
              <div className="mb-6">
                <h2 className="mb-1 text-xl font-bold lg:text-2xl">
                  {employee.name}
                </h2>
                {employee.title ? (
                  <p className="text-md font-bold lg:text-lg">
                    {employee.title}
                  </p>
                ) : null}
              </div>
              <div className="mb-6 flex flex-wrap gap-2">
                {employee.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gray-100 px-3 py-2 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto">
              <Button variant="outline" size="sm" asChild>
                <a href={`mailto:${employee.email}`}>
                  <Mail className="!h-5 !w-5" />
                  <span className="text-sm">{`Email ${employee.nickname}`}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function AboutUsPage() {
  return (
    <Container>
      <PageHeader
        heading="Our practice"
        subheading="Since our inception in 1983 we have focused on building the best team to excel at all aspects of public accounting. This means we can meet all of your accounting needs – including comprehensive business accounting, consultation, audits of for-profit and nonprofit entities, as well as the full spectrum of tax services."
      />
      <div className="mb-12 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-8">
        {Object.values(employees).map((employee, index) => (
          <EmployeeCard key={index} employee={employee} />
        ))}
      </div>
      <ContactUsBanner />
    </Container>
  );
}
