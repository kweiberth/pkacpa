import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/contact');
});

const links = [
  {
    name: '(724) 228-1177',
    href: 'tel:+17242281177',
  },
  {
    name: '9 East Beau Street',
    href: 'https://maps.app.goo.gl/SQeFKchBnRu2M9md6',
  },
];

for (const linkToTest of links) {
  test(`Should have link to ${linkToTest.name}`, async ({ page }) => {
    const link = page
      .getByTestId('contact-page-CTAs')
      .getByRole('link', { name: linkToTest.name });
    await expect(link).toHaveAttribute('href', linkToTest.href);
  });
}

test.describe('Contact form', () => {
  test('Should require all fields', async ({ page }) => {
    await page.click('button[type="submit"]');
    await expect(page.locator('#name')).toHaveAttribute('required');
    await expect(page.locator('#email')).toHaveAttribute('required');
    await expect(page.locator('#subject')).toHaveAttribute('required');
    await expect(page.locator('#message')).toHaveAttribute('required');
  });

  test('Should make a POST request to /api/contact with the correct data on submit', async ({
    page,
    browserName,
  }) => {
    // We have strict rate limits w/ Resend email API (100/day), so let's limit
    // this test to run only once (on Chrome).
    test.skip(browserName !== 'chromium');

    await page.waitForFunction(() => {
      return (
        window.amplitude &&
        window.amplitude.getDeviceId &&
        typeof window.amplitude.getDeviceId() === 'string'
      );
    });

    await page.fill('#name', 'Kurt Weiberth');
    await page.fill('#email', 'k.urt.weiberth@gmail.com');
    await page.fill('#subject', 'This is a subject');
    await page.fill('#message', 'This is a test message.');

    const [request, response] = await Promise.all([
      page.waitForRequest('**/api/contact'),
      page.waitForResponse('**/api/contact'),
      page.click('button[type="submit"]'),
    ]);

    const postData = JSON.parse(request.postData() as string);

    expect(postData).toMatchObject({
      name: 'Kurt Weiberth',
      email: 'k.urt.weiberth@gmail.com',
      subject: 'This is a subject',
      message: 'This is a test message.',
      _info: '',
      deviceId: expect.any(String),
    });

    // On local/dev environments we don't actually send the email and instead
    // we do an early return. This should be good enough of a test for now.
    expect(response.status()).toBe(202);
    await expect(await response.json()).toMatchObject({
      success: true,
      message: 'Did not send email',
    });

    await expect(page.locator('.text-green-700')).toContainText(
      'Message sent successfully!',
    );
  });

  test('Should reject submission when honey pot field is filled', async ({
    page,
  }) => {
    await page.waitForFunction(() => {
      return (
        window.amplitude &&
        window.amplitude.getDeviceId &&
        typeof window.amplitude.getDeviceId() === 'string'
      );
    });

    const text = 'Who took the honey from the honey pot?';

    await page.fill('#name', 'Bot');
    await page.fill('#email', 'bot@bot.com');
    await page.fill('#subject', '[Bot] Should never be getting this');
    await page.fill('#message', text);
    await page.fill('#_info', text);

    const [request, response] = await Promise.all([
      page.waitForRequest('**/api/contact'),
      page.waitForResponse('**/api/contact'),
      page.click('button[type="submit"]'),
    ]);

    const postData = JSON.parse(request.postData() as string);

    expect(postData).toMatchObject({
      _info: expect.any(String),
    });

    // Our server returns a 200 to trick the bots but it sets the success
    // property in the response to string "true" instead of boolean true.
    expect(response.status()).toBe(200);
    await expect(await response.json()).toMatchObject({
      success: 'true',
    });

    await expect(page.locator('.text-green-700')).toContainText(
      'Message sent successfully!',
    );
  });
});
