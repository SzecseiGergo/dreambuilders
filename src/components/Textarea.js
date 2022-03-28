import getValidationClassName from "../utils/getValidationClassName";

function Textarea(
    {
        id,
        name,
        handleOnChange,
        errorMessages = [],
        label,
        wasValidated = false,
        value = ''
    }
) {


    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <textarea onChange={handleOnChange}
                name={name}
                className={"form-control " + getValidationClassName(errorMessages, wasValidated)}
                id={id}
                value={value}
            />
            <div className={"invalid-feedback"}>
                {errorMessages.length === 1 ?
                    <>{errorMessages[0]}</>
                    :
                    <ul>
                        {errorMessages.map((errorMessage) => (
                            <li key={errorMessage}>{errorMessage}</li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    );
}

export default Textarea;