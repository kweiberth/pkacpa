import { test, expect } from '@playwright/test';
import { employees } from '@/utils/employees';

for (const employee of Object.values(employees)) {
  test(`${employee.name} should have a card with their name, title and email link`, async ({
    page,
  }) => {
    await page.goto('/about-us');
    const card = page
      .getByTestId('employee-card')
      .filter({ hasText: employee.name });
    await expect(card.getByText(employee.name)).toBeVisible();
    await expect(card.getByText(employee.title)).toBeVisible();
    await expect(
      card.getByRole('link', { name: `Email ${employee.nickname}` }),
    ).toHaveAttribute('href', `mailto:${employee.email}`);
  });
}
