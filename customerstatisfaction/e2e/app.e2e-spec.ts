import { CustomerstatisfactionPage } from './app.po';

describe('customerstatisfaction App', function() {
  let page: CustomerstatisfactionPage;

  beforeEach(() => {
    page = new CustomerstatisfactionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
