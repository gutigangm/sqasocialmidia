import { test, expect } from '@playwright/test';

test('senha inválida', async ({ request }) => {

  const response = await request.post(
    'http://localhost:8080/auth/signup',
    {
      data: {
        email: 'novo@email.com',
        password: '123'
      }
    }
  );

  expect(response.status()).toBe(400);
});