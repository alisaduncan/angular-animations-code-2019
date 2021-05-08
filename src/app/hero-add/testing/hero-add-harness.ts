import { ComponentHarness } from '@angular/cdk/testing';

export class HeroAddHarness extends ComponentHarness {
  static hostSelector = 'app-hero-add';

  private readonly getButtonElement = this.locatorFor('button');
  private readonly getInputElement = this.locatorFor('input');

  async setValue(newValue: string): Promise<void> {
    const inputEl = await this.getInputElement();
    await inputEl.clear();
    if (newValue) {
      await inputEl.sendKeys(newValue);
    }
    await inputEl.setInputValue(newValue);
  }

  async getValue(): Promise<string> {
    const inputEl = await this.getInputElement();
    return inputEl.text();
  }

  async clickButton(): Promise<void> {
    const btn = await this.getButtonElement();
    await btn.click();
  }
}
