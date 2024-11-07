import { test, expect } from '@playwright/test';
import { Page, pageHrefs } from '@/utils/pages';

const pagesWithContactUsBanner = [Page.ABOUT_US, Page.SERVICES, Page.TOOLS];

for (const pageToTest of pagesWithContactUsBanner) {
  test(`Should be able to navigate to ${pageToTest} page`, async ({ page }) => {
    await page.goto(pageHrefs[pageToTest]);
    await page
      .getByTestId('contact-us-banner')
      .getByRole('link', { name: 'Contact us' })
      .click();
    await expect(page).toHaveURL(pageHrefs[Page.CONTACT]);
  });
}
