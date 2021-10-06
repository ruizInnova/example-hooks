import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const {state:counter, increment, decrement, reset} = useCounter(200);

    return (
        <>
            <h1>Counter With Hook: { counter } </h1>
            <hr />
            <button onClick={ () => increment(7) } className="btn"> + 1</button>
            <button onClick={ () => decrement(7) } className="btn"> - 1</button>
            <button onClick={ reset } className="btn"> Reset </button>
        </>
    )
}
