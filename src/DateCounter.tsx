import { ChangeEvent, useReducer, useState } from "react";

interface IncrementDecrementAction {
    type: "inc" | "dec";
}

interface SetCountAction {
    type: "setCount";
    payload: number;
}

// Union type for actions
type Action = IncrementDecrementAction | SetCountAction;

function reducer(state: number, action: Action) {
    console.log(state, action);
    if (action.type === "inc") return state + 1;
    if (action.type === "dec") return state - 1;
    if (action.type === "setCount") return action.payload;

    return state;
}

function DateCounter() {
    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, 0);
    const [step, setStep] = useState(1);

    // This mutates the date object.
    const date = new Date();
    date.setDate(date.getDate() + count);

    const dec = function () {
        dispatch({ type: "dec" });

        // setCount((count) => count - 1);
        // setCount((count) => count - step);
    };

    const inc = function () {
        dispatch({ type: "inc" });

        // setCount((count) => count + 1);
        // setCount((count) => count + step);
    };

    const defineCount = function (e: ChangeEvent<HTMLInputElement>) {
        // setCount(Number(e.target.value));
        dispatch({ type: "setCount", payload: Number(e.target.value) });
    };

    const defineStep = function (e: ChangeEvent<HTMLInputElement>) {
        setStep(Number(e.target.value));
    };

    const reset = function () {
        // setCount(0);
        setStep(1);
    };

    return (
        <div className="counter">
            <div>
                <input type="range" min="0" max="10" value={step} onChange={defineStep} />
                <span>{step}</span>
            </div>

            <div>
                <button onClick={dec}>-</button>
                <input value={count} onChange={defineCount} />
                <button onClick={inc}>+</button>
            </div>

            <p>{date.toDateString()}</p>

            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}
export default DateCounter;
