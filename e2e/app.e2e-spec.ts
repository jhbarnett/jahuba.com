import { Jahuba.ComPage } from './app.po';

describe('jahuba.com App', function() {
  let page: Jahuba.ComPage;

  beforeEach(() => {
    page = new Jahuba.ComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
