export default function Data() {
    function btnClick() {
        console.log("You just clicked the button");
    }

    return (
        <>
            {/* <label htmlFor="num">Enter number: </label>
            <input type="number" name="num" id="num" /> */}
            <button onClick={btnClick}>Click me and go to console</button>
        </>
    )
}