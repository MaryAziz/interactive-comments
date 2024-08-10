import { useState } from 'react'
import '../Counter/Counter.css'
import minus from '../../src/assets/icon-minus.svg'
import plus from '../../src/assets/icon-plus.svg'
function Counter (){
    const[Counter,setCounter]=useState(0)
    function Increment (){
        setCounter(Counter+1);
    }
        function Decrement (){
            setCounter(Counter-1);
    }
    return(
        <div className='counter'>
                <button onClick={Increment} className='plus' >
                    <img src={plus} alt="" />
                </button>
                <label className='number'>{Counter} </label>
                <button onClick={Decrement} className='minus'>
                <img src={minus} alt="" />
                </button>
            </div>
    )
}

export default Counter