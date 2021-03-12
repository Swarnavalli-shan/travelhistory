import React from 'react';
import ReactDOM from 'react-dom';
import './Display.css';

const Display = ({dataRows,onDelete,onModify}) => {
  const deleteRow = (rowid) => {
    console.log(rowid);
    onDelete(rowid);
  };
  const modifyRow =(rowid) => {
    onModify(rowid);
  };
const displayTable = dataRows.map((row) => {
  return (


    <tr key={row.rowid}>
    <td>{row.from}</td>
    <td>{row.to}</td>
    <td>{row.address}</td>
    <td>{row.country}</td>
    <td>{row.reason}</td>
    <td><button className="ui button" onClick={()=>deleteRow(row.rowid)}>Delete</button></td>
    <td><button className="ui button" onClick={()=>modifyRow(row.rowid)}>Modify</button></td>
    </tr>
  );
});
return (
  <div className="table-form">
  <table className="ui fixed single line celled table">
  <thead>
    <tr><th>From</th>
    <th>To</th>
    <th>Address</th>
    <th>Country</th>
    <th>Reason</th>
    <th></th>
    <th></th>
  </tr></thead>

  <tbody>
  {displayTable}
  </tbody>
  </table>

  </div>
);
};

export default Display;
