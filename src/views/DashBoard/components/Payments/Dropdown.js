import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'inline-block',
    marginTop: theme.spacing(1),
    textTransform: 'Capitalize'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Dropdown = () => {
  const classes = useStyles();
  const [status, setStatus] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setStatus(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button
        className={classes.button}
        onClick={handleOpen}
      >
        Show
      </Button>
      <FormControl className={classes.formControl}>
        <Select
          id="demo-controlled-open-select"
          labelId="demo-controlled-open-select-label"
          onChange={handleChange}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          value={status}
        >
          <MenuItem value="all">
            All
          </MenuItem>
          <MenuItem value="reconciled">Reconciled</MenuItem>
          <MenuItem value="unreconciled">Un-reconciled</MenuItem>
          <MenuItem value="settled">Settled</MenuItem>
          <MenuItem value="unsettled">Unsettled</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Dropdown
