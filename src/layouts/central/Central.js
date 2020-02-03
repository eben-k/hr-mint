import React, {} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { HeaderBar, SideBar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      paddingTop: 64
    },
  },
  shiftContent: {
    paddingLeft: 6
  },
  content: {
    height: '100%',
    marginLeft: '25%'
  },
  
  mid: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 100
  }
}));

const Central = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: true
      })}
    >
      <HeaderBar />
      <div
        className={clsx({
          [classes.mid]: true
        })}
      >
        <SideBar />
        <main className={classes.content}>{children}</main>
      </div>
    </div>
  )
}

Central.propTypes = {
  children: PropTypes.node
}

export default Central;
