import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Button, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    letterSpacing: 0,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    display: 'flex',
    width: 24,
    height: 24,
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    ontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

const SideBarNav = props => {
  const { pages, ...rest } = props;

  const classes = useStyles();

  return (
    <List
      {...rest}
      className={classes.root}
    >
      {pages.map(page => 
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
        >
          <Button
            activeclass={classes.active}
            className={classes.button}
            to={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
          {page.items.map(pageItem => (
            <ListItem
              className={classes.item}
              disableGutters
              key={pageItem.title}
            >
              <Button
                activeclassname={classes.active}
                className={classes.button}
                to={pageItem.href}
              >
                <div className={classes.icon}>{pageItem.icon}</div>
                {pageItem.title}
              </Button>

            </ListItem>
          ))}
        </ListItem>
      )}
    </List>
  )
}

SideBarNav.propTypes = {
  pages: PropTypes.array.isRequired
}

export default SideBarNav;
