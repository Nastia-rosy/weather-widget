import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CardCarousel from '../CardCarousel/CardCarousel'


const useStyles = makeStyles((theme) => ({
  header: {
    fontFamily: 'Georgia',
  },
  media: {
    width: 150,
    height: 150,
  },
  mediaWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  currentDay: {
    borderBottom: '2px solid #fff'
  },
  weatherWidgetBody: {
    backgroundColor: 'rgba(30, 139, 195, 0.1)',
    color: '#fff',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
    padding: theme.spacing(2),
    margin: '-20px 0 -10px -20px',
    [theme.breakpoints.down('xs')]: {
      margin: '-20px -20px 20px',
    },
  },
  additionalInfo: {
    padding: theme.spacing(2),
    marginTop: -20,

    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  buttonArrows: {
    color: '#fff',
    backgroundColor: 'rgba(30, 139, 195, 0.8)',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
  }
}));

const WeatherWidget = ({ weatherData }) => {
  const classes = useStyles();

  const [currentWeather, setCurrentWeather] = useState({});
  const [currentDay, setCurrentDay] = useState({});
  const [daily, setDaily] = useState([]);

  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date();
  let dayOfWeek = date.getDay();

  const currentDayInfo = {
    t: Math.round(currentDay.temp),
    feelsLike: Math.round(currentDay.feels_like),
    preasure: Math.round(currentDay.pressure / 1.333),
    humidity: currentDay.humidity,
    windSpeed: currentDay.wind_speed,
    description: currentWeather.description,
    dayOfWeek: week[dayOfWeek],
  }

  useEffect(() => {
    if (weatherData.current && weatherData && weatherData.current.weather) {
      setCurrentDay(weatherData.current)
      if (weatherData.current.weather) {
        setCurrentWeather(weatherData.current.weather[0])
        setDaily(weatherData.daily)
      }
    }
  }, [weatherData, currentDay, currentWeather, daily]);

  const getDayOfWeek = () => {
    dayOfWeek = (dayOfWeek + 1)
    if (dayOfWeek > 6) {
      dayOfWeek = 0;
    }

    return week[dayOfWeek]
  }

  const getCurrentDate = () => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.currentDay}>
        <Grid container>
          <Grid item xs={12} sm={3} className={classes.currentWeatherIcon}>
            <Paper className={classes.weatherWidgetBody}>
              <Typography variant='h4' className={classes.header}>
                <LocationOnIcon />
                Kyiv
              </Typography>
              <Typography variant='h5' className={classes.header}>
                {getCurrentDate()}
              </Typography>

              <div className={classes.mediaWrapper}>
                <CardMedia
                  className={classes.media}
                  image={`http://openweathermap.org/img/wn/${currentWeather ? currentWeather.icon : ''}@2x.png`}
                  title="weather"
                />
              </div>

              <Typography variant='body2' align="center" className={classes.weatherDescription}>
                {currentWeather.main}
              </Typography>
            </Paper>

          </Grid>
          <Grid item xs={12} sm={9} className={classes.additionalInfo}>
            <AdditionalInfo
              currentDayInfo={currentDayInfo}
            />
          </Grid>
        </Grid>

      </Grid>
      <CardCarousel daily={daily} dayOfWeek={getDayOfWeek} />
    </Grid>
  )
}

export default WeatherWidget;