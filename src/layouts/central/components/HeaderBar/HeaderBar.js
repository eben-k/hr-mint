import React, {  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Avatar,
  Typography,
  Input,
  Badge
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: '0px 4px 10px rgba(79, 79, 79, 0.07);',
    backgroundColor: '#ffffff'
  },
  flexGrow: {
    display: 'flex',
    width: '100%',
    padding: '8px 0',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#647787'
  },
  avatar: {
    marginLeft: theme.spacing(1)
  },

  searchIconContainer: {
    flex: '1 1 70%',
    position: 'relative'
  },

  searchIcon: {
    marginLeft: '28%',
    marginRight: '2%',
    color: '#0E1D25'
  },

  equalWidth: {
    flex: '1 1 auto'
  },

  userInfo: {
    display: 'flex',
    textAlign: 'right'
  },
  titleBar: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '24px',
    lineHeight: '28px',
    color: '#1875F0'
  }
}));

const HeaderBar = props => {
  const { ...rest } = props;

  const classes = useStyles(props);

  return (
    <AppBar
      {...rest}
      className={classes.root}
    >
      <Toolbar>
        <h2 className={classes.titleBar}>TransMonitor</h2>
        <Hidden mdDown>
          <div className={classes.flexGrow}>
            <div className={classes.searchIconContainer}>
              <SearchIcon className={classes.searchIcon} />
              <Input
                disableUnderline
                placeholder="Search"
              />
            </div>
            <h3 className={classes.equalWidth}>Support</h3>
            <h3 className={classes.equalWidth}>FAQ</h3>
            <IconButton
              className={classes.equalWidth}
              color="inherit"
            >
              <Badge
                badgeContent={10}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <div className={classes.userInfo}>
              <div>
                <Typography
                  className={classes.equalWidth}
                  variant="body2"
                >
                        Hello,
                </Typography>
                <Typography variant="h4">
                        Okameleke Ojo
                </Typography>
              </div>
              <Avatar
                alt="Person"
                className={classes.avatar}
                src=""
              />
            </div>
         
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar
