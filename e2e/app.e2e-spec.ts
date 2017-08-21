import { RokodePage } from './app.po';

describe('rokode App', () => {
  let page: RokodePage;

  beforeEach(() => {
    page = new RokodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
