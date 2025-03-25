import {useState} from "react";
import "../index.css";
import Step from "./Step";
import Count from "./Count";
import Result from "./Result";



export default function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const today = new Date();
    today.setDate(today.getDate() + count);

    function handleCountIncrease() {
        setCount(count => count + step);
    }

    function handleCountDecrease() {
        setCount(count => count - step);
    }

    function handleStepIncrease() {
        setStep(step => step + 1);
    }

    function handleStepDecrease() {
        setStep(step => step - 1);
    }

    return (
        <div className="counter">

            <Step
                step={step}
                handleStepIncrease={handleStepIncrease}
                handleStepDecrease={handleStepDecrease}
            />
            <Count
                count={count}
                handleCountIncrease={handleCountIncrease}
                handleCountDecrease={handleCountDecrease}
            />

           <Result count={count} today={today} />
        </div>
    );
}