import { test, expect } from '@playwright/test';

test('email duplicado', async ({ request }) => {

  // 1. cria o usuário primeiro
  await request.post('http://localhost:8080/auth/signup', {
    data: {
      email: 'admin@email.com',
      password: 'Senha@123'
    }
  });

  // 2. tenta criar de novo
  const response = await request.post(
    'http://localhost:8080/auth/signup',
    {
      data: {
        email: 'admin@email.com',
        password: 'Senha@123'
      }
    }
  );

  expect(response.status()).toBe(409);
});