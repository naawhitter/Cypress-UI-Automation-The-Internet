import { visit, clickAndVerifyJsAlertButton, clickAndVerifyJsConfirmButton, clickAndVerifyJsPromptButton } from '../pages/javascript-alerts.page'

describe('JavaScript Alerts Page', () => {
    beforeEach(() => {
        visit()
    })

    it('Check JS Alert Displays', () => {
        clickAndVerifyJsAlertButton('I am a JS Alert')
    })

    it('Check JS Confirm Displays', () => {
        clickAndVerifyJsConfirmButton('I am a JS Confirm')
    })

    it.skip('Check JS Prompt Displays', () => {
        clickAndVerifyJsPromptButton('I am a JS Prompt')
    })
})