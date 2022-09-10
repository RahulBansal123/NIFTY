describe('Footer', () => {
  // For desktop view
  context('720p resolution', () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a desktop browser,
       * with a 720p monitor
       */
      cy.viewport(1280, 720);
    });
    describe('When you visit home', () => {
      it('Should visit home page', () => {
        cy.visit('/');
      });
      describe('footer link', () => {
        it('Should navigate to Home page', () => {
          cy.get('[data-cy=footer-item]').contains('NIFTY').click();
          cy.url().should('include', '/');
        });
      });
      describe('footer socials', () => {
        it('check socials', () => {
          // We'll store socials in variables so we can reuse it
          const socials = {
            twitter: 'https://twitter.com/',
            github: 'https://github.com/rahulbansal123/nifty',
            linkedin: 'https://linkedin.com/',
          };

          cy.get('[data-social=twitter]').should(
            'have.attr',
            'href',
            socials.twitter
          );
          cy.get('[data-social=github]').should(
            'have.attr',
            'href',
            socials.github
          );
          cy.get('[data-social=linkedin]').should(
            'have.attr',
            'href',
            socials.linkedin
          );
        });
      });
    });
  });
});
