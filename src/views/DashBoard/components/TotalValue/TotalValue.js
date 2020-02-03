import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography, LinearProgress } from '@material-ui/core';

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
    height: 32,
    width: 32
  },
}));

const TotalValue = props => {
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
            <Typography variant="h3">&#8358; 4,000,000</Typography>
          </Grid>
          <Grid item>
            <LinearProgress className={classes.icon} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TotalValue;