import React, { useState } from 'react'

const useToggle = (initialValue=false) =>{
    const [value, setToggle] = useState(initialValue)

    const toggle =()=>{
        setToggle((prev) =>!prev)
    }
    return [value, toggle]
}

function ToggleButton() {
   const [isOn, toggle] = useToggle(false)
  return (
    <div>
    <button onClick={toggle}>
    {isOn ? "ON" : "OFF"}
    </button>
  
    </div>
  )
}

export default ToggleButton