export function visit() {
    cy.visit('/horizontal_slider')
}

export function setSliderValue(value) {
    const slider = cy.get('input[type=range]')
    slider.as('range')
        .invoke('val', value)
        .trigger('change')
}

export function checkSliderValue(value) {
    cy.get('@range').siblings('span').should('have.text', value.toString())
}
