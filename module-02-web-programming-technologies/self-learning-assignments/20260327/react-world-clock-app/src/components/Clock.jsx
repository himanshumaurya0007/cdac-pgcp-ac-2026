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
    const [isAM, setIsAM] = useState(true);

    useEffect(() => {
        const updateTime = () => {
            const now = moment().tz(timezone);
            setTime(now.format("HH:mm:ss"));
            setIsAM(now.format("A") === "AM");
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, [timezone]);

    return (
        <div className={`clock-card ${isAM ? "am" : "pm"}`}>
            <button className="close-btn" onClick={() => onRemove(id)}>
                ✖
            </button>

            <h2>{country}</h2>

            {/* Conditional render */}
            <p className={time ? "time-text show" : "time-text loading"}>
                {time || "00:00:00"}
            </p>
        </div>
    );
};

export default Clock;