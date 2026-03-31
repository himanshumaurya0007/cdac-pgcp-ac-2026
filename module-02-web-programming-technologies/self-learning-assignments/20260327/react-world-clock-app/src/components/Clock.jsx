import { useState, useEffect } from "react";
import moment from "moment-timezone";

/**
 * Clock Component
 * Props:
 *  - id
 *  - timezone
 *  - country
 *  - onRemove (function)
 */
const Clock = ({ id, timezone, country, onRemove }) => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = moment().tz(timezone).format("HH:mm:ss");
            setTime(currentTime);
        }, 1000);

        // Cleanup (important)
        return () => clearInterval(interval);
    }, [timezone]);

    // Determine AM / PM
    const isAM = moment().tz(timezone).format("A") === "AM";

    return (
        <div className={`clock-card ${isAM ? "am" : "pm"}`}>
            <button className="close-btn" onClick={() => onRemove(id)}>
                ✖
            </button>

            <h2>{country}</h2>
            <p>{time}</p>
        </div>
    );
};

export default Clock;