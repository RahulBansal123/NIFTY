describe('Header', () => {
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
      describe('nav', () => {
        it('Should navigate to Home page', () => {
          cy.get('[data-cy=nav-item]').contains('NIFTY').click();
          cy.url().should('include', '/');
        });
      });

      describe('user', () => {
        it('search user', () => {
          // We'll store user address in a variable so we can reuse it
          const userAddress = '0x0D1f2Bd5351a65a78Ac0BeF3C8fAEf643C046508';

          // Let's get the input element and use the `type` command to
          // input our new list item. After typing the content of our item,
          // we need to type the enter key as well in order to submit the input.
          // This input has a data-test attribute so we'll use that to select the
          // element in accordance with best practices:
          // https://on.cypress.io/selecting-elements
          cy.get('[data-cy=search-input]').type(`${userAddress}{enter}`);

          // Now that we've typed the address, let's check that it actually navigates to the user page and search the address
          cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/address/');
            expect(loc.search).to.eq(`?address=${userAddress}`);
            expect(loc.toString()).to.eq(
              `http://localhost:3000/address/?address=${userAddress}`
            );
          });
        });
      });
    });
  });
});
