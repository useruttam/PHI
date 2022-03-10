import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter a name..."
          name="Date_today"
          value={editFormData.Date_today}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an DoctorsName..."
          name="DoctorsName"
          value={editFormData.DoctorsName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="DIagnosis_tested"
          value={editFormData.DIagnosis_tested}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an Prescription_given..."
          name="Prescription_given"
          value={editFormData.Prescription_given}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-danger"onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;