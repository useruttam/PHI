import React from "react";

const ReadOnlyRow = ({ record, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{record.Date_today}</td>
      <td>{record.DoctorsName}</td>
      <td>{record.DIagnosis_tested}</td>
      <td><a href="{record.Prescription_given}">See Prescription</a></td>
      <td>
        <button
          type="button"class="btn btn-primary"
          onClick={(event) => handleEditClick(event, record)}
        >
          Edit
        </button>
        <button type="button"class="btn btn-danger" onClick={() => handleDeleteClick(record.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;