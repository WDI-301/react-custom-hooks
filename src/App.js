import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import useStringHook from './hooks/StringHook'
// demonstrate re-usability of hooks
// import Other  from "./components/Other";
//
import useCheckValidEmail from "./hooks/CheckValidEmail";
import useInput from "./hooks/useInput"


function App() {

  const {stringHook, setStringHook, customWords, reverseString, doubleString} = useStringHook()  

  
  const firstName = useInput('firstname')
  const lastName = useInput('Please enter your Last Name')
  const email = useInput('Please enter your email')
  
  const checkValidEmail = useCheckValidEmail(email.value) 



  return (
    <div className="App App-header">
      <h1>Custom String Hooks</h1>  
      {customWords}
      <h2>{stringHook}</h2>
      <button onClick={reverseString}>Reverse IT!</button>
      <button onClick={doubleString}>Double IT!</button>
      {/* <p><Other stringHook={stringHook}/></p> */}
      <input onChange={(event) => 
        setStringHook(event.target.value)} />
     
      <h3>-------------------------</h3>
      <p>{checkValidEmail ? 'True' : 'False'}</p>
      <h3>-------------------------</h3>

      <h3>First Name: {firstName.value}</h3>
      <input  {...firstName}/>
      <h3>Last Name: {lastName.value}</h3>
      <input  {...lastName}/>
      <h3>email: {email.value}</h3>
      <input  {...email}/>
      <h3>Email is: {checkValidEmail ? 'Good' : 'Bad'}</h3>
    </div>
  );
}

export default App;
