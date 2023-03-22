import React from 'react'
import useStringHook from "../hooks/StringHook";

const Other = (props) => {
    const {stringHook, setStringHook, customWords} = useStringHook()  
    
    return (
    <>
    <p>Other Hook: {stringHook}</p>
    <div>other prop: {props.stringHook}</div>
    </>
  )
}
export default Other

