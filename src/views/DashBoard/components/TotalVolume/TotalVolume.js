import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  icon: {
    border: '1px solid #0294FF',
    background: 'linear-gradient(180deg, rgba(2, 148, 255, 0.126274) 33.13%, rgba(255, 255, 255, 0.0001) 117.06%)'
  },
}));

const TotalVolume = props => {
  const { ...rest } = props;

  const classes = useStyles();
    
  return (
    <Card
      {...rest}
      className={classes.root}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
                          Total Transaction Volume
            </Typography>
            <Typography variant="h3">452,000</Typography>
          </Grid>
          <Grid item>
            <svg
              className={classes.icon}
              fill="none"
              height="21"
              viewBox="0 0 64 21"
              width="64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1"
                stroke="#0294FF"
              />
            </svg>

          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TotalVolume;