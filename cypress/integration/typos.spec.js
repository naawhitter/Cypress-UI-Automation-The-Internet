import { visit, checkText } from '../pages/typos.page'

describe('Typos Page', () => {
    beforeEach(() => {
        visit()
    })

    it('Check text for typos', () => {
        checkText('Sometimes you\'ll see a typo, other times you won\'t')
    })
})