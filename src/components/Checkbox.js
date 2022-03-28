import getValidationClassName from "../utils/getValidationClassName";

function Checkbox({ label, name, id, value, handleOnChange, lastItem, errorMessages = [], checkboxData, wasValidated = false }) {

    return (
        <div className='form-check'>
            <input
                className={"form-check-input " + getValidationClassName(errorMessages, wasValidated)}
                type='checkbox'
                id={id}
                name={name}
                value={value}
                onChange={handleOnChange}
                checked={checkboxData.includes(value)}
            />
            <label className='form-check-label' htmlFor={id}>
                {label}
            </label>
            {
                (lastItem) ?
                    <div className="invalid-feedback">
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
                    : ''
            }
        </div>
    )
}

export default Checkbox;