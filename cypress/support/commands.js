// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command to wait for animations to complete
Cypress.Commands.add('waitForAnimations', () => {
  cy.get('body').should('not.have.class', 'animating');
});

// Custom command to scroll to element with smooth behavior
Cypress.Commands.add('scrollToElement', (selector) => {
  cy.get(selector).scrollIntoView({ behavior: 'smooth' });
});

// Custom command to check if element is in viewport
Cypress.Commands.add('isInViewport', (selector) => {
  cy.get(selector).then(($el) => {
    const rect = $el[0].getBoundingClientRect();
    expect(rect.top).to.be.at.least(0);
    expect(rect.bottom).to.be.at.most(Cypress.config('viewportHeight'));
  });
});

// Custom command to take screenshot with custom name
Cypress.Commands.add('takeScreenshot', (name) => {
  cy.screenshot(name, { capture: 'viewport' });
});

// Custom command to check performance metrics
Cypress.Commands.add('checkPerformance', () => {
  cy.window().then((win) => {
    const performance = win.performance;
    const navigation = performance.getEntriesByType('navigation')[0];
    
    // Check if page loaded within acceptable time
    expect(navigation.loadEventEnd - navigation.loadEventStart).to.be.below(3000);
  });
});
