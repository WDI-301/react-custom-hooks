import React, {useState} from 'react'

const useStringHook = () => {
  const [ stringHookState, setStringHookState ] = useState('Silly String');
  
  return {
    stringHook: stringHookState,
    setStringHook: setStringHookState,
    customWords: 'Hello from the Custom Hook'
  }
}

export default useStringHook