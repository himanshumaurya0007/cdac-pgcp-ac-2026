import { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [result, setResult] = useState(0);

    function changeResult(v) {
        setResult(v);
    }

    return (
        <>
            <h1>Parent Component</h1>
            <label htmlFor="num1">Enter number 1: </label>
            <input type="number" name="num1" id="num1"
                onBlur={(e) => setN1(e.target.value)} />
            <br />

            <label htmlFor="num2">Enter number 2: </label>
            <input type="number" name="num2" id="num2"
                onBlur={(e) => setN2(e.target.value)} />
            <br />

            <p>Result: {result}</p>

            <ChildComponent resultFunc={changeResult} num1={parseInt(n1)} num2={parseInt(n2)} />
        </>
    )
}