import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../Card/Card';
import ItemsCarousel from 'react-items-carousel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  carousel: {
    width: '100%',
    margin: '0 auto'
  },
  buttonArrows: {
    color: '#fff',
    backgroundColor: 'rgba(30, 139, 195, 0.8)',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
  }
}));

const CardCarousel = ({ daily, dayOfWeek }) => {
  const classes = useStyles();
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const [amountOfCard, setAmountOfCard] = React.useState(0);

  const xsMin = useMediaQuery('(max-width:360px)');
  const xs = useMediaQuery('(max-width:520px)');
  const smMd = useMediaQuery('(max-width:700px)');
  const sm = useMediaQuery('(max-width:900px)');
  const md = useMediaQuery('(max-width:1030px)');
  const mdMax = useMediaQuery('(max-width:1280px)');
  const lg = useMediaQuery('(max-width:1480px)');

  useEffect(() => {
    console.log(md || mdMax);
    setAmountOfCard(
      xsMin ? 1 :
        xs ? 2 :
          smMd ? 3 :
            sm ? 4 :
              md ? 5 :
                mdMax ? 5 :
                  lg ? 5 : 6
    )
  }, [xs, sm, md, xsMin, smMd, mdMax, lg]);

  return (
    <div className={classes.carousel}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={amountOfCard}
        leftChevron={
          <IconButton aria-label="delete" className={classes.buttonArrows}>
            <ChevronLeftIcon />
          </IconButton>
        }
        rightChevron={
          <IconButton aria-label="delete" className={classes.buttonArrows}>
            <ChevronRightIcon />
          </IconButton>
        }
        outsideChevron={false}
      >
        {daily.map((day, index) => (
          <Card
            icon={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            t={day.temp}
            description={day.weather[0].main}
            key={index}
            dayOfWeek={dayOfWeek()}
          />
        ))}
      </ItemsCarousel>
    </div>
  )
}

export default CardCarousel;