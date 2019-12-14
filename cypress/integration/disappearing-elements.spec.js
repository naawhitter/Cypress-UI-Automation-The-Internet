import { visit, checkHomeButton, checkAboutButton, checkContactUsButton, checkPortfolioButton, checkGalleryButton, checkNoButtonsDisplayed } from '../pages/disappearing-elements.page'

describe('Disappearing Elements Page', () => {
    beforeEach(() => {
        visit()
    })

    it('Has all menu buttons', () => {
        checkHomeButton('Home')
        checkAboutButton('About')
        checkContactUsButton('Contact Us')
        checkPortfolioButton('Portfolio')
        checkGalleryButton('Gallery')
        checkNoButtonsDisplayed(5)
    })
})