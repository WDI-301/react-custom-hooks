import logo from './logo.svg';
import './App.css';
import useStringHook from './hooks/StringHook'

function App() {

  const {stringHook, setStringHook, customWords} = useStringHook()  
  return (
    <div className="App App-header">
      <h1>Custom String Hooks</h1>  
      {customWords}
      <p>{stringHook}</p>
      <input onChange={(event) => setStringHook(event.target.value)} />
    
    </div>
  );
}

export default App;
