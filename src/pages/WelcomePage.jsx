import React from 'react'
import WelcomeScreen from './../components/WelcomeScreen'
import Grid from '@material-ui/core/Grid'
import { IconContext } from 'react-icons'
import {WiDaySunny } from 'react-icons/wi'
import Typography from '@material-ui/core/Typography'
import Link  from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'

const WelcomePage = () => {
    return (
       <WelcomeScreen >
            <Grid container
            direction="column"
            justifyContent="center"
            className="full">
                 <div className="highlight">
                     <Grid item container xs={12}
                     justifyContent="center"
                     alignItems="center">
                         <Grid item>
                            <IconContext.Provider value={{ size: "6em" }}>
                               <WiDaySunny/>
                            </IconContext.Provider>
                         </Grid>
                         <Grid item
                           container
                           direction="column"
                           justifyContent="center"
                           alignItems="center">
                            <Typography variant="h4" color="inherit">
                                Weather App
                            </Typography>
                            <Link color="inherit"
                            aria-label="menu"
                            component={RouterLink}
                            to="/main">
                                Ingresar
                            </Link>

                         </Grid>
                     </Grid>

                 </div>
            </Grid>
       </WelcomeScreen>
    )
}

export default WelcomePage
