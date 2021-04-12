import React, { useState, useEffect } from 'react';
import './Form.css';



const Form = ({ onUpdate, modifyRow, onModify }) => {
  const countries = ["Select a country", "Canada", "India", "USA"];
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [tempId, setTempId] = useState(0);
  const [newRow, setNewRow] = useState({ rowid: tempId, from: "", to: "", address: "", country: selectedCountry, reason: "" });
  const [flag, setFlag] = useState(true);
  const [modFlag, setModFlag] = useState(-1);

  useEffect(() => {
    setTempId(tempId + 1);
    console.log({ tempId });
    //  setNewRow(newRow => {return {...newRow,rowid:tempId}});
    setNewRow({ ...newRow, rowid: tempId });
  }, [flag]);

  useEffect(() => {
    setModFlag(modFlag + 1);
    console.log(modifyRow.country);
    setSelectedCountry(modifyRow.country);
    setNewRow({
      rowid: modifyRow.rowid, from: modifyRow.from, to: modifyRow.to, address: modifyRow.address,
      country: modifyRow.country, reason: modifyRow.reason
    });
  }, [modifyRow]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setFlag(!flag);
    if (modFlag === 1) {
      setModFlag(0);
      console.log('New Row:', { newRow })
      onModify(newRow);
    }
    else {

      onUpdate(newRow);
    }
    setSelectedCountry(countries[0]);
    setNewRow({ rowid: tempId, from: "", to: "", address: "", country: selectedCountry, reason: "" });

  };
  const clearRows = () => {
    console.log('add clicked');

  };

  const getCountries = () => {
    return countries.map(country => {
      return <option value={country}>{country}</option>
    }
    );
  };

  const setDropdownValue = (e) => {
    setNewRow({ ...newRow, country: e.target.value });
    setSelectedCountry(e.target.value);
  };
  return (
    <div className="ui form">
      <h1 style={{ textAlign: 'center' }}> TRAVEL HISTORY </h1>
      <div className="two fields">
        <div className="field">
          <label>From: </label>
          <input type="date" value={newRow.from} onChange={(e) => setNewRow({ ...newRow, from: e.target.value })} />
        </div>
        <div className="field">
          <label>To: </label>
          <input type="date" value={newRow.to} onChange={(e) => setNewRow({ ...newRow, to: e.target.value })} />
        </div>
      </div>
      <div className="text-area field">
        <label>Address:</label>
        <input type="text" value={newRow.address} onChange={(e) => setNewRow({ ...newRow, address: e.target.value })} />
      </div>
      <div className="text-area field">
        <label>Country:</label>
        <select value={selectedCountry} onChange={setDropdownValue}>

          {getCountries()}
        </select>

      </div>
      <div className="text-area field">
        <label>Reason </label>
        <input type="text" value={newRow.reason} onChange={(e) => setNewRow({ ...newRow, reason: e.target.value })} />
      </div>
      <button className=" btn-clr ui button" type="submit" onClick={onFormSubmit}>Submit</button>

    </div>
  );
};

export default Form;
