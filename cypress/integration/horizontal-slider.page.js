import { visit, setSliderValue, checkSliderValue} from '../pages/horizontal-slider.page'

describe('Horizontal Slider Page', () => {
    beforeEach(() => {
        visit()
    })

    it('Check slider can be set to a valid range value', () => {
        setSliderValue(2)
        checkSliderValue(2)
    })

    it('Check slider set to a invalid range value returns closest valid value', () => {
        setSliderValue(6)
        checkSliderValue(5)

        setSliderValue(-1)
        checkSliderValue(0)

        setSliderValue(2.2)
        checkSliderValue(2)

        setSliderValue(3.8)
        checkSliderValue(4)
    })
})

