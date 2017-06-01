import { AngularioWithCustomDateadapterPage } from './app.po';

describe('angulario-with-custom-dateadapter App', () => {
  let page: AngularioWithCustomDateadapterPage;

  beforeEach(() => {
    page = new AngularioWithCustomDateadapterPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
