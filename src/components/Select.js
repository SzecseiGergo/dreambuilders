import getValidationClassName from "../utils/getValidationClassName";

function Select(
    {
        id,
        name,
        handleOnChange,
        errorMessages = [],
        label,
        wasValidated = false,
        valueList
    }
) {

    return (

        <div className="mb-2">
            <label className="form-label" htmlFor={id}>{label}</label>
            <select
                className={"form-select " + getValidationClassName(errorMessages, wasValidated)}
                name={name}
                id={id}
                onChange={handleOnChange}
            >
                <option value="">Kérlek válassz!</option>
                {valueList.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
            <div className={"invalid-feedback"}>
                {errorMessages.length === 1 ? (
                    <>{errorMessages[0]}</>
                ) : (
                    <ul>
                        {errorMessages.map((errorMessage) => (
                            <li key={errorMessage}>{errorMessage}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Select;