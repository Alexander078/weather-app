const appid="64cdb1d2a0184dd8a9dd152b1a1c020c"   
export const getWeatherUrl = ({city, countryCode}) => (
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
)

export const getForecastUrl = ({city, countryCode}) => (
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`
)