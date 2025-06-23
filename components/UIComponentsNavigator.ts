import { Page } from '@playwright/test';
import { Checkbox } from './Checkbox';
import { InputField } from './InputField';
import { Link } from './Link';
import { Button } from './Button';
import { Attribute } from './Attribute';
import { SpinButton } from './SpinButton';
export class UIComponentsNavigator {

  constructor(protected page: Page) { }
  private _checkbox?: Checkbox;
  private _inputField?: InputField;
  private _link?: Link;
  private _button?: Button;
  private _attribute?: Attribute;
  private _spinButton?: SpinButton


  get checkbox(): Checkbox {
    if (!this._checkbox) {
      this._checkbox = new Checkbox(this.page);
    }
    return this._checkbox;
  }
  get inputField(): InputField {
    if (!this._inputField) {
      this._inputField = new InputField(this.page);
    }
    return this._inputField;
  }

  get link(): Link {
    if (!this._link) {
      this._link = new Link(this.page);
    }
    return this._link;
  }
  get button(): Button {
    if (!this._button) {
      this._button = new Button(this.page);
    }
    return this._button;
  }

  get attribute(): Attribute {
    if (!this._attribute) {
      this._attribute = new Attribute(this.page);
    }
    return this._attribute;
  }
  get spinButton(): SpinButton {
    if (!this._spinButton) {
      this._spinButton = new SpinButton(this.page);
    }
    return this._spinButton;
  }
}