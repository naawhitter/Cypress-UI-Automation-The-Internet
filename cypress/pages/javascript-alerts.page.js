export function visit() {
    cy.visit('/javascript_alerts')
}

export function clickAndVerifyJsAlertButton(expectedText) {
    const stub = cy.stub()  
    cy.on('window:alert', stub)
    cy.contains('Click for JS Alert').click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith(expectedText)      
    })  
}

export function clickAndVerifyJsConfirmButton(expectedText) {
    const stub = cy.stub()  
    cy.on('window:confirm', stub)
    cy.contains('Click for JS Confirm').click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith(expectedText)      
    }) 
}

export function clickAndVerifyJsPromptButton() {
    cy.stub(win, 'prompt').returns('The value you write inside prompt')
    cy.contains('Click for JS Prompt').click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith(expectedText)      
    }) 
    
}

export function checkResult(expectedText) {
    const result = cy.get("#result")
    result.should('have.text', expectedText)
}