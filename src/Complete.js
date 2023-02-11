import React from 'react'
import { Data2 } from './utils/data'
import { Text,Spacer } from './comp/components'

const Complete = () => {
  const data = {name:"dilip" , farmId:"GJAM0000353"}
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",height:"100Vh"}}>
        <Text title={`Registration of ${Data2.perinfo.firstName || data.name} completed Successfully`}></Text>
        <Spacer/>
        <Text title={`your farmer ID is ${Data2.farmId || data.farmId}`} >your farmer ID is {data.farmId}</Text>
    </div>

    
  )
}

export default Complete