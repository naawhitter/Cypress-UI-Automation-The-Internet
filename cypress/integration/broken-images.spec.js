import { visit, checkImagesDisplayed } from '../pages/broken-images.page'

describe('Broken Images Page', () => {
    beforeEach(() => {
        visit()
    })

    it('All images load correctly', () => {
        visit()
        checkImagesDisplayed()
    })
})