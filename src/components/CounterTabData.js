import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function CounterTabData({data}) {

  return (
    <List>
      <ListItem>
        <ListItemText id='data_item' primary={data.values} secondary={data.title} />
      </ListItem>
    </List>
  );
}