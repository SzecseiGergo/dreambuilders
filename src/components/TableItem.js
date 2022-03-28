import { upDateDoc, getAllData } from "../utils/firebaseFunctions"

const TableItem = ({ fullName, service, appointment, isUrgent, id, setAppointmentList }) => {


  function handleDelete(id) {
    upDateDoc(id, true)
    getAllData().then(doc => setAppointmentList(doc))
  }



  return (
    <tr>
      <td>{fullName}</td>
      <td>{service}</td>
      <td>{appointment.toDate().toLocaleString('hu-HU', { timeZone: "CET" })}</td>
      <td>{isUrgent ? 'igen' : 'nem'}</td>
      <td> <button
        id={id}
        className='btn btn-danger me-1'
        onClick={() => handleDelete(id)}
      >
        Törlés
      </button></td>
    </tr>
  );
};

export default TableItem;
