export function visit() {
    cy.visit('/hovers')
}

export function hoverOverUserAvatar(num) {
    const caption = cy.get(".figcaption")
    caption.should('be.hidden').eq(1).invoke('show')
}

export function checkCaption(num) {
    const figure = cy.get(".figcaption").eq(1).get('.figcaption')
    const name = figure.find('h5')
    const profileLink = cy.get(".figcaption").eq(1).find('a')

    name.should('be.visible')
    name.should('contains.text', 'name: user' + (num + 1))

    profileLink.should('be.visible')
    profileLink.should('contains.text', 'View profile')
}