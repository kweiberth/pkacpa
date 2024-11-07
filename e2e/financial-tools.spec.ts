import { test, expect } from '@playwright/test';

const links = [
  { name: 'Remote connection', href: 'http://www.naremote.com/pka/' },
  {
    name: 'File sharing',
    href: 'https://pkacpa.sharefile.com/Authentication/Login',
  },
  {
    name: 'Safe send portal',
    href: 'https://login.safesendreturns.com/',
  },
];

for (const linkToTest of links) {
  test(`Should have link to ${linkToTest.name}`, async ({ page }) => {
    await page.goto('/');
    const link = page.getByRole('link', { name: linkToTest.name, exact: true });
    await expect(link).toHaveAttribute('href', linkToTest.href);
  });
}
