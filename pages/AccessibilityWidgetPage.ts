import { Page } from '@playwright/test';
import { AccessibilityConstants } from '../constants/AccessibilityConstants';
import { UIComponentsNavigator } from '../components/UIComponentsNavigator';

export class AccessibilityWidgetPage extends UIComponentsNavigator {
  constructor(protected page: Page) {
    super(page);

  }
  // keyboard
  async checkKeyboardNavigation() {
    await this.checkbox.checkByText(AccessibilityConstants.OPTIONS.KEYBOARD_NAVIGATION.label);
  }

  async keyboardNavigationIsChecked(shouldBeChecked: boolean = true) {
    await this.checkbox.checkboxIsChecked(AccessibilityConstants.OPTIONS.KEYBOARD_NAVIGATION.label, shouldBeChecked);
  }
  // animations
  async checkDisableAnimations() {
    await this.checkbox.checkByText(AccessibilityConstants.OPTIONS.DISABLE_ANIMATIONS.label);
  }

  async disableAnimationsIsChecked(shouldBeChecked: boolean = true) {
    await this.checkbox.checkboxIsChecked(AccessibilityConstants.OPTIONS.DISABLE_ANIMATIONS.label, shouldBeChecked);
  }

  // contrast
  async checkContrast() {
    await this.checkbox.checkByText(AccessibilityConstants.OPTIONS.CONTRAST.label);
  }

  async contrastIsChecked(shouldBeChecked: boolean = true) {
    await this.checkbox.checkboxIsChecked(AccessibilityConstants.OPTIONS.CONTRAST.label, shouldBeChecked);
  }
  // increase text
  async checkIncreaseText() {
    await this.checkbox.checkByText(AccessibilityConstants.OPTIONS.INCREASE_TEXT.label);
  }

  async increaseTextIsChecked(shouldBeChecked: boolean = true) {
    await this.checkbox.checkboxIsChecked(AccessibilityConstants.OPTIONS.INCREASE_TEXT.label, shouldBeChecked);
  }
  // decrease text
  async checkDecreaseText() {
    await this.checkbox.checkByText(AccessibilityConstants.OPTIONS.DECREASE_TEXT.label);
  }

  async decreaseTextIsChecked(shouldBeChecked: boolean = true) {
    await this.checkbox.checkboxIsChecked(AccessibilityConstants.OPTIONS.DECREASE_TEXT.label, shouldBeChecked);
  }
  // readable font 
  async checkReadableFont() {
    await this.checkbox.checkByText(AccessibilityConstants.OPTIONS.READABLE_FONT.label);
  }

  async readableFontIsChecked(shouldBeChecked: boolean = true) {
    await this.checkbox.checkboxIsChecked(AccessibilityConstants.OPTIONS.READABLE_FONT.label, shouldBeChecked);
  }
  //mark title
  async checkMarkTitles() {
    await this.checkbox.checkByText(AccessibilityConstants.OPTIONS.MARK_TITLES.label);
  }

  async markTitlesIsChecked(shouldBeChecked: boolean = true) {
    await this.checkbox.checkboxIsChecked(AccessibilityConstants.OPTIONS.MARK_TITLES.label, shouldBeChecked);
  }
  // highlight
  async checkHighlightLiksAndButtons() {
    await this.checkbox.checkByText(AccessibilityConstants.OPTIONS.HIGHLIGHT.label);
  }

  async uncheckHighlightLiksAndButtons() {
    await this.checkbox.uncheckByText(AccessibilityConstants.OPTIONS.HIGHLIGHT.label);
  }

  async highlightLiksAndButtonsIsChecked(shouldBeChecked: boolean = true) {

    await this.checkbox.checkboxIsChecked(AccessibilityConstants.OPTIONS.HIGHLIGHT.label, shouldBeChecked);
  }
  async linksAndButtonsAreHighlighted(shouldBeChecked: boolean = true) {

    await this.attribute.assertAttributeContainsText(this.page.locator('body'), 'class', AccessibilityConstants.OPTIONS.HIGHLIGHT.className, shouldBeChecked);
  }
}
