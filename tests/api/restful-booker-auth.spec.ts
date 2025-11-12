import {test ,expect} from "@playwright/test";

test('auth', async ({ request }) => {
    const data = {
        username: 'admin',
        password : "password123"

    }
    const response = await request.post('https://restful-booker.herokuapp.com/auth',{
        data: {
            username: 'admin',
            password : "password123"
        }
      });
      expect(response.ok()).toBeTruthy();
});