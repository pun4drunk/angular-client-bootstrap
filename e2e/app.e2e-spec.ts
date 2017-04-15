import { AngularClientCrudPage } from './app.po';

describe('angular-client-crud App', () => {
  let page: AngularClientCrudPage;

  beforeEach(() => {
    page = new AngularClientCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
