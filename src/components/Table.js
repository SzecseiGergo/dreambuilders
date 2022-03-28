import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllData, getFilteredData, deleteData, createListByKeys } from '../utils/firebaseFunctions'
import db from '../firebase/db';
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  deleteDoc,
  addDoc
} from "firebase/firestore";
import RadioButton from './RadioButton';
import Select from './Select';
import Checkbox from './Checkbox';
import { radioButtons, select, checkBoxButtons } from '../utils/formFields';

function Table() {
  const [data, setData] = useState({});
  const [searchedData, setSearchedData] = useState([]);
  const [checkBoxData, setCheckBoxData] = useState({ checkBoxButtons: [] });

  const ref = collection(db, "collectionName");

  // select feltöltése:
  useEffect(() => {
    createListByKeys("firstname").then(doc => setSearchedData(doc));

  }, []);
  const valueList = searchedData;



  useEffect(() => {
    getAllData().then(doc => setData(doc));

  }, []);
  function handleDelete(id) {
    deleteData(id)
    getAllData().then(doc => setData(doc))
  }


  function handleCheckboxChange({ target: { name, value, checked } }) {
    if (checked) {
      setCheckBoxData((prev) => {
        let previousValues = prev[name];
        if (previousValues === undefined) {
          previousValues = [];
        }
        return {
          ...prev,
          [name]: [...previousValues, value]
        };
      });
    } else {
      setCheckBoxData((prev) => {
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
  useEffect(() => {
    if (checkBoxData.checkBoxButtons.length !== 0) {
      getFilteredData("age", "==", checkBoxData.checkBoxButtons[0]).then((filteredList) => setData(filteredList));
    } else {
      getAllData().then(doc => setData(doc))
    }
  }, [checkBoxData]);

  function handleOnChangeFilter(event, searchedDataBaseValue) {
    const value = event.target.value;
    if (value !== "") {
      getFilteredData(searchedDataBaseValue, "==", value).then((filteredList) => setData(filteredList));

    } else {
      getAllData().then(doc => setData(doc))
    }
  }



  return (
    <>
      <div className="mb-3">
        <div className="mb-3">radioButtons</div>
        {
          radioButtons.map(({ label, name, id, value }) => (
            <RadioButton
              key={name + id}
              label={label}
              name={name}
              id={id}
              value={value}
              handleOnChange={(event) => { (handleOnChangeFilter(event, name)) }}
            />
          )
          )
        }
      </div>

      <div className='mb-3'>
        <div className="mb-3">checkBoxes</div>

        <Checkbox
          label="32"
          name={checkBoxButtons[0].name}
          id={checkBoxButtons[0].id}
          value="32"
          handleOnChange={handleCheckboxChange}
        />

      </div>
      {
        select.map(({ label, name, id }) => (
          <Select
            valueList={valueList}
            key={name + id}
            label={label}
            name={name}
            id={id}
            handleOnChange={(event) => (handleOnChangeFilter(event, "firstname"))}
          />
        ))
      }

      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Lastname</th>
            <th>firstname</th>
            <th>age</th>
            <th>radioButtons</th>
            <th>note</th>
            <th>checkBoxes</th>
            <th>select</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map((teszt) => (
            <tr key={teszt.id}>
              <td>{teszt.lastname}</td>
              <td>{teszt.firstname}</td>
              <td>{teszt.age}</td>
              <td>{teszt.radioButtons}</td>
              <td>{teszt.note}</td>
              <td>{teszt.checkBoxButtons}</td>
              <td>{teszt.select}</td>
              <td>
                <Link className='btn btn-primary me-2' to={`/editForm/${teszt.id}`}>Szerkesztés</Link>
                <button
                  className='btn btn-danger me-1'
                  onClick={() => handleDelete(teszt.id)}
                >
                  Törlés
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
