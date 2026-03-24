export default function ErrorHandlingUsingFunctionalComponent({ triggerError }) {

    if (triggerError) {
        throw new Error("Error triggered during render!");
    }

    return (
        <>
            <h1>Error Handling Page</h1>
            <p>No error yet ✅</p>
        </>
    );
}