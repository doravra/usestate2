import {useState , useEffect } from "react" ; 
import './Counter.css';

function Counter(props) {
    const {delta , Max , getReset , needToReset} = props
    const [count, setCount] = useState(1)

  useEffect( ( ) => {
      if(needToReset){
        setCount(0)
        getReset(false)
      }
   } ,[needToReset , getReset] ) //the getReset donr necessary his for remove the Wornning in the terminal
    
    function incr() {
        setCount(
            function(oldCount){
              if ( oldCount + delta >= Max ) {
                return 0 }
              return oldCount + delta
            }
        )
        //console.log(count) // for chaking !
    }

    function Reset() {
        getReset(true)
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