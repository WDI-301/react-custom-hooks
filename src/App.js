import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import useStringHook from './hooks/StringHook'
// demonstrate re-usability of hooks
// import Other  from "./components/Other";
//


function App() {

  const {stringHook, setStringHook, customWords} = useStringHook()  
  return (
    <div className="App App-header">
      <h1>Custom String Hooks</h1>  
      {customWords}
      <p>{stringHook}</p>
      {/* <p><Other stringHook={stringHook}/></p> */}
      <input onChange={(event) => setStringHook(event.target.value)} />
    
    </div>
  );
}

export default App;
