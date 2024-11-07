import { test, expect } from '@playwright/test';

test('Our practice CTA should be there and direct to about us page', async ({
  page,
}) => {
  await page.goto('/');
  await page
    .getByTestId('home-page-CTAs')
    .getByRole('link', { name: 'Our practice' })
    .click();
  await expect(page).toHaveURL('/about-us');
});

test('Financial services CTA should be there and direct to services page', async ({
  page,
}) => {
  await page.goto('/');
  await page
    .getByTestId('home-page-CTAs')
    .getByRole('link', { name: 'Financial services' })
    .click();
  await expect(page).toHaveURL('/services');
});

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
