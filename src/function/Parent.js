import React from 'react'
import Child from './Child'
import { useState } from 'react'

function Parent() {
    const [data, setData]=useState('')

    const surname = (e)=>{
            setData(e)
    }
    return (
    <div>
        <h1>initial Name:{data.surname}</h1>
        <Child   childdata={surname} />
    </div>
  )
}

export default Parent