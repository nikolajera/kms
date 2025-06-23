import { test, expect } from '@playwright/test';
import { BookDemoPage } from '../pages/BookDemoPage';
import { HomePage } from '../pages/HomePage';
import { URL } from '../constants/URL';

test.beforeEach(async ({ page }) => {
  await page.goto(URL.BASE_URL);
});

test('Validate "Book a Demo" link navigation', async ({ page }) => {
  // initiate pages 
  const homePage = new HomePage(page);
  const bookDemo = new BookDemoPage(page);
  // book a demo
  await homePage.bookDemo();
  // verify URL
  await expect(page).toHaveURL(URL.DEMO_URL);
  // input fields are interactable
  await bookDemo.typeFirstName('Nikola');
  await bookDemo.typeLastName('Jeremic');
  await bookDemo.typeJobTitle('QA');
  await bookDemo.typeEmail('njeremic@telesign.com');
  await bookDemo.typePhoneNumber('+38162243285');
  await bookDemo.typeMessage('Hi!!!');
})