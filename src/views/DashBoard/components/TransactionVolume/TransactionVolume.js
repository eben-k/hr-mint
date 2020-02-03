import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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

const TransactionVolume = props => {
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
                          Daily Transaction Volume
            </Typography>
            <Typography variant="h3">2,342</Typography>
          </Grid>
          <Grid item>
            <LinearProgress className={classes.icon} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TransactionVolume;