import { useEffect, useDebugValue } from 'react'
import axios from 'axios'
import 'moment/locale/es'
import { useParams } from 'react-router-dom'
import { getForecastUrl } from './../utils/urls'
import getChartData from './../utils/transform/getChartData'
import getForecastItemList from './../utils/transform/getForecastItemList';
import { getCityCode } from './../utils/utils';

const useCityPage = (allChartdata, allForecastItemList, onSetchartdata, onSetforecastItemList) => {
   
    const {city, countryCode} = useParams()

    useDebugValue(`useCityPage ${city}`)
    useEffect(() => {

        const getForecast = async () => {

            const url = getForecastUrl({city, countryCode})   
            const cityCode = getCityCode(city, countryCode)           
                
                try {

                    const response = await axios.get(url)
                    const {data} = response
                    console.log('data: ', data)

                    const dataAux = getChartData(data)                   

                    onSetchartdata({ [cityCode] : dataAux})

                    const forecastItemListAux =  getForecastItemList(data)
                    
                    onSetforecastItemList({ [cityCode] :forecastItemListAux})
                    
                } catch (error) {
                    console.log(error)
                }       

        }
        const cityCode = getCityCode(city, countryCode) 
        if(allChartdata && allForecastItemList && !allChartdata[cityCode] && !allForecastItemList[cityCode])
        {
        getForecast()
        }

    }, [city, countryCode, onSetchartdata, onSetforecastItemList, allChartdata, allForecastItemList])

    return {city, countryCode}
}

export default useCityPage