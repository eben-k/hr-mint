import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import { OrderDetails, PaymentDetails, Payments, TransactionValue, TransactionVolume, TotalValue, TotalVolume, SaleChart } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const DashBoard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        // direction="row"
        // justify="space-between"
        // alignItems="center"
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TransactionVolume />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TransactionValue />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalVolume />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalValue />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <SaleChart />          
        </Grid>
        <Grid
          alignItems="flex-end"
          container
          direction="column"
          justify="space-evenly"
          spacing={2}
        >
          <Grid
            item
            lg={2}
            md={3}
            xl={3}
            xs={6}
          >
            <OrderDetails />

          
          </Grid>
          <Grid
            item
            lg={2}
            md={3}
            xl={3}
            xs={6}
          >
            <PaymentDetails /> 
          </Grid>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <Payments />
        </Grid>
      </Grid>
    </div>
  )
}

export default DashBoard;