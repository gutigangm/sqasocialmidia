import { test, expect } from '@playwright/test';

test('deve mostrar erro quando senhas não coincidem', async ({ page }) => {

  await page.goto('http://localhost:3000/signup');

  await page.getByPlaceholder('seu@email.com')
    .fill('teste@email.com');

  await page.getByPlaceholder('••••••••')
    .first()
    .fill('Senha@123');

  await page.getByPlaceholder('••••••••')
    .nth(1)
    .fill('OutraSenha123@');

  await page.getByRole('button', {
    name: 'Criar conta'
  }).nth(1).click();

  await expect(
    page.getByText('As senhas não coincidem')
  ).toBeVisible();
});