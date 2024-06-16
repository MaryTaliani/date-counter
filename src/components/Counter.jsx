import { useState } from "react";
import '../counter.css';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const date = new Date();
    date.setDate(date.getDate() + count);

    function counterMinus() {
        setCount((c)=> c - step);
    }

    function counterPlus() {
        setCount((c)=>c + step);
    }

    function stepMinus() {
        if(step>1) setStep((c)=>c-1)
    }

    function stepPlus() {
        setStep((c)=>c+1)
    }

    function restCountStep() {
        setCount((c)=>0);
        setStep((s)=>1);
    }

    return(
        <>
            <div className="step-container">
                <button onClick={stepMinus}>-</button><div className="span-container">Step: {step}</div><button onClick={stepPlus}>+</button>
            </div>
            <div className="count-container">
                <button onClick={counterMinus}>-</button><div className="span-container">Count: {count}</div><button onClick={counterPlus}>+</button>
            </div>
            <div className="date">
                <span>{count === 0 ? "Today is " : count === 1 ? "1 day from today is " : count === -1 ? "1 day ago was " : count > 1 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}</span>
                <span>{date.toDateString()}</span>
            </div>
            <div className="reset-btn">
                <button onClick={restCountStep}>Reset</button>
            </div>
        
        </>
    );
}