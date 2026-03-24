// ------- Problem Without useCallback -------
// Issue:
// 1. Every time count changes → component re - renders
// 2. handleClick is recreated
// 3. Child re-renders unnecessarily

// import React, { useState } from "react";

// const Child = ({ handleClick }) => {
//     console.log("Child re-rendered");
//     return <button onClick={handleClick}>Click Me</button>;
// };

// export default function UseCallbackDemo() {
//     const [count, setCount] = useState(0);

//     const handleClick = () => {
//         console.log("Clicked");
//     };

//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <Child handleClick={handleClick} />
//         </div>
//     );
// }

// ------- Using useCallback -------
// Solution:
// 1. handleClick is not recreated
// 2. Child does NOT re - render unnecessarily
// 3. Performance improves
import React, { useState, useCallback } from "react";

const Child = React.memo(({ handleClick }) => {
    console.log("Child re-rendered");
    return <button onClick={handleClick}>Click Me</button>;
});

export default function UseCallbackDemo() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []); // No dependency -> same function reference

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Child handleClick={handleClick} />
        </div>
    );
}