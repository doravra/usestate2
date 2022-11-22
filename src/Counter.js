import {useState} from "react" ; 
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(1)
    const [delta, setDelta] = useState(1)


    function incr() {
        setCount(
            function(oldCount){
                return oldCount + delta
            }
        )
        console.log(count) // for chaking !
    }

    function Reset() {
        setCount(0) 
          }

    function handleDelta(e){
      setDelta(Number(e.target.value))

    }

    return (
      <div>
        <h1>Counter</h1>
        <input type = "number" value = {delta} onChange ={handleDelta} />
        <p>Counter us at {count} </p>
        <button onClick={incr}>Click to {delta} add Counter</button>
        <button onClick={Reset} >Click Reset</button>

      </div>
    );
  }

export default Counter ;