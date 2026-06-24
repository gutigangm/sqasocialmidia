import { test, expect } from '@playwright/test';

test('deve exibir tela de login', async ({ page }) => {
  await page.goto('http://localhost:3000/signin');

  await expect(
    page.getByPlaceholder('seu@email.com')
  ).toBeVisible();

  await expect(
    page.getByPlaceholder('••••••••')
  ).toBeVisible();
});