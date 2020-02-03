import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Button } from '@material-ui/core';
import PaymentIcon from '@material-ui/icons/Payment';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import DashboardIcon from '@material-ui/icons/Dashboard';

import { SideBarNav } from './SideBarNav';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white,
    display: 'block',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
    position: 'fixed',
    top: 70,
    left: 0,
    bottom: 0,
    right: 0,
    width: '20%'
  },
  button: {
    backgroundColor: '#27AE60',
    borderRadius: '30px',
    color: '#FFFFFF',

  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const SideBar = props => {
  const { ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Main',
      items: [
        {
          title: 'Overview',
          href: '#',
          icon: <DashboardIcon />
        }
      ]
    },
    {
      title: 'Payments',
      items: [
        {
          title: 'All Payments',
          href: '#',
          icon: <PaymentIcon />
        },
        {
          title: 'Recorded Payments',
          href: '#',
          icon: <PaymentIcon />
        },
        {
          title: 'Un-Recorded Payments',
          href: '#',
          icon: <PaymentIcon />
        },
        {
          title: 'Manual Settlements',
          href: '#',
          icon: <RadioButtonCheckedIcon />
        },
      ]
    },
    {
      title: 'Orders',
      items: [
        {
          title: 'All Orders',
          href: '#',
          icon: <ShoppingCartIcon />
        },
        {
          title: 'Pending Orders',
          href: '#',
          icon: <ShoppingCartIcon />
        },
        {
          title: 'Recorded Orders',
          href: '#',
          icon: <ShoppingCartIcon />
        },
      ]
    },
    {
      title: 'Merchant Profile',
      items: [],
      icon: <PersonIcon />
    }
  ];

  return (
    <div
      {...rest}
      className={classes.root}
    >
      <Button
        className={classes.button}
        href="#"
        variant="contained"
      >
              Generate Invoice
      </Button>
      <Divider className={classes.divider} />
      <SideBarNav
        className={classes.nav}
        pages={pages}
      />
    </div>
  )
}

export default SideBar;
