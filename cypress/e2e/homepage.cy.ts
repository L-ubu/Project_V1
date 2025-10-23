describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the main heading', () => {
    cy.contains('h1', 'React Developer Showcase').should('be.visible');
  });

  it('navigates to features section when clicking explore button', () => {
    cy.contains('button', 'Explore Features').click();
    cy.get('#features').should('be.visible');
  });

  it('navigates to contact section when clicking get in touch button', () => {
    cy.contains('button', 'Get in Touch').click();
    cy.get('#contact').should('be.visible');
  });

  it('displays all feature cards', () => {
    cy.get('#features').scrollIntoView();
    cy.get('[data-testid="feature-card"]').should('have.length.at.least', 8);
  });

  it('displays technology stack section', () => {
    cy.contains('h2', 'Technology Stack').should('be.visible');
    cy.get('[data-testid="tech-category"]').should('have.length.at.least', 6);
  });

  it('displays projects section', () => {
    cy.contains('h2', 'Featured Projects').should('be.visible');
    cy.get('[data-testid="project-card"]').should('have.length.at.least', 6);
  });

  it('displays performance metrics', () => {
    cy.contains('h2', 'Performance & Quality Metrics').should('be.visible');
    cy.get('[data-testid="metric-card"]').should('have.length.at.least', 6);
  });

  it('displays contact section', () => {
    cy.get('#contact').scrollIntoView();
    cy.contains('h2', "Let's Work Together").should('be.visible');
    cy.contains('button', 'Download Resume').should('be.visible');
  });

  it('has working social links', () => {
    cy.get('#contact').scrollIntoView();
    cy.get('[data-testid="social-link"]').should('have.length.at.least', 3);
  });

  it('is responsive on mobile', () => {
    cy.viewport(375, 667);
    cy.contains('h1', 'React Developer Showcase').should('be.visible');
    cy.get('#features').scrollIntoView();
    cy.get('[data-testid="feature-card"]').should('be.visible');
  });

  it('has proper accessibility attributes', () => {
    cy.get('main').should('exist');
    cy.get('h1').should('exist');
    cy.get('nav').should('exist');
  });
});
