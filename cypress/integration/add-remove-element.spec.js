import { visit, clickAddElementButton, clickDeleteButton, checkDeleteButtons } from '../pages/add-remove-elements.page'

describe('Add Remove Elements Page', () => {
        beforeEach(() => {
            visit()
            clickAddElementButton()
        })

        it('Clicking \'Add Element\' button shows one delete button', () => {
            checkDeleteButtons(1)
        })
    
        it('Clicking \'Delete\' button removes delete button', () => {
            clickDeleteButton()
            checkDeleteButtons(0)
        })
    })