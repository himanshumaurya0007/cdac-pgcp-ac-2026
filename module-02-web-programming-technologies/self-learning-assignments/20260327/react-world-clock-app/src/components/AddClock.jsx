import { useState } from "react";

/**
 * AddClock Component
 * Props:
 *  - onAdd(clockObj)
 */
const AddClock = ({ onAdd }) => {
    const [selectedZone, setSelectedZone] = useState("");

    const timezones = [
        { label: "India", value: "Asia/Kolkata" },
        { label: "USA (New York)", value: "America/New_York" },
        { label: "Japan", value: "Asia/Tokyo" },
        { label: "UK (London)", value: "Europe/London" },
        { label: "Australia (Sydney)", value: "Australia/Sydney" },
    ];

    const handleAdd = () => {
        if (!selectedZone) return;

        const selected = timezones.find(
            (tz) => tz.value === selectedZone
        );

        onAdd({
            country: selected.label,
            timezone: selected.value,
        });

        setSelectedZone(""); // reset dropdown
    };

    return (
        <div className="add-clock">
            <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
            >
                <option value="">Select Timezone</option>
                {timezones.map((tz) => (
                    <option key={tz.value} value={tz.value}>
                        {tz.label}
                    </option>
                ))}
            </select>

            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AddClock;