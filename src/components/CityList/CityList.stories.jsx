import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'
import {WeatherContext} from './../../WeatherContext'

export default {
    title: "CityList",
    component: CityList
}


const cities = [
    { city:"Buenos Aires", country:"Argentina", countryCode: "AR"},
    { city:"Bogota", country:"Colombia", countryCode: "CO"},
    { city:"Madrid", country:"España" , countryCode: "ES"},
    { city:"Ciudad de Mexico", country:"Mexico", countryCode: "MX"},
]


export const CityListExample = () => <WeatherContext><CityList cities={cities} onClickCity={ action("Click en city") }/></WeatherContext>