import { visit, enter, checkResult } from '../pages/key-presses.page'

describe('Hover Page', () => {
    beforeEach(() => {
        visit()
    })

    it('Check numerical keys are correctly displayed in results', () => {
        enter(8)
        checkResult(8)

        enter(9.1)
        checkResult(1)
    })
})