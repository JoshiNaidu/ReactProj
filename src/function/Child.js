import React from 'react'

export default function Child({childdata}) {

    const data = {
        surname: "pulluru",
        name:"sivaji"
    }

    const maindata = ()=>{
           childdata(data)
    }

  return (
    <div>{data.name}
    
    <button onClick={maindata}>click m</button>
    
    </div>
  )
}
