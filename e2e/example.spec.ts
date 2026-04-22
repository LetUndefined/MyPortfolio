import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByText('Building modern web experiences')).toBeVisible()
});


test('has work link', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', {name: 'work'}).click
});
