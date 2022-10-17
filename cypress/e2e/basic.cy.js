describe('Test home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title text', () => {
    cy.get('h1').contains('Welcome to Ismoil Shokirov\'s blog');
  });
});
