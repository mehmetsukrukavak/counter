import "../index.css";
export default function Count({count,handleCountIncrease, handleCountDecrease }: {count: number, handleCountIncrease: Function, handleCountDecrease: Function}) {
    return (
        <div>
            <button className="btn" onClick={() => handleCountDecrease()}>-</button>
            <span> Count : {count} </span>
            <button className="btn" onClick={() => handleCountIncrease()}>+</button>
        </div>
    )
}