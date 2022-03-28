import { useState } from 'react';
import InputField from './InputField';
import RadioButton from './RadioButton';
import Checkbox from './Checkbox';
import Alert from './Alert';
import Textarea from './Textarea';
import Select from './Select';
import validators from '../utils/validatorRules.js';


import { inputFields, dataTimeInputFields, checkBoxButtons, select } from '../utils/formFields';
import { addData } from '../utils/firebaseFunctions';

function Form() {


  const basicFormData = {
    fullName: '',
    email: '',
    service: '',
    isDeleted: false,
    appointment: '',
    isUrgent: [],

  }

  const [formData, setFormData] = useState(basicFormData);
  const [errorMessages, setErrorMessages] = useState({});
  const [wasValidated, setWasValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);



  function reportFieldValidity(inputName) {
    const inputValue = formData[inputName];
    const inputValidationResults = validators[inputName]
      .map((inputValidator) => {
        const { fn: validatorFn, errorMessage: validatorErrorMessage } =
          inputValidator;
        const isValid = validatorFn(inputValue);
        return isValid ? '' : validatorErrorMessage;
      })
      .filter((errorMessage) => errorMessage !== '');

    setErrorMessages((prevState) => ({
      ...prevState,
      [inputName]: inputValidationResults
    }));


    const isInputValid = inputValidationResults.length === 0;
    if (isInputValid) {
      setErrorMessages((prevState) => ({ ...prevState, [inputName]: [] }));
    }
    return isInputValid;
  }

  function reportFormValidity() {
    const inputFieldNames = Object.keys(validators);
    const inputValidations = inputFieldNames.map((inputFieldName) =>
      reportFieldValidity(inputFieldName)
    );
    let isValid = inputValidations.every((isValid) => isValid);
    setWasValidated(true);
    return isValid;
  }

  function handleOnChange(event) {
    const inputElement = event.target;

    setFormData({
      ...formData,
      [inputElement.name]: inputElement.value,
    });
  }
  function handleCheckboxChange({ target: { name, value, checked } }) {

    if (checked) {
      setFormData((prev) => {

        let previousValues = prev[name];
        if (previousValues === undefined) {
          previousValues = [];
        }
        return {
          ...prev,
          [name]: [...previousValues, value],
        };
      });
    } else {
      setFormData((prev) => {
        let previousValues = prev[name];
        const newValues = previousValues.filter(
          (previousValue) => previousValue !== value
        );
        return {
          ...prev,
          [name]: newValues,
        };
      });
    }
  }



  function handleOnSubmit(event) {
    const formElement = event.target
    event.preventDefault();
    const isValid = reportFormValidity();
    console.log(formData);
    if (isValid) {

      const data = {
        fullName: formData.fullName,
        email: formData.email,
        service: formData.service,
        isDeleted: formData.isDeleted,
        isUrgent: formData.isUrgent.includes('isUrgent'),
        appointment: new Date(formData.appointment)
      }
      console.log(data);
      addData(data);

      setWasValidated(false);
      setFormIsValid(true);
      formElement.reset();
      setFormData(basicFormData);
    }

    setShowAlert(true);
  }


  return (
    <div>
      <h1>Új termék felvitele</h1>
      <form onSubmit={handleOnSubmit} noValidate>

        {
          inputFields.map(({ type, label, name, id }) => (
            <InputField
              key={name + id}
              type={type}
              label={label}
              name={name}
              id={id}
              value={formData[name]}
              errorMessages={errorMessages[name]}
              wasValidated={wasValidated}
              handleOnChange={handleOnChange}
            />
          ))
        }
        {
          select.map(({ valueList, label, name, id }) => (
            <Select
              valueList={valueList}
              key={name + id}
              label={label}
              name={name}
              id={id}
              value={formData[name]}
              errorMessages={errorMessages[name]}
              wasValidated={wasValidated}
              handleOnChange={handleOnChange}
            />
          ))
        }
        {
          dataTimeInputFields.map(({ type, label, name, id }) => (
            <InputField
              key={name + id}
              type={type}
              label={label}
              name={name}
              id={id}
              value={formData[name]}
              errorMessages={errorMessages[name]}
              wasValidated={wasValidated}
              handleOnChange={handleOnChange}
              checkboxData={{ isUrgent: formData[name] }}
            />
          ))
        }

        {
          checkBoxButtons.map(({ label, name, id, value, lastItem }) => (
            <Checkbox
              key={name + id}
              label={label}
              name={name}
              id={id}
              value={value}
              lastItem={lastItem}
              checkboxData={formData[name]}
              errorMessages={errorMessages[name]}
              wasValidated={wasValidated}
              handleOnChange={handleCheckboxChange}
            />
          )
          )
        }



        <button className='btn btn-primary mb-3'>Mentés</button>
      </form>
      {showAlert && (formIsValid ? <Alert type="success" message="Sikeres mentés!" /> : <Alert type="danger" message="Sikertelen mentés!" />)}
    </div>
  );
}

export default Form;