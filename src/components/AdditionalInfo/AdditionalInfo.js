import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  dayOfWeek: {
    borderBottom: '2px solid #fff',
    marginBottom: 10
  }
}));

const AdditionalInfo = ({ currentDayInfo }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Hidden smUp>
        <Grid xs={12}>
          <Typography variant='h4' className={classes.dayOfWeek}>
            {currentDayInfo.dayOfWeek}
          </Typography>
        </Grid>
          
        </Hidden>
      <Grid item xs={8} sm={6} md={3}>
        <Typography variant='body1'>
          Tempurature, &#176; C:
        </Typography>
        <Typography variant='body1'>
          Feels like:
        </Typography>
        <Typography variant='body1'>
          Pressure, mm Hg:
        </Typography>
        <Typography variant='body1'>
          Humidity, %:
        </Typography>
        <Typography variant='body1'>
          Wind speed, m/s:
        </Typography>
        <Typography variant='body1'>
          Description:
        </Typography>
      </Grid>
      
      <Grid item xs={4} sm={3} md={6}>
        <Typography variant='body1'>
          {currentDayInfo.t} &#176; C
        </Typography>
        <Typography variant='body1'>
          {currentDayInfo.feelsLike} &#176; C
        </Typography>
        <Typography variant='body1'>
          {currentDayInfo.preasure}
        </Typography>
        <Typography variant='body1'>
          {currentDayInfo.humidity}%
        </Typography>
        <Typography variant='body1'>
          {currentDayInfo.windSpeed}
        </Typography>
        <Typography variant='body1'>
          {currentDayInfo.description}
        </Typography>
      </Grid>
      <Hidden xsDown>
      <Grid item xs={12} sm={3} md={3}>
        <Typography variant='h4'>
          {currentDayInfo.dayOfWeek}
        </Typography>
      </Grid>
        </Hidden>
    </Grid>
  )
}

export default AdditionalInfo;