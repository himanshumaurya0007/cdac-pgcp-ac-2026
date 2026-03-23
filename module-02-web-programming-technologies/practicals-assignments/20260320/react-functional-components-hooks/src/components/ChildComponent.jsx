export default function ChildComponent({ num1, num2, resultFunc }) {

    function compute(e) {
        switch (e.target.value) {
            case "add": let addResult = num1 + num2;
                resultFunc(addResult);
                break;

            case "substraction": let substractionResult = num1 - num2;
                resultFunc(substractionResult);
                break;

            case "multiplication": let multiplicationResult = num1 * num2;
                resultFunc(multiplicationResult);
                break;

            case "division": let divisionResult = num1 / num2;
                resultFunc(divisionResult);
                break;

            case "pow": let powResult = Math.pow(num1, num2);
                resultFunc(powResult);
                break;

            default: break;
        }
    }

    return (
        <>
            <h2>Child Component</h2>
            <select name="" id="" onChange={compute}>
                <option value="add">Add</option>
                <option value="substraction">Substraction</option>
                <option value="multiplication">Multiplication</option>
                <option value="division">Division</option>
                <option value="pow">Power</option>
            </select>
        </>
    )
}