import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AccessibilityWidgetPage } from '../pages/AccessibilityWidgetPage';
import { URL } from '../constants/URL';

test.beforeEach(async ({ page }) => {
  await page.goto(URL.BASE_URL);
});

test('Validate Default State Of Accessibility Toggles', async ({ page }) => {
  // initiate pages 
  const homePage = new HomePage(page);
  const accessibilityWidget = new AccessibilityWidgetPage(page);
  // open widget 
  await homePage.openAccessibillityWidget();
  // check deafult state of toggles
  await accessibilityWidget.keyboardNavigationIsChecked(false);
  await accessibilityWidget.disableAnimationsIsChecked(false);
  await accessibilityWidget.contrastIsChecked(false);
  await accessibilityWidget.increaseTextIsChecked(false);
  await accessibilityWidget.decreaseTextIsChecked(false);
  await accessibilityWidget.readableFontIsChecked(false);
  await accessibilityWidget.markTitlesIsChecked(false);
  await accessibilityWidget.highlightLiksAndButtonsIsChecked(false);
});

test('Highlight Links And Buttons Using Accessibility Toggle', async ({ page }) => {
  // initiate pages  
  const homePage = new HomePage(page);
  const accessibilityWidget = new AccessibilityWidgetPage(page);
  // open widget 
  await homePage.openAccessibillityWidget();
  // check highlight links and buttons
  await accessibilityWidget.checkHighlightLiksAndButtons();
  await accessibilityWidget.highlightLiksAndButtonsIsChecked();
  await accessibilityWidget.linksAndButtonsAreHighlighted();
  // uncheck highlight links and buttons
  await accessibilityWidget.uncheckHighlightLiksAndButtons();
  await accessibilityWidget.highlightLiksAndButtonsIsChecked(false);
  await accessibilityWidget.linksAndButtonsAreHighlighted(false);

});