import {useState} from "react" ; 
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(1)


    function incr() {
        setCount(
            function(oldCount){
                return oldCount + 1
            }
        )
        console.log(count) // for chaking !
    }
    function Reset() {
      setCount(
          function(){
              return 0
          }
      )
      console.log(count) // for chaking !
  }


    return (
      <div>
        <h1>Counter</h1>
        <p>Counter us at {count} </p>
        <button onClick={incr}>Click to add Counter</button>
        <button onClick={Reset} >Click Reset</button>

      </div>
    );
  }

export default Counter ;