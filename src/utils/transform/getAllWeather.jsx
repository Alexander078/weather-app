import { validValues } from './../../components/IconState'
import { getCityCode, toCelsius } from './../utils'

const getAllWeather = (response, city, countryCode) => {
   
                const {data} = response
                const temperature = toCelsius(data.main.temp)
                const humidity = data.main.humidity
                const wind = data.main.speed
                const stateFromServer = data.weather[0].main.toLowerCase()
                const state = validValues.includes(stateFromServer) ? stateFromServer : null // data.weather[0].main.toLowerCase()
                const propName = getCityCode(city, countryCode)
                const propValue = {temperature, state, humidity, wind}
                console.log(propName)
                console.log(propValue)

                return ( { [propName] : propValue }  )     
                
   }

export default getAllWeather