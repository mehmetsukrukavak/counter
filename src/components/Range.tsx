function Range({step, handleRange} : {step: number,handleRange: Function}) {
    return (
        <div>
            <input
                type="range"
                min={0} max={10}
                value={step}
                onChange={(e) => handleRange(Number(e.target.value))}
            />

            <span>Step: {step}</span>
        </div>

    );
}

export default Range;