import { test, expect } from '@playwright/test';

test('Should have link to peer review report and download valid PDF', async ({
  page,
  context,
}) => {
  await page.goto('/financial-services');
  const link = page.getByRole('link', { name: 'peer review report' });
  await expect(link).toHaveAttribute('href', '/pka-peer-review-2022.pdf');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    link.click(),
  ]);

  // Returns the path to the (successfully) downloaded file.
  // https://playwright.dev/docs/api/class-download#download-path
  const path = await download.path();
  expect(path).toBeTruthy();

  // Check PDF MIME type
  const response = await context.request.get('/pka-peer-review-2022.pdf');
  expect(response.headers()['content-type']).toBe('application/pdf');
  expect(response.ok()).toBeTruthy();
});
