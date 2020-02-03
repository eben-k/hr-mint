import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Typography, LinearProgress, useTheme } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  title: {
    fontWeight: 700
  },
  category: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  margin: {
    margin: theme.spacing(1),
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
}));

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#FDC203', 0.5),
  },
  bar: {
    borderRadius: 50,
    backgroundColor: '#27AE60',
    width: 950
  },
})(LinearProgress);

const OrderDetails = props => {
  const { ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  const orderCategories = [
    {
      title: 'Pending Orders',
      value: '20',
      color: '#FDC203'
    },
    {
      title: 'Recorded Orders',
      value: '80',
      color: '#27AE60'
    },
    {
      title: 'Total Orders',
      value: '100',
      color: theme.palette.primary.main
    }
  ]
    
  return (
    <Card
      {...rest}
      className={classes.root}
    >
      <CardHeader
        title="Orders"
      />
      <CardContent>
        <BorderLinearProgress
          className={classes.margin}
          color="secondary"
          value={20}
          variant="determinate"
        />
        <div className={classes.stats}>
          {orderCategories.map(category => (
            <div 
              className={classes.category}
              key={category.title}
            >
              <Typography variant="body1">{category.title}</Typography>
              <Typography
                style={{ color: category.color }}
                variant="h3"
              >{category.value}</Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default OrderDetails;
