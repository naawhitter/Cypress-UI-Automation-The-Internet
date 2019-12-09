export function visit() {
    cy.visit('/javascript_alerts')
}

export function clickAndVerifyJsAlertButton(expectedText) {
    // const jsAlertButton = cy.contains("Click for JS Alert")
    // const stub = cy.stub()
    
    // jsAlertButton.click()
    // cy.on('window:alert', stub)

    // expect(stub.getCall(0)).to.be.calledWith("Hi")

    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.contains("Click for JS Alert").click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith(expectedText)      
    })  

}

export function clickJsConfirmButton() {
    const jsConfirmButton = cy.contains("Click for JS Confirm")
    jsConfirmButton.click()
}

export function clickJsPromptButton() {
    const jsPromptButton = cy.contains("Click for JS Prompt")
    jsPromptButton.click()
}

export function checkJsAlert(expectedText) {
}

export function checkResult(expectedText) {
    const result = cy.get("#result")
    result.should('have.text', expectedText)
}