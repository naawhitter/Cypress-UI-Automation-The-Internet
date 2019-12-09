
import { visit as visitLogin, clickLoginButton, checkMessage as checkLoginPageMessage, fillUsernameField, fillPasswordField } from '../pages/login.page'
import { checkMessage as checkSecurePageMessage, clickLogoutButton } from '../pages/secure-area.page'

describe('Login Page', () => {
    beforeEach(() => {
        visitLogin()
    })

    it('Submit empty form via button shows error message', () => {
        clickLoginButton()
        checkLoginPageMessage('Your username is invalid!')
    })

    it('Submit only username shows error message', () => {
        fillUsernameField("tomsmith")
        clickLoginButton()
        checkLoginPageMessage('Your password is invalid!')
    })

    it('Submit only password shows error message', () => {
        fillPasswordField("SuperSecretPassword!")
        clickLoginButton()
        checkLoginPageMessage('Your username is invalid!')
    })

    it('Submit invalid username shows error message', () => {
        fillUsernameField("invalid")
        fillPasswordField("SuperSecretPassword!")
        clickLoginButton()
        checkLoginPageMessage('Your username is invalid!')
    })

    it('Submit invalid password shows error message', () => {
        fillUsernameField("tomsmith")
        fillPasswordField("invalid")
        clickLoginButton()
        checkLoginPageMessage('Your password is invalid!')
    })

    it('Submit valid credientials shows logged in page', () => {
        fillUsernameField("tomsmith")
        fillPasswordField("SuperSecretPassword!")
        clickLoginButton()
        checkSecurePageMessage('You logged into a secure area!')
    })

    it('Logout of secure page', () => {
        fillUsernameField("tomsmith")
        fillPasswordField("SuperSecretPassword!")
        clickLoginButton()
        clickLogoutButton()
        checkLoginPageMessage('You logged out of the secure area!')
    })
})