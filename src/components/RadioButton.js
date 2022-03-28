import getValidationClassName from "../utils/getValidationClassName";

function RadioButton({ label, name, id, value, lastItem, handleOnChange, radioData, errorMessages = [], wasValidated = false }) {


    return (
        <div className='form-check'>
            <input
                className={"form-check-input " + getValidationClassName(errorMessages, wasValidated)}
                type='radio'
                id={id}
                name={name}
                value={value}
                onChange={handleOnChange}
                checked={radioData === value}
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

export default RadioButton;