
export function checkMessage(expectedText) {
    const loginMessageDiv = cy.get('#flash')
    loginMessageDiv.should('be.visible')
    loginMessageDiv.should('contains.text', expectedText)
}

export function clickLogoutButton() {
    const logoutButton = cy.get('a[href*="logout"]')
    logoutButton.click()
}