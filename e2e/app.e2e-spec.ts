import { AngularCliWidthJQueryPage } from './app.po';

describe('angular-cli-width-jquery App', () => {
  let page: AngularCliWidthJQueryPage;

  beforeEach(() => {
    page = new AngularCliWidthJQueryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
