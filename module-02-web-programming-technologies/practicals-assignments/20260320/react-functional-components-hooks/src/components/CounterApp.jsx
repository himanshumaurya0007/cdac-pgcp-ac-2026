import { useEffect, useState } from "react";

export default function CounterApp() {
    const [count, setCount] = useState(0);

    function incrementCount() {
        // Implicit return
        setCount((previousCount) => previousCount + 1);
    }

    function decrementCount() {
        setCount((previousCount) => {
            // Explicit return
            return previousCount - 1;
        });
    }

    // 1. Mount + Unmount Lifecycle
    useEffect(() => {
        alert("Component Mounted");
        console.log("Component Mounted");

        return () => {
            alert("Component Unmounted");
            console.log("Component Unmounted");
        };
    }, []);

    // 2. Update lifecycle (runs when count changes)
    useEffect(() => {
        console.log(`Count updated: ${count}`);
    }, [count]);

    return (
        <>
            <h1>Counter Application (using Functional Component)</h1>

            <button onClick={decrementCount}>Decrement</button>

            <h2 style={{ display: "inline", margin: "0 18px" }}>
                <b>Counter: </b> {count}
            </h2>

            <button onClick={incrementCount}>Increment</button>
            <br />
            <br />

            <button onClick={() => { setCount(0) }}>Reset Counter</button>
        </>
    )
}