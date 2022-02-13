import React, {useState, useEffect} from 'react'
import CounterTabData from './CounterTabData'

export default function CounterTab({dataRecover}) {

  const [data, setData] = useState("")

  useEffect(() => {
      let isSubscribed = true
      let allPromises = dataRecover.actions.map(action => action())
      Promise.all(allPromises)
      .then(res => {
        let newData = res.map(element => element.data.values)
        isSubscribed && setData(newData.join('/'))
      }) 
      .catch(() => {
        setData('Algunes dades no s\'han pogut obtenir')
      })
    
      return () => isSubscribed = false
  })
 

  return (
    <CounterTabData data={{title:dataRecover.keys.join('/'),values:data}}/>
  )
}
