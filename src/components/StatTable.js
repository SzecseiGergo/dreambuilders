import { useState } from "react";

function StatTable({ items }) {

  let conditionSurveyCounter = 0;
  let rootCanalTreatmentCounter = 0;
  let fillingCounter = 0;


  items.map((item) => {
    if (item.service === "Állapotfelmérés") {
      conditionSurveyCounter++;
    } else if (item.service === "Gyökérkezelés") {
      rootCanalTreatmentCounter++;
    } else if (item.service === "Tömés") {
      fillingCounter++;
    }
  })

  let sum = conditionSurveyCounter + rootCanalTreatmentCounter + fillingCounter;

  return (

    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Szolgáltatás</th>
          <th>Darab</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Állapotfelmérés</td>
          <td>{conditionSurveyCounter}</td>
        </tr>
        <tr>
          <td>Gyökérkezelés</td>
          <td>{rootCanalTreatmentCounter}</td>
        </tr>
        <tr>
          <td>Tömés</td>
          <td>{fillingCounter}</td>
        </tr>
        <tr>
          <td><strong> Összesen:</strong> </td>
          <td><strong>{sum}</strong></td>
        </tr>
      </tbody>
    </table>
  );
}

export default StatTable;
