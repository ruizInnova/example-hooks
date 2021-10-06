import React, {useState} from 'react';
import './counter.css';
export const CounterApp = () => {

    const [state, setstate] = useState(
        {
            counter1: 10,
            counter2: 20,
            counter3: 12,
            counter4: 120
        }
    );

    const {counter1, counter2} = state;

    return (
        <>
            <h2>Counter1 { counter1 }</h2>
            <h2>Counter2 { counter2 }</h2>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={() => {
                    setstate({
                        ...state,
                        counter1: counter1 + 1,
                        
                    });
                }}
            > 
                +1
            </button>
        </>
    )
}
