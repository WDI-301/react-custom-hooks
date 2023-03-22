import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import useStringHook from './hooks/StringHook'
// demonstrate re-usability of hooks
// import Other  from "./components/Other";
//
import useCheckValidEmail from "./hooks/CheckValidEmail";


function App() {

  const {stringHook, setStringHook, customWords, reverseString, doubleString} = useStringHook()  

  const checkValidEmail = useCheckValidEmail('my@email.com') 


  return (
    <div className="App App-header">
      <h1>Custom String Hooks</h1>  
      {customWords}
      <h2>{stringHook}</h2>
      <button onClick={reverseString}>Reverse IT!</button>
      <button onClick={doubleString}>Double IT!</button>
      {/* <p><Other stringHook={stringHook}/></p> */}
      <input onChange={(event) => setStringHook(event.target.value)} />
      <h1>-------------------------</h1>
      <p>{checkValidEmail ? 'True' : 'False'}</p>
    
    </div>
  );
}

export default App;
