import { test, expect } from '@playwright/test';
import { Page, pageHrefs, pageTitles } from '@/utils/pages';

test.describe('Mobile screen size', () => {
  for (const viewportSize of [
    { width: 375, height: 667 },

    // This is the breakpoint (1024px) at which the menu changes from mobile to
    // desktop.
    { width: 1023, height: 800 },
  ]) {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(viewportSize);
      await page.goto('/');
    });

    for (const pageToTest of Object.values(Page)) {
      test(`Should be able to navigate to ${pageToTest} page on ${viewportSize.width}x${viewportSize.height}px screen`, async ({
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
  }
});

test.describe('Desktop screen size', () => {
  test.beforeEach(async ({ page }) => {
    // This is the breakpoint (1024px) at which the menu changes from mobile to
    // desktop.
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('/');
  });

  for (const pageToTest of Object.values(Page).filter(
    // The link to the contact page is a separate button from these nav items so
    // we'll test it separately.
    (pageToTest) => pageToTest !== Page.CONTACT,
  )) {
    test(`Should be able to navigate to ${pageToTest} page`, async ({
      page,
    }) => {
      const menuButton = page.locator('button', { hasText: 'Menu' });
      await expect(menuButton).toBeHidden();
      await page
        .getByTestId('desktop-menu-item')
        .getByText(pageTitles[pageToTest])
        .click();
      await expect(page).toHaveURL(pageHrefs[pageToTest]);
    });
  }

  test(`Should be able to navigate to contact page via "Contact us" button`, async ({
    page,
  }) => {
    await page
      .locator('header')
      .getByRole('link', { name: 'Contact us' })
      .click();
    await expect(page).toHaveURL(pageHrefs[Page.CONTACT]);
  });
});
