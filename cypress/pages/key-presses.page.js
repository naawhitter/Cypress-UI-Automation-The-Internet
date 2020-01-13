export function visit() {
    cy.visit('/key_presses')
}

export function enter(phrase) {
    const input = cy.get("input[type=text]")
    input.clear().type(phrase)
}

export function checkResult(expectedKey) {
    const result = cy.get('#result')
    result.should('contains.text', expectedKey)
}