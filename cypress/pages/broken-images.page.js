export function visit() {
    cy.visit('/broken_images')
}

export function checkImagesDisplayed() {
    const images = cy.get(".example").find("img")
    images.each(($el, index, $list) => {
        cy.wrap($el).should('be.visible')
    })
}