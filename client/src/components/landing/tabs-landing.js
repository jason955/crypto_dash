import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AccountGraphs from '../landing/accounts-graph'
import TrackerGraphs from '../landing/trackers-graph'
import CryptoKingdom from '../landing/crypto-kingdom'
import logout from '../images/logout.png'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

/*************************
* Tabs for separate displays yo
* TODO: add axios calls to here
*************************/
 export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div >
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Accounts" {...a11yProps(0)} />
          <Tab label="Trackers" {...a11yProps(1)} />
          <Tab label="Crypto" {...a11yProps(2)} />
          <div>
             <img className="logout" src={logout} alt="LOGOUT"  />
          </div>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AccountGraphs />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TrackerGraphs />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CryptoKingdom />
      </TabPanel>
    </div>
  );
}
