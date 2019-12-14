export function visit() {
    cy.visit('/entry_ad')
}

export function clickReEnableModelWindow() {
    const reEnableLink = cy.get('#restart-ad')
    reEnableLink.click()
}

export function closeModalWindow() {
    const closeLink = cy.get('#modal').contains('Close')
    closeLink.click()
}

export function checkModalWindowIsVisible(isVisible) {
    const modalWindow = cy.get('#modal')
    
    if (isVisible) {
        modalWindow.should('be.visible')
    } else {
        modalWindow.should('be.not.visible')
    }
}