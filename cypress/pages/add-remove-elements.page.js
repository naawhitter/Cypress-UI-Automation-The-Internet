    export function visit() {
        cy.visit('add_remove_elements/')
    }

    export function clickAddElementButton() {
        const addElementButton = cy.get('button').contains('Add Element')
        addElementButton.click()
    }

    export function clickDeleteButton() {
        const deleteButtons = cy.get('button').contains('Delete')
        deleteButtons.first().click()
    }

    export function checkDeleteButtons(num) {
        const deleteButtons = cy.get('button').contains('Delete')
        deleteButtons.should('to.have.length', num)
    }