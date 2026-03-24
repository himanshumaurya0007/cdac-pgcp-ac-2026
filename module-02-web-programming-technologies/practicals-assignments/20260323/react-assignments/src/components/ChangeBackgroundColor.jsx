import { useState } from "react"

export default function ChangeBackgroundColor() {
    const [backgroundColor, setBackgroundColor] = useState("cyan");

    const handleBgColorChange = (color) => {
        setBackgroundColor(color);
    };

    return (
        <>
            <div
                style={{
                    height: "100vh",
                    backgroundColor: backgroundColor,
                }}
            >
                <h1>Background Color Changer</h1>

                <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                    <button
                        style={{ padding: "7px 13px", fontSize: 13 }}
                        onClick={() => handleBgColorChange("red")}>
                        Red
                    </button>

                    <button
                        style={{ padding: "7px 13px", fontSize: 13 }}
                        onClick={() => handleBgColorChange("yellow")}>
                        Yellow
                    </button>

                    <button
                        style={{ padding: "7px 13px", fontSize: 13 }}
                        onClick={() => handleBgColorChange("green")}>
                        Green
                    </button>

                    <button
                        style={{ padding: "7px 13px", fontSize: 13 }}
                        onClick={() => handleBgColorChange("blue")}>
                        Blue
                    </button>

                    <button
                        style={{ padding: "7px 13px", fontSize: 13 }}
                        onClick={() => handleBgColorChange("orange")}>
                        Orange
                    </button>
                </div>
            </div>
        </>
    )
}