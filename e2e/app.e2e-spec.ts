import { CliExpPage } from './app.po';

describe('cli-exp App', () => {
  let page: CliExpPage;

  beforeEach(() => {
    page = new CliExpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
