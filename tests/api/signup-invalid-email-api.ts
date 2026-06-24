import { test, expect } from '@playwright/test';

test('email inválido', async ({ request }) => {

  const response = await request.post(
    'http://localhost:8080/auth/signup',
    {
      data: {
        email: 'emailinvalido',
        password: 'Senha@123'
      }
    }
  );

  expect(response.status()).toBe(400);
});