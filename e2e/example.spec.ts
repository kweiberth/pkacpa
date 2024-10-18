import { test, expect } from '@playwright/test';

test('Page has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Palermo/Kissinger & Associates, P.C.');
});
