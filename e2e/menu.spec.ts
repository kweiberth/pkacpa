import { test, expect } from '@playwright/test';
import { Page, pageHrefs, pageTitles } from '@/utils/pages';

test.describe('Mobile screen size', () => {
  // TODO: Do it at the exact pixel that it changes, as well as one that's
  // just smaller like a normal mobile phone.
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
  });

  for (const pageToTest of Object.values(Page)) {
    test(`Should be able to navigate to ${pageToTest} page`, async ({
      page,
    }) => {
      const menuButton = page.locator('button', { hasText: 'Menu' });
      await expect(menuButton).toBeVisible();
      await expect(menuButton).toBeEnabled();
      await menuButton.click();
      const mobileMenu = page.locator('[data-testid="mobile-menu"]');
      await expect(mobileMenu).toBeVisible();
      await page
        .getByTestId('mobile-menu-item')
        .getByText(pageTitles[pageToTest])
        .click();
      await expect(page).toHaveURL(pageHrefs[pageToTest]);
    });
  }
});

test.describe('Desktop screen size', () => {
  // TODO: Do it at the exact pixel that it changes, as well as one that's
  // bigger like a normal desktop.
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
  });

  // TODO: Loop through pages, not including contact us b/c we'll test button
  test(`Should be able to navigate to ${Page.ABOUT_US} page`, async ({
    page,
  }) => {
    const menuButton = page.locator('button', { hasText: 'Menu' });
    await expect(menuButton).toBeHidden();
    await page
      .getByTestId('desktop-menu-item')
      .getByText('Our practice')
      .click();
    await expect(page).toHaveURL('/about-us');
  });

  // TODO: Add test for contact us button which probably has different test ID?
});
