import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import image from './images/weather-background.jpg';
import { Grid, Paper } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';

const theme = createMuiTheme({});

const useStyles = makeStyles((theme) => ({
  app: {
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `url(${image})`,
    fontFamily: 'Georgia',
  },
  weatherWidgetBody: {
    maxWidth: 1000,
    backgroundColor: 'rgba(44, 62, 80, 0.9)',
    color: '#fff',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
    margin: '50px 10px 0',
    padding: theme.spacing(3),

    [theme.breakpoints.down('xs')]: {
      margin: 10,
    },
    [theme.breakpoints.up('md')]: {
      margin: '50px auto 0',
    },
  },
}));

function App() {
  const classes = useStyles();
  const [data, setDate] = useState({})

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL)
      .then(res => {
        setDate(res.data);
      })
    },
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Paper className={classes.weatherWidgetBody}>
            <WeatherWidget weatherData={data} />
          </Paper>
        </Grid>
      </Grid>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
