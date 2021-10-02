import React, {useMemo} from 'react'
import Grid  from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from './../components/WeatherDetails';
import ForecastChart from '../components/ForecastChart'
import Forecast from '../components/Forecast'
import AppFrame from '../components/AppFrame'
import useCityPage from './../hooks/useCityPage';
import useCityList from './../hooks/useCityList';
import { getCityCode } from './../utils/utils'
import { getCountryNameByCountryCode } from './../utils/serviceCities'


const CityPage = ({data, actions}) => {

    const {onSetallWeather, onSetchartdata, onSetforecastItemList} = actions

    const {allWeather, allChartdata, allForecastItemList} = data

    const {city, countryCode} = useCityPage(allChartdata, allForecastItemList, onSetchartdata, onSetforecastItemList)

    const cities = useMemo(() => ([{ city, countryCode }]), [city, countryCode])   

    useCityList(cities, onSetallWeather, allWeather)

    const cityCode = getCityCode(city, countryCode)
    
    const weather = allWeather[cityCode]

    const chartdata = allChartdata[cityCode]

    const forecastItemList = allForecastItemList[cityCode]
    
    

    const country = countryCode && getCountryNameByCountryCode(countryCode)   
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind

    const state = weather && weather.state
    const temperature = weather && weather.temperature
    

    return (
        <AppFrame>
        <Grid container
          justifyContent="space-around"
          direction="column"
          spacing={2}>
              <Grid item container xs= {12} justifyContent="center" alignItems="flex-end">
                 <CityInfo city={city} country={country} />
              </Grid>
              <Grid container item xs= {12} justifyContent="center">                   
                       <Weather state={state} temperature={temperature} />    
                       {
                           humidity && wind && <WeatherDetails humidity={humidity} wind={wind} />  
                       }    
                                                   
              </Grid>
              <Grid item >
                  { !chartdata && !forecastItemList && <LinearProgress/> }
              </Grid>
              <Grid item >
                 { chartdata && <ForecastChart data={chartdata}/> }
              </Grid>
              <Grid item >
                 { forecastItemList && <Forecast forecastItemList = {forecastItemList}/>}
              </Grid>
        </Grid>
        </AppFrame>
    )
}

export default CityPage
