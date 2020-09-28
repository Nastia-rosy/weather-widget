import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  weatherWidgetBody: {
    backgroundColor: 'rgba(30, 139, 195, 0.4)',
    color: '#fff',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
    padding: theme.spacing(2),
    margin: '20px auto 10px',
    width: 120,
  },
  media: {
    display: 'block',
    width: 80,
    height: 80,
    margin: '0 auto'
  },
  weatherDescription: {
    borderBottom: '1px solid #fff',
    marginBottom: 10,
    paddingBottom: 10,
  }
}));

const Card = ({ icon, t, description, dayOfWeek }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.weatherWidgetBody}>
      <Typography variant='body1' align="center">{dayOfWeek}</Typography>
      <CardMedia
        className={classes.media}
        image={icon}
        title="weather"
      />
      <Typography variant='body2' align="center" className={classes.weatherDescription}>
        {description}
      </Typography>
      <Typography variant='body2' align="center">
        min &nbsp;
            {t.min > 0 ? '+' : '-'}
        {Math.round(t.min)}&#176;
          </Typography>
      <Typography variant='body2' align="center">
        max &nbsp;
            {t.max > 0 ? '+' : '-'}
        {Math.round(t.max)}&#176;C
          </Typography>

    </Paper>
  )
}

export default Card;