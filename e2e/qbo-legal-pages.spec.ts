import { expect, test } from '@playwright/test';

const pages = [
  {
    path: '/qbo-app-terms',
    title: 'Internal QuickBooks Deposit Monitor Terms | PKA',
    heading:
      'Internal QuickBooks Deposit Monitor — Terms of Use and End User License Agreement',
    finalSection: '13. Contact',
  },
  {
    path: '/qbo-app-privacy',
    title: 'Internal QuickBooks Deposit Monitor Privacy Policy | PKA',
    heading: 'Internal QuickBooks Deposit Monitor — Privacy Policy',
    finalSection: '10. Contact',
  },
] as const;

for (const legalPage of pages) {
  test(`${legalPage.path} is public and complete`, async ({ page }) => {
    const response = await page.goto(legalPage.path);

    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(legalPage.title);
    await expect(
      page.getByRole('heading', { level: 1, name: legalPage.heading }),
    ).toBeVisible();
    await expect(
      page.getByText('Effective date: August 13, 2026'),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 2, name: legalPage.finalSection }),
    ).toBeVisible();
    await expect(page.getByText('9 East Beau Street')).toBeVisible();
    await expect(page.locator('#amplitude-script')).toHaveCount(0);
  });
}

test('terms links to the privacy policy', async ({ page }) => {
  await page.goto('/qbo-app-terms');

  await expect(
    page.getByRole('link', {
      name: 'Internal QuickBooks Deposit Monitor Privacy Policy',
    }),
  ).toHaveAttribute('href', '/qbo-app-privacy');
});

test('legal pages use the measured readable column on desktop and mobile', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/qbo-app-privacy');

  const desktopArticle = await page.locator('article').boundingBox();
  expect(desktopArticle?.width).toBe(760);
  await expect(page.locator('article')).toHaveCSS('font-size', '16px');
  await expect(page.locator('article')).toHaveCSS('line-height', '24px');

  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();

  const mobileArticle = await page.locator('article').boundingBox();
  const mobileClientWidth = await page.evaluate(
    () => document.documentElement.clientWidth,
  );
  expect(mobileArticle?.width).toBe(mobileClientWidth);
  await expect(page.locator('article')).toHaveCSS('font-size', '15px');
  await expect(page.locator('article')).toHaveCSS('padding-top', '24px');
  await expect(page.locator('article')).toHaveCSS('padding-bottom', '48px');
  await expect(page.locator('article')).toHaveCSS('padding-left', '18px');
  await expect(page.locator('article')).toHaveCSS('padding-right', '18px');
});
