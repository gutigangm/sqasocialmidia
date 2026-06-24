# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\signup-invalid-password-api.spec.ts >> senha inválida
- Location: tests\api\signup-invalid-password-api.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 400
Received: 422
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('senha inválida', async ({ request }) => {
  4  | 
  5  |   const response = await request.post(
  6  |     'http://localhost:8080/auth/signup',
  7  |     {
  8  |       data: {
  9  |         email: 'novo@email.com',
  10 |         password: '123'
  11 |       }
  12 |     }
  13 |   );
  14 | 
> 15 |   expect(response.status()).toBe(400);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  16 | });
```