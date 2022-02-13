import React from 'react'
import './App.css';
import Counter from './components/Counter'
import contractApi from './api/contractsApi';
import memberApi from './api/membersApi';

const tabs = [{
  title:'Entitats',
  functions:{
    keys:['contractes','membres'],
    actions: [contractApi.getEntityContracts,memberApi.getEntityMembers]
  },
},
{
  title:'Entitats Privades',
  functions:{
    keys:['contractes','membres'],
    actions:[contractApi.getPublicContracts,memberApi.getPublicMembers]
  },
}]


function App()  {

  return (
    <Counter tabs={tabs}/>
  )
}

export default App;
