'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '@/components/page-header';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const form = event.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      _info: formData.get('_info'),
      deviceId: window.amplitude?.getDeviceId
        ? window.amplitude.getDeviceId()
        : 'missing-device-id',
    };
    console.log('***', data);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setError('Unexpected error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = () => {
    setError(null);
    setSuccess(false);
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 pb-12 pt-8">
      <PageHeader
        heading="Contact us today!"
        subheading="Let's get started on getting you the financial services you need so that you can focus on what you do best."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex items-start">
          <Card className="w-full max-md:mb-8 max-sm:border-none">
            <CardContent className="p-0 sm:p-6">
              <h2 className="mb-2 text-xl font-semibold">How can we help?</h2>
              <p className="mb-4 text-pretty">
                Fill out the form below and we&apos;ll get back to you soon.
              </p>
              <form
                className="[&>div>label]:font-semibold"
                onSubmit={handleSubmit}
                onChange={handleChange}
              >
                {/* 
                    Honeypot input. We'll send this to the server via the POST 
                    request and if it's present we'll return a silent success
                    and avoid sending an email.
                */}
                <div style={{ position: 'absolute', left: '-9999px' }}>
                  <input
                    type="text"
                    id="_info"
                    name="_info"
                    placeholder="Info"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    className="mt-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    className="mt-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject of message"
                    className="mt-2"
                    required
                  />
                </div>

                <div className="mb-6">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="What do you need help with?"
                    className="mt-2 h-32"
                    required
                  />
                </div>

                {!success ? (
                  <Button
                    type="submit"
                    className="w-full rounded-lg bg-pka-green font-semibold"
                    size="xl"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send message'}
                  </Button>
                ) : (
                  <div className="rounded-lg border border-green-700 p-4 text-green-700">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      Message sent successfully! We&apos;ll be in touch soon.
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mt-4 rounded-lg bg-red-100 p-4 text-red-700">
                    <div className="flex items-center gap-3">
                      <XCircle className="h-5 w-5 flex-shrink-0" />
                      {error}
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        <div data-testid="contact-page-CTAs" className="w-full">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="mb-2 text-xl font-semibold">Call us</h2>
              <p className="mb-4 text-pretty">
                Call our team Monday through Friday from 8:30am—5:00pm.
              </p>
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <a href="tel:+17242281177">
                  <Phone className="mr-1 !h-5 !w-5" /> (724) 228-1177
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="mb-2 text-xl font-semibold">Email us</h2>
              <p className="mb-4 text-pretty">
                Send us an email and let us know how we can help.
              </p>
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <a href="mailto:info@pkacpa.com">
                  <Mail className="mr-1 !h-5 !w-5" /> info@pkacpa.com
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardContent className="p-6">
              <h2 className="mb-2 text-xl font-semibold">Visit us</h2>
              <p className="mb-4 text-pretty">
                Chat to us in person at our office.
              </p>
              <Button
                variant="outline"
                className="h-auto w-full justify-start py-3"
                asChild
              >
                <a
                  href="https://maps.app.goo.gl/SQeFKchBnRu2M9md6"
                  className="flex items-start"
                >
                  <MapPin className="mr-2 mt-0.5 !h-5 !w-5 flex-shrink-0" />
                  <div className="text-left">
                    9 East Beau Street <br /> Washington, PA 15301
                  </div>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
