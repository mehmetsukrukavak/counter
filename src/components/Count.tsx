import "../index.css";
export default function Count({count,handleCountIncrease, handleCountDecrease, handleInput }
                              : {count: number, handleCountIncrease: Function, handleCountDecrease: Function, handleInput: Function}) {
    return (
        <div>
            <button className="btn" onClick={() => handleCountDecrease()}>-</button>
            {/*<span> Count : {count} </span>*/}
            <input value={count} onChange={(e) => handleInput(e.target.value)} />
            <button className="btn" onClick={() => handleCountIncrease()}>+</button>
        </div>
    )
}