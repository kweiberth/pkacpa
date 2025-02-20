import { test, expect } from '@playwright/test';

// Ideally we would import the employees from the utils/employees.ts file, e.g.
// import { employees } from '@/utils/employees';
// but Playwright handles it's own TS compilation and it doesn't handle the
// image imports we have in the employees/headshots utils files. Tried for too
// long to make it work, but couldn't figure it out. Let's manually define the
// test cases.
const employees = [
  {
    name: 'Frank J. Palermo, Jr',
    title: 'CPA, Founder',
    nickname: 'Frank',
    email: 'fp@pkacpa.com',
  },
  {
    name: 'Gary A. Kissinger',
    title: 'CPA, Shareholder',
    nickname: 'Gary',
    email: 'gk@pkacpa.com',
  },
  {
    name: 'Frank J. Palermo III',
    title: 'CPA, Shareholder',
    nickname: 'Frank',
    email: 'fjp@pkacpa.com',
  },
  {
    name: 'John Palermo',
    title: 'CPA, Shareholder',
    nickname: 'John',
    email: 'jp@pkacpa.com',
  },
  {
    name: 'Lisa Vipperman',
    title: 'CPA',
    nickname: 'Lisa',
    email: 'lv@pkacpa.com',
  },
  {
    name: 'Denise Roberts',
    title: 'Staff accountant',
    nickname: 'Denise',
    email: 'dr@pkacpa.com',
  },
  {
    name: 'Lindsay Fritz',
    title: 'Payroll specialist',
    nickname: 'Lindsay',
    email: 'lf@pkacpa.com',
  },
  {
    name: 'Matt Kissinger',
    title: 'Staff accountant',
    nickname: 'Matt',
    email: 'mk@pkacpa.com',
  },
  {
    name: 'Jaime DeCecco',
    title: 'Staff accountant',
    nickname: 'Jaime',
    email: 'jd@pkacpa.com',
  },
  {
    name: 'Emily Knier',
    title: 'Staff accountant',
    nickname: 'Emily',
    email: 'ek@pkacpa.com',
  },
  {
    name: 'Katie Worthy',
    title: 'Staff accountant',
    nickname: 'Katie',
    email: 'kw@pkacpa.com',
  },
  {
    name: 'Kelsey McConnell',
    title: 'Administrative assistant',
    nickname: 'Kelsey',
    email: 'km@pkacpa.com',
  },
];

for (const employee of employees) {
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
