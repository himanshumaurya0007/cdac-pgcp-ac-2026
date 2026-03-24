// ------- Problem Without prevState -------
// Issue: All updates use the same old value of count
// import React, { useState } from "react";

// export default function PreviousSatateDemo() {
//     const [count, setCount] = useState(0);

//     const handleClick = () => {
//         setCount(count + 1);
//         setCount(count + 1);
//         setCount(count + 1);
//     };

//     return (
//         <div>
//             <h2>{count}</h2>
//             <button onClick={handleClick}>Increment by +3</button>
//         </div>
//     );
// }

// ------- Using prevState -------
// Solution: Each update gets the latest updated value
import React, { useState } from "react";

export default function PreviousSatateDemo() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    };

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleClick}>Increment by +3</button>
        </div>
    );
}