# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\signup-suplicate-email-api.spec.ts >> email duplicado
- Location: tests\api\signup-suplicate-email-api.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 409
Received: 200
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('email duplicado', async ({ request }) => {
  4  | 
  5  |   const response = await request.post(
  6  |     'http://localhost:8080/auth/signup',
  7  |     {
  8  |       data: {
  9  |         email: 'admin@email.com',
  10 |         password: 'Senha@123'
  11 |       }
  12 |     }
  13 |   );
  14 | 
> 15 |   expect(response.status()).toBe(409);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  16 | });
```