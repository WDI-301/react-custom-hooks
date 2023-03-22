import React, {useState, useEffect} from 'react'

const useCheckValidEmail = (props) => {
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
      (props.includes('@')) ? setIsValid(true): setIsValid(false)
  
    }, [])
    
  return isValid
}

export default useCheckValidEmail