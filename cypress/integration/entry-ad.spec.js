import { visit, clickReEnableModelWindow, closeModalWindow, checkModalWindowIsVisible } from '../pages/entry-ad.page'

describe('Entry Ad Page', () => {
    beforeEach(() => {
        visit()
    })

    it('Check model window opens on first load', () => {
        checkModalWindowIsVisible(true)
    })

    it('Check model window doesn\'t opens on second load', () => {
        checkModalWindowIsVisible(true)
        closeModalWindow()
        visit()
        checkModalWindowIsVisible(false)
    })

    it('Check model window opens if I click the re-enable link', () => {
        closeModalWindow()
        clickReEnableModelWindow()
        checkModalWindowIsVisible(true)
    })
})