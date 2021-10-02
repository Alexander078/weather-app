import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList'; //SUT

const cities = [
    { city:"Buenos Aires", country:"Argentina", countryCode: "AR"},
    { city:"Bogota", country:"Colombia", countryCode: "CO"},
    { city:"Madrid", country:"España" , countryCode: "ES"},
    { city:"Ciudad de Mexico", country:"Mexico", countryCode: "MX"},
]

test("CityList renders", async () => {
    // AAA Arrange Act Assert

    const fnClickOnItem = jest.fn()
   
    const { findAllByRole } = render(<CityList cities={cities}  onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    expect(items).toHaveLength(4)

})

test("CityList click on  item", async () => {

    //AAA
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)

})