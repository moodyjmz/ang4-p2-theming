import { Ang4P2ThemePage } from './app.po';

describe('ang4-p2-theme App', () => {
  let page: Ang4P2ThemePage;

  beforeEach(() => {
    page = new Ang4P2ThemePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
