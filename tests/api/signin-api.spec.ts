import { test, expect } from '@playwright/test';

test('login inválido', async ({ request }) => {

  const response = await request.post(
    'http://localhost:8080/auth/signin',
    {
      data: {
        email: 'teste@teste.com',
        password: '123'
      }
    }
  );

  expect(response.status()).toBe(401);
});