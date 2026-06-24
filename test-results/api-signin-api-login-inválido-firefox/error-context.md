# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\signin-api.spec.ts >> login inválido
- Location: tests\api\signin-api.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 401
Received: 422
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('login inválido', async ({ request }) => {
  4  | 
  5  |   const response = await request.post(
  6  |     'http://localhost:8080/auth/signin',
  7  |     {
  8  |       data: {
  9  |         email: 'teste@teste.com',
  10 |         password: '123'
  11 |       }
  12 |     }
  13 |   );
  14 | 
> 15 |   expect(response.status()).toBe(401);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  16 | });
```