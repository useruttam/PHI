import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import pic from "./images/loginph.png";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [records, setRecords] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Date_today: "",
    DoctorsName: "",
    DIagnosis_tested: "",
    Prescription_given: "",
  });

  const [editFormData, setEditFormData] = useState({
    Date_today: "",
    DoctorsName: "",
    DIagnosis_tested: "",
    Prescription_given: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      Date_today: addFormData.Date_today,
      DoctorsName: addFormData.DoctorsName,
      DIagnosis_tested: addFormData.DIagnosis_tested,
      Prescription_given: addFormData.Prescription_given,
    };

    const newContacts = [...records, newContact];
    setRecords(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      Date_today: editFormData.Date_today,
      DoctorsName: editFormData.DoctorsName,
      DIagnosis_tested: editFormData.DIagnosis_tested,
      Prescription_given: editFormData.Prescription_given,
    };

    const newContacts = [...records];

    const index = records.findIndex((record) => record.id === editContactId);

    newContacts[index] = editedContact;

    setRecords(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, record) => {
    event.preventDefault();
    setEditContactId(record.id);

    const formValues = {
      Date_today: record.Date_today,
      DoctorsName: record.DoctorsName,
      DIagnosis_tested: record.DIagnosis_tested,
      Prescription_given: record.Prescription_given,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...records];

    const index = records.findIndex((record) => record.id === contactId);

    newContacts.splice(index, 1);

    setRecords(newContacts);
  };

  return (
    <div className="app-container">

    <button id="fk" type="button" class="btn btn-primary" onClick="#" >back</button>
    <center>
    <img src={pic}/>
    </center>
    
    <table class="table table-hover table-bordered p-5">
        <thead>
          <tr>
            <th scope="col">Patient Name:Your name </th>
            <th scope="col">Patient ID:34ID4843</th>
            <th scope="col">Blood Group: A+</th>
          </tr>
        </thead>
        </table>
        <table class="table table-hover table-bordered p-5">
        <tr>
        <p>Name of Emergency Contact: XYZETG</p>
        </tr>
        <tr>
        <p>Emergency Contact Number :9709174702 </p>
        </tr>
        <tr>
        <p>Significant Medical History: cancerous </p>
        </tr>
        <tr>
        <p>Drug Allergeis: Metformin, Nontelukast </p>
        </tr>

        </table>

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Doctor_name</th>
              <th>Diagnosis</th>
              <th>Prescription</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <Fragment>
                {editContactId === record.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    record={record}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add Treatement</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="Date"
          name="Date_today"
          required="required"
          placeholder="Enter Date"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="DoctorsName"
          required="required"
          placeholder="Enter Your Name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="DIagnosis_tested"
          required="required"
          placeholder="Enter diagnosis"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Prescription_given"
          required="required"
          placeholder="Enter Prescription_given..."
          onChange={handleAddFormChange}
        />
        <button type="submit" class="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default App;