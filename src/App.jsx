import React, {useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {

   const initialValue = {
      allWeather: {},
      allChartdata: {},
      allForecastItemList: {}
   }

   const reducer = (state, action) => {
             switch (action.type) {
               case 'SET_ALL_WEATHER':
                  const weatherCity = action.payload
                  const newAllWeather = {...state.allWeather, ...weatherCity}
                  return {...state, allWeather: newAllWeather}

               case 'SET_CHART_DATA':
                  const chartDataCity = action.payload
                  const newAllChartData = {...state.allChartdata, ...chartDataCity}
                  return {...state, allChartdata : newAllChartData}

               case 'SET_FORECAST_ITEM_LIST':     
                  const forecastItemListCity = action.payload
                  const newAllForecastItemListCity = {...state.allForecastItemList, ...forecastItemListCity}
                  return {...state, allForecastItemList : newAllForecastItemListCity}        
                  
               default:
                  return state
                  
             }
   }

   const [state, dispatch] = useReducer(reducer, initialValue)
   /* const [allWeather, setallWeather] = useState({})
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
   */ 
   return (
                   
            <Router>
              
               <Switch>
                   <Route exact path="/">
                      <WelcomePage/>
                   </Route>                   
                   <Route path="/main">
                      <MainPage data={state} actions={dispatch}/>
                   </Route>
                   <Route path="/city/:countryCode/:city">
                      <CityPage data={state} actions={dispatch}/>
                   </Route>
                   <Route>
                       <NotFoundPage/>               
                    </Route>                 
               </Switch>
               
            </Router>
          
    )
}

export default App
