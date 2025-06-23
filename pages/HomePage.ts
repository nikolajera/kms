import { Page } from '@playwright/test';
import { UIComponentsNavigator } from '../components/UIComponentsNavigator';
import { DemoConstants } from '../constants/DemoConstants';
import { Buttons } from '../constants/Buttons';
import { Links } from '../constants/Links';

export class HomePage extends UIComponentsNavigator {
  constructor(protected page: Page, closeBanner = true) {
    super(page);
    if (closeBanner)
      this.autoCloseBanner();
  }

  async autoCloseBanner() {
    await this.button.clickOnButtonIfAppears(Buttons.CLOSE_BANNER);
  }

  async openAccessibillityWidget() {
    await this.button.clickOnTheButton(Buttons.TOGGLE_ACCESSIBILITY_TOOLBAR);
  }

  async bookDemo() {
    await this.link.openBannerByText(DemoConstants.BOOK_A_DEMO);
  }

  async roiCalculator() {
    await this.link.openLink(Links.ROI_CALCULATOR);
  }
  async goToLinkedlnPage() {
    await this.link.openLink(Links.LINKEDIN);
  }

  async goToYoutubePage() {
    await this.link.openLink(Links.YOUTUBE);
  }
}