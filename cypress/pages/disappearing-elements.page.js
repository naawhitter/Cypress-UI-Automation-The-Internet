export function visit() {
    cy.visit('/disappearing_elements')
}

export function checkHomeButton(expectedText) { 
    const homeButton = cy.get('a[href="/"]')
    homeButton.should('have.text', expectedText)
    homeButton.should('be.visible')
}

export function checkAboutButton(expectedText) { 
    const aboutButton = cy.get('a[href="/about/"]')
    aboutButton.should('have.text', expectedText)
    aboutButton.should('be.visible')
}

export function checkContactUsButton(expectedText) { 
    const contactUsButton = cy.get('a[href="/contact-us/"]')
    contactUsButton.should('have.text', expectedText)
    contactUsButton.should('be.visible')
}

export function checkPortfolioButton(expectedText) { 
    const portfolioButton = cy.get('a[href="/portfolio/"]')
    portfolioButton.should('have.text', expectedText)
    portfolioButton.should('be.visible')
}

export function checkGalleryButton(expectedText) { 
    const portfolioButton = cy.get('a[href="/gallery/"]')
    portfolioButton.should('have.text', expectedText)
    portfolioButton.should('be.visible')
}

export function checkNoButtonsDisplayed(expectedNo) {
    const buttons = cy.get('li')
    buttons.should('have.length', 5)
}