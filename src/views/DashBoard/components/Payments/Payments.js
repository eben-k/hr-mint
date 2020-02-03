import React, { useState } from 'react';
import dayjs from 'dayjs';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardHeader, Divider, Input, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, TableSortLabel, IconButton, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@material-ui/icons/Search';

import paymentData from './paymentData';
import Dropdown from './Dropdown';
import StatusPoint from './StatusPoint';

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    fontSize: '36px',
    lineHeight: '48px',
    display: 'flex',
    alignItems: 'flex-end'
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  statusItem: {
    textTransform: 'capitalize',
    width: '120px',
    height: '33px',
    border: '1px solid #CCCFD4',
    boxSizing: 'border-box',
    borderRadius: '30px',
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cardHeader: {
    display: 'flex'
  },
  searchIconContainer: {
    flex: '1 1 20%',
    justify: 'space-between'
  },

  searchIcon: {
    marginTop: '1%',
    marginLeft: '5%',
    color: '#0E1D25'
  },
  itemType: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
}));

const statusColors = {
  reconciled: 'success',
  pending: 'info',
  unreconciled: 'danger'
};

const Payments = props => {
  const { ...rest } = props;

  const classes = useStyles();

  const [payments] = useState(paymentData);

  const getAvatarInitials = (name = '') =>
    name
      .replace(/\s+/, ' ')
      .split(' ')
      .slice(0, 2)
      .map(text => text && text[0].toUpperCase())
      .join('');

  return (
    <div
      {...rest}
      className={classes.root}
    >
      <Typography
        className={classes.title}
        variant="h2"
      >
Payments
      </Typography>
      <Card >
        <div className={classes.cardHeader}>
          <CardHeader
            title={`Showing ${payments.length} out of 500 payments`}
          />
          <div className={classes.searchIconContainer}>
            <SearchIcon className={classes.searchIcon} />
            <Input
              placeholder="Search payments"
            />
          </div>
          <Dropdown />
        </div>
        
      
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Item Type</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Transaction No.</TableCell>
                    <TableCell sortDirection="desc">
                      <Tooltip
                        enterDelay={300}
                        title="Sort"
                      >
                        <TableSortLabel
                          active
                          direction="desc"
                        >Time</TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {payments.map(payment => (
                    <TableRow
                      hover
                      key={payment.id}
                    >
                      <TableCell>
                        <div className={classes.itemType}>
                          <Avatar className={classes.avatar}>
                            {getAvatarInitials(payment.itemType)}
                          </Avatar>
                          {payment.itemType}
                        </div>
                      </TableCell>     
                      <TableCell>&#36;{payment.price}</TableCell>
                      <TableCell>{payment.transactionNo}</TableCell>
                      <TableCell>{dayjs(payment.createdAt).format('HH:mm:ss')}</TableCell>
                      <TableCell size="small">
                        <div className={classes.statusContainer}>
                          <div className={classes.statusItem}>
                            <StatusPoint
                              className={classes.status}
                              color={statusColors[payment.status]}
                              size="sm"
                            />
                            {payment.status}

                          </div>
                        </div>
                     
                      </TableCell>

                      <TableCell size="medium">
                        <ExpandMoreIcon />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <div className={classes.pagination}>
          <Typography variant="caption">Showing 1 to 10 of 500 entries</Typography>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </Card>

    </div>
  )
}

export default Payments;
