import { AppPage } from './app.po';

describe('toh-animations App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', async () => {
    await page.navigateTo();
    expect(await page.getParagraphText()).toEqual('Tour of Heroes');
  });
});
