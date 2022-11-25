import './App.css';
import Counter from './Counter';
import {useState} from "react" ; 


function App() {
  const [delta, setDelta] = useState(1)
  const [Max, setMax] = useState(1)
  
  
  function handleDelta(e){
    setDelta(Number(e.target.value))
  }
  function handleMax(e){
    setMax(Number(e.target.value))
  }

  
  return (
    <div className="App">
        <h1>usestate2</h1>
        <p>Delta</p>
        <input type = "number" value = {delta} onChange ={handleDelta} />
        <p>Max Value</p>
        <input type = "number" value = {Max} onChange ={handleMax} />
        <Counter delta = {delta} Max = {Max} />
        <Counter delta = {delta} Max = {Max} />
    </div>
  );
}

export default App;
