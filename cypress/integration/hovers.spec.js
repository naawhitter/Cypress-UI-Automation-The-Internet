import { visit, hoverOverUserAvatar, checkCaption } from '../pages/hovers.page'

describe('Hover Page', () => {
    beforeEach(() => {
        visit()
    })

    it('Check I can mouse over avatar', () => {
        hoverOverUserAvatar(1)
        checkCaption(1)
    })
})