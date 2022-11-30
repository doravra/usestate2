import './App.css';
import Counter from './Counter';
import {useState} from "react" ; 


function App() {
  const [delta, setDelta] = useState(1)
  const [Max, setMax] = useState(10)
  const [reset , setReset] = useState(false)
  
  
  function handleDelta(e){
    setDelta(Number(e.target.value))
  }
  function handleMax(e){
    setMax(Number(e.target.value))
  }

  function getReset(data){
   // console.log(data)
    setReset(data)
  }



  return (
    <div className="App">
        <h1>usestate2</h1>
        <p>Max Value</p>
        <input type = "number" value = {Max} onChange ={handleMax} />
        <p>Delta</p>
        <input type = "number" value = {delta} onChange ={handleDelta} />
        <Counter delta = {delta} Max = {Max} getReset = {getReset} needToReset = {reset} />
        <Counter delta = {delta} Max = {Max} getReset = {getReset} needToReset = {reset} />
    </div>
  );
}

export default App;
