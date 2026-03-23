export default function ArrayDataInDropdownFormat() {
    let arrayData = ['C', 'C++', 'Java', 'Advance Java', 'WPT'];
    return (
        <>
            <h1>Display array data in dropdown format</h1>

            <select name="arrayData" id="arrayData">
                {arrayData.map((element, index) => {
                    return (
                        <option option value={element} key={index} >
                            {element}
                        </option>
                    )
                })}
            </select >
        </>
    )
}