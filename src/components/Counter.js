import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CounterTab from './CounterTab';

export default function Counter({tabs}) {
  const [value, setValue] = React.useState(tabs[0].title);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList id='tab_list' onChange={handleChange} aria-label="lab API tabs example">
            {tabs.map((tab,index) => <Tab label={tab.title} key={index} value={tab.title}/>)}
          </TabList>
        </Box>
        {tabs.map((tab,index) => {
          return <TabPanel value={tab.title} key={index}>
            <CounterTab dataRecover={tab.functions} />
          </TabPanel>
        })}
      </TabContext>
    </Box>
  );
}



