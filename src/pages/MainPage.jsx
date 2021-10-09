import React, {useCallback} from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList';
import AppFrame from '../components/AppFrame';
import Paper from '@material-ui/core/Paper'
import { getCities } from './../utils/serviceCities';

const MainPage = () => {
    const history = useHistory()
    const onClickHandler = useCallback((city, countryCode) => {         
         
         history.push(`/city/${countryCode}/${city}`)

    }, [history])
    return (
        <AppFrame>
            <Paper elevation={3}>
               <CityList cities={getCities()} onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
