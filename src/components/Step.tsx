import "../index.css";
export default function Step({step,handleStepIncrease, handleStepDecrease }: {step: number, handleStepIncrease: Function, handleStepDecrease: Function}) {
    return (
        <div>
            <button className="btn" onClick={() => handleStepDecrease()}>-</button>
            <span> Step : {step} </span>
            <button className="btn" onClick={() => handleStepIncrease()}>+</button>
        </div>
    )
}