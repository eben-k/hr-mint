import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import { OrderDetails, PaymentDetails, Payments, TransactionValue, TransactionVolume, TotalValue, TotalVolume, SaleChart } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
  }
}));

const DashBoard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TransactionVolume className={classes.paper} />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TransactionValue className={classes.paper} />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalVolume className={classes.paper} />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalValue className={classes.paper} />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <SaleChart className={classes.paper} />          
        </Grid>

        <Grid
          alignItems="flex-end"
          container
          justify="space-evenly"
          spacing={2}
          lg={4}
          md={12}
          xl={3}
          xs={12}
        >
          <Grid
            item
            lg={12}
            md={6}
            xl={12}
            xs={12}
          >
            <OrderDetails className={classes.paper} />
          
          </Grid>
          <Grid
            item
            lg={12}
            md={6}
            xl={12}
            xs={12}
          >
            <PaymentDetails className={classes.paper} /> 
          </Grid>
         </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <Payments className={classes.paper} />
        </Grid>
      </Grid>
    </div>
  )
}

export default DashBoard;
