import moment from "moment-timezone";

/**
 * Clock Component
 * Props:
 *  - timezone: string (e.g., "America/New_York")
 *  - country: string (Display name)
 */
const Clock = ({ timezone, country }) => {
    const currentTime = moment().tz(timezone).format("HH:mm:ss");

    return (
        <div className="clock-card">
            <h2>{country}</h2>
            <p>{currentTime}</p>
        </div>
    );
};

export default Clock;