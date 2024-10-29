import React from 'react';
import ContactUsBanner from '@/components/contact-us-banner';
import Container from '@/components/ui/container';
import PageHeader from '@/components/page-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Calculator,
  ClipboardList,
  FileText,
  BookOpen,
  Briefcase,
  DollarSign,
} from 'lucide-react';
import classNames from 'classnames';

const QuickBooks = ({ className = 'h-6 w-6' }) => (
  <svg
    viewBox="0 0 45 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M11.97 8.2C5.36 8.2 0 13.56 0 20.17C0 26.78 5.35 32.13 11.97 32.13H13.68V27.69H11.97C7.82 27.69 4.45 24.32 4.45 20.17C4.45 16.02 7.82 12.65 11.97 12.65H16.08V35.9C16.08 38.35 18.07 40.34 20.52 40.34V8.2H11.97ZM32.49 32.13C39.1 32.13 44.46 26.77 44.46 20.17C44.46 13.57 39.11 8.21 32.49 8.21H30.78V12.65H32.49C36.64 12.65 40.01 16.02 40.01 20.17C40.01 24.32 36.64 27.69 32.49 27.69H28.38V4.44C28.38 1.99 26.39 0 23.94 0V32.13H32.49Z"
      fill="currentColor"
    />
  </svg>
);

interface Service {
  title: string;
  description: React.ReactNode;
  icon: React.ElementType;
  className?: string;
  cardClassName?: string;
}

const services: Service[] = [
  {
    title: 'Taxes',
    description:
      'Expert tax planning and preparation for individuals and businesses. We help you navigate complex tax laws and maximize your returns.',
    icon: Calculator,
  },
  {
    title: 'Audits',
    description: (
      <>
        Comprehensive financial audits to ensure compliance and accuracy. Our
        thorough approach helps identify and mitigate potential risks. See our
        latest{' '}
        <a
          href="/pka-peer-review-2022.pdf"
          className="text-pka-green underline"
        >
          peer review report
        </a>
        .
      </>
    ),
    icon: ClipboardList,
  },
  {
    title: 'Reviews & compilations',
    description:
      'Detailed analysis of financial statements to provide insights and recommendations for improving your financial health and performance.',
    icon: FileText,
  },
  {
    title: 'Virtual CFO',
    description: `Financial guidance and leadership tailored to your unique business needs. Whether you're a growing startup or an established enterprise, our experienced experts deliver strategic budgeting, cash flow management, financial forecasting, and insightful analysis—all remotely. Partner with us to gain actionable insights, optimize your financial performance, and drive sustainable growth without the overhead of a full-time CFO.`,
    icon: Briefcase,
    className: 'lg:col-span-2',
    cardClassName: 'border-pka-gold border-2 shadow-md',
  },
  {
    title: 'Bookkeeping',
    description:
      'Accurate and timely bookkeeping services to keep your finances in order. We ensure your records are up-to-date and compliant.',
    icon: BookOpen,
  },
  {
    title: 'Payroll',
    description: `Full-service payroll management with dedicated personnel and decades of expertise. The same one or two individuals will handle all of your payment needs–weekly, quarterly, withholding, bonuses, commissions and reporting.`,
    icon: DollarSign,
  },
  {
    title: 'QuickBooks ProAdvisor',
    description:
      'Expert QuickBooks support and training to optimize your financial processes. We help you get the most out of this powerful tool.',
    icon: QuickBooks,
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className={classNames('relative', service.className)}>
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pka-green shadow-md">
          <service.icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <Card
        className={classNames(
          'flex h-full flex-col pt-6',
          service.cardClassName,
        )}
      >
        <CardHeader className="py-4">
          <CardTitle className="text-center text-xl">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-sm text-black">
            {service.description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <Container>
      <PageHeader
        heading="Financial services"
        subheading="We're here to help. We offer a wide range of financial services to fit your needs, from big to small and everything in between."
      />
      <div className="mb-12 mt-14 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
      <ContactUsBanner />
    </Container>
  );
}
