import {useState} from "react" ; 
import './Counter.css';

function Counter(props) {
    const {delta} = props
    const [count, setCount] = useState(1)
    const {Max} = props

    function incr() {
        setCount(
            function(oldCount){
              if ( oldCount >= Max ) {
                return 0 }
              return oldCount + delta
            }
        )
        //console.log(count) // for chaking !
    }

    function Reset() {
        setCount(0) 
          }


    return (
      <div>
        <h1>Counter</h1>
        <p>Counter us at {count} </p>
        <button onClick={incr}>Click to {delta} add Counter</button>
        <button onClick={Reset} >Click Reset</button>

      </div>
    );
  }

export default Counter ;