import React, {useState} from 'react'

const useStringHook = () => {
  const [ stringHookState, setStringHookState ] = useState('Silly String');
  const hello = 'Hello from the Custom Hook'
  
  const checkIsEmail = () => {
    
  }
  return {
    stringHook: stringHookState,
    setStringHook: setStringHookState,
    customWords: hello
  }
}

export default useStringHook