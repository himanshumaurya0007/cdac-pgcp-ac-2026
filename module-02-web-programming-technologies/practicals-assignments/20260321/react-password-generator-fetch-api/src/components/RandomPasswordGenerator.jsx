import './RandomPasswordGenerator.css'
import { useCallback, useEffect, useState } from "react";

export default function RandomPasswordGenerator() {
    const [length, setLength] = useState(8);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSmall, setIncludeSmall] = useState(false);
    const [includeCapital, setIncludeCapital] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [password, setPassword] = useState("");
    const [copied, setCopied] = useState(false);

    const generatePassword = useCallback(() => {
        let characterSet = "";
        let generatedPassword = "";

        const numbers = "0123456789";
        const smallLetters = "abcdefghijklmnopqrstuvwxyz";
        const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const symbols = "!@#$%^&*()_+[]{};:,.<>?";

        if (includeNumbers) characterSet += numbers;
        if (includeSmall) characterSet += smallLetters;
        if (includeCapital) characterSet += capitalLetters;
        if (includeSymbols) characterSet += symbols;

        // Fallback
        if (characterSet.length === 0) {
            characterSet = numbers;
        }

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterSet.length);
            generatedPassword += characterSet[randomIndex];
        }

        setPassword(generatedPassword);
    }, [length, includeNumbers, includeSmall, includeCapital, includeSymbols]);

    useEffect(() => {
        generatePassword();
    }, [generatePassword]);

    const incrementLength = () => {
        setLength((prev) => (prev < 100 ? prev + 1 : prev));
    };

    const decrementLength = () => {
        setLength((prev) => (prev > 4 ? prev - 1 : prev));
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <>
            <div className="container">
                <div className="glass-card">
                    <label>Password length: {length}</label>
                    <br />
                    <br />

                    <div className="range-control">
                        <button className="btn small"
                            onClick={decrementLength}
                            disabled={length <= 4}
                        ><strong>-</strong></button>
                        <input
                            className="slider"
                            type="range"
                            min={4}
                            max={100}
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                        />
                        <button className="btn small"
                            onClick={incrementLength}
                            disabled={length >= 100}
                        ><strong>+</strong></button>
                    </div>
                    <br />

                    <div className="checkbox-group">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={includeNumbers}
                                onChange={() => setIncludeNumbers((prev) => !prev)}
                            />
                            <span className="checkmark"></span>
                            Numbers
                        </label>

                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={includeSmall}
                                onChange={() => setIncludeSmall((prev) => !prev)}
                            />
                            <span className="checkmark"></span>
                            Small Letters
                        </label>

                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={includeCapital}
                                onChange={() => setIncludeCapital((prev) => !prev)}
                            />
                            <span className="checkmark"></span>
                            Capital Letters
                        </label>

                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={includeSymbols}
                                onChange={() => setIncludeSymbols((prev) => !prev)}
                            />
                            <span className="checkmark"></span>
                            Symbols
                        </label>
                    </div>

                    <br /><br />

                    <button className="btn" onClick={generatePassword}>
                        Generate Password
                    </button>

                    <br /><br />

                    <h3>Your generated password:</h3>
                    <p className="password">{password}</p>

                    <button
                        className={`copy-btn ${copied ? "copied" : ""}`}
                        onClick={copyToClipboard}
                    >
                        <span>{copied ? "Copied!" : "Copy"}</span>
                    </button>
                </div>
            </div>
        </>
    );
}