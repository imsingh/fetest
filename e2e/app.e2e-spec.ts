import { FetestPage } from './app.po';

describe('fetest App', function() {
  let page: FetestPage;

  beforeEach(() => {
    page = new FetestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
