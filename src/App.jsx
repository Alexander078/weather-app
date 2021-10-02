import React, {useState, useCallback, useMemo} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
   const [allWeather, setallWeather] = useState({})
   const [allChartdata, setAllChartdata] = useState({})
   const [allForecastItemList, setforecastItemList] = useState({})
   
   const onSetallWeather = useCallback((WeatherCity) => (
     setallWeather(allWeather => {
        return {...allWeather, ...WeatherCity } }
   ))
   ,[setallWeather])

   const onSetchartdata = useCallback((chartDataCity)=>{
      setAllChartdata( chartdata => ({...chartdata, ...chartDataCity}))
   }, [setAllChartdata])

   const onSetforecastItemList = useCallback((forecastItemListCity)=>{
      setforecastItemList(forecastItemList=> ({...forecastItemList, ...forecastItemListCity}))
   }, [setforecastItemList])

   const actions = useMemo(() => (
      {
         onSetallWeather,
         onSetchartdata, 
         onSetforecastItemList
      }), [onSetallWeather, onSetchartdata, onSetforecastItemList]) 

   const data = useMemo(() => (
      {
         allWeather,
         allChartdata,
         allForecastItemList
      }), [allWeather, allChartdata, allForecastItemList]) 
    
   return (
                   
            <Router>
              
               <Switch>
                   <Route exact path="/">
                      <WelcomePage/>
                   </Route>                   
                   <Route path="/main">
                      <MainPage data={data} actions={actions}/>
                   </Route>
                   <Route path="/city/:countryCode/:city">
                      <CityPage data={data} actions={actions}/>
                   </Route>
                   <Route>
                       <NotFoundPage/>               
                    </Route>                 
               </Switch>
               
            </Router>
          
    )
}

export default App
