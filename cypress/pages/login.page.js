export function visit() {
        cy.visit('login')
    }

    export function fillUsernameField(username) {
        const usernameField = cy.get('input[name="username"]')
        usernameField.type(username)
    }

    export function fillPasswordField(password) {
        const passwordField = cy.get('input[name="password"]')
        passwordField.type(password, {log: false})
    }

    export function clickLoginButton() {
        const loginButton = cy.get('.radius')
        loginButton.click()
    }

    export function checkMessage(expectedText) {
        const errorMessageDiv = cy.get('#flash')
        errorMessageDiv.should('be.visible')
        errorMessageDiv.should('contains.text', expectedText)
    }

    export function submitForm() {
        const loginForm = cy.get('form[name="login"]')
        loginForm.submit()
    }