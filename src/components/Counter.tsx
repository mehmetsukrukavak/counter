import {useState} from "react";
import "../index.css";

export default function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

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
          <div>
              <button className="btn" onClick={handleStepDecrease}>-</button>
              <span> Count : {step} </span>
              <button className="btn" onClick={handleStepIncrease}>+</button>
          </div>
          <div>
              <button className="btn" onClick={handleCountDecrease}>-</button>
              <span> Count : {count} </span>
              <button className="btn" onClick={handleCountIncrease}>+</button>
          </div>
          { count === 0 &&  <span>Today is {new Date(new Date().setDate(new Date().getDate() + (count))).toLocaleDateString()} </span> }
          { count > 0 &&  <span>{ count  } Days later  {new Date(new Date().setDate(new Date().getDate() + (count))).toLocaleDateString()} </span> }
          { count < 0 &&  <span>{ count * -1 } Days before  {new Date(new Date().setDate(new Date().getDate() + (count))).toLocaleDateString()} </span> }




      </div>
    );
}