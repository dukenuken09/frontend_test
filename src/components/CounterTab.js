import React, {useState, useEffect} from 'react'
import CounterTabData from './CounterTabData'

export default function CounterTab({dataRecover}) {

  const [data, setData] = useState("")

  useEffect(() => {
      let promises = Promise.all(dataRecover.actions)
      promises.then(res => {
        let newData = res.map(element => element.data.values)
        setData(newData.join('/'))
      }) 
      promises.catch(()=> setData('Algunes dades no s\'han pogut obtenir'))
  })

  return (
    <CounterTabData data={{title:dataRecover.keys.join('/'),values:data}}/>
  )
}
