import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://saludtools.carecloud.com.co/');
  await page.goto('https://saludtools.carecloud.com.co/#/');
  await page.goto('https://saludtools.carecloud.com.co/#/login/login?return_to=%23%2Fwelcome');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('test');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('testing.com');
  await page.getByRole('button', { name: 'Ingresar' }).click();
});