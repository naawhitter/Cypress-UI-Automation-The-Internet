export function visit() {
    cy.visit('/typos')
}

export function checkText(expectedText) {
    const textParagraph = cy.get('.example > p').eq(1)
    textParagraph.should('contain.text', expectedText)
}