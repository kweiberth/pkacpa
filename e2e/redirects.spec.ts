import { test, expect } from '@playwright/test';

test('Should redirect /our-practice to /about-us', async ({ page }) => {
  await page.goto('/our-practice');
  await expect(page).toHaveURL('/about-us');
});

test('Should redirect /financial-services to /services', async ({ page }) => {
  await page.goto('/financial-services');
  await expect(page).toHaveURL('/services');
});

test('Should redirect /financial-tools to /tools', async ({ page }) => {
  await page.goto('/financial-tools');
  await expect(page).toHaveURL('/tools');
});
