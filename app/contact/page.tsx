'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    // Store a reference to the form, else when we go to .reset() it later after
    // the async operation it can be undefined/null.
    const form = event.currentTarget;

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      _info: formData.get('_info'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        form.reset();
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      toast.error('Unexpected error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 pb-12 pt-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Contact us today!
        </h1>
        <p className="mb-8 text-balance text-center text-gray-600">
          Let&apos;s get started on getting you the financial services you need
          so that you can focus on what you do best.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex items-start">
          <Card className="w-full max-md:mb-8 max-sm:border-none">
            <CardContent className="p-0 sm:p-6">
              <h2 className="mb-2 text-xl font-bold">How can we help?</h2>
              <p className="mb-4 text-pretty text-gray-600">
                Fill out the form below and we&apos;ll get back to you soon.
              </p>
              <form className="[&>div>label]:font-bold" onSubmit={handleSubmit}>
                {/* 
                    Honeypot input. We'll send this to the server via the POST 
                    request and if it's present we'll return a silent success
                    and avoid sending an email.
                */}
                <div className="hidden">
                  <input
                    type="text"
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
                    placeholder="Subject of email"
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

                <Button
                  type="submit"
                  className="w-full rounded-lg bg-pka-green font-bold"
                  size="xl"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="w-full">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="mb-2 text-xl font-bold">Call us</h2>
              <p className="mb-4 text-pretty text-gray-600">
                Call our team Monday through Friday from 8:30am—5:00pm
              </p>
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <a href="tel:+17242281177">
                  <Phone className="mr-1 h-4 w-4" /> (724) 228-1177
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="mb-2 text-xl font-bold">Email us</h2>
              <p className="mb-4 text-pretty text-gray-600">
                Send us an email and let us know how we can help
              </p>
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <a href="mailto:info@pkacpa.com">
                  <Mail className="mr-1 h-4 w-4" /> Shoot us an email
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardContent className="p-6">
              <h2 className="mb-2 text-xl font-bold">Visit us</h2>
              <p className="mb-4 text-pretty text-gray-600">
                Chat to us in person at our office
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
                  <MapPin className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0" />
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
