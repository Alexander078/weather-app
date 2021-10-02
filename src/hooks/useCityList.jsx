import  {useState, useEffect} from 'react'
import axios from 'axios'
import { getWeatherUrl } from './../utils/urls.jsx'
import getAllWeather from './../utils/transform/getAllWeather';
import { getCityCode } from './../utils/utils'

const useCityList = (cities, onSetallWeather, allWeather) => {
   // const [allWeather, setallWeather] = useState({})
    const [error, setError]  = useState(null)

    useEffect(() => {
              
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl({city, countryCode}) 

            
            try {

                onSetallWeather({ [getCityCode(city, countryCode)] : {} })

                const response = await axios.get(url)

                const allWeatherAux = getAllWeather(response, city, countryCode)

                //setallWeather(allWeather => ({ ...allWeather, ...allWeatherAux }))  
                onSetallWeather(allWeatherAux)
                
            } catch (error) {
                if(error.response){  // errores que nos responde el server
                    const { data, status} = error.response
                    console.log("data: ", data)
                    console.log("status: ", status)
                    setError("Ha ocurrido un error en el servidor del clima")
                } else if (error.request) { // errores que nos suceden por no llegar al server
                   console.log("Server in-accesible o no tengo internet")
                   setError("Verifique la conexión a internet")
                } else {  // errores imprevistos
                    console.log("Errores imprevistos")
                    setError("Error al cargar los datos")
                 }
            }           
        
            /*.then(response => {

            })
            .catch(error => { 

            })     */ 
        }

        cities.forEach(({city, countryCode}) => {
             if(!allWeather[getCityCode(city, countryCode)]) {
                setWeather(city, countryCode)
             }
           
        });
        
    }, [cities, onSetallWeather, allWeather])

    return { error, setError}
}

export default useCityList