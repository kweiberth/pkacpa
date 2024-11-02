import { test, expect } from '@playwright/test';

test('Should redirect /our-practice to /about-us', async ({ page }) => {
  await page.goto('/our-practice');
  expect(page.url()).toMatch(/\/about-us$/);
});

test('Should redirect /financial-services to /services', async ({ page }) => {
  await page.goto('/financial-services');
  expect(page.url()).toMatch(/\/services$/);
});

test('Should redirect /financial-tools to /tools', async ({ page }) => {
  await page.goto('/financial-tools');
  expect(page.url()).toMatch(/\/tools$/);
});
