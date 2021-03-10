import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import Form from './Form';
import './index.css';


 const App = () => {
   const [dataRows,setDataRows] = useState([]);
   const [modRow,setModRow] = useState({rowid:0,from:"",to:"",address:"",country:"",reason:""});

   const onModifyDetail = (newRow) => {
     const tempDataRows = [...dataRows];
    tempDataRows.map((trow)=> {
      if(trow.rowid === newRow.rowid)
      {
        trow.from=newRow.from;
        trow.to=newRow.to;
        trow.address=newRow.address;
        trow.country=newRow.country;
        trow.reason=newRow.reason;
      }
    });
    setDataRows(tempDataRows);
   };
   const onUpdateDetail = (newRow) => {

  setDataRows(dataRows => [...dataRows,newRow]);
   };

   const onDeleteRows =(rowid) => {
     console.log('index',rowid);
     const tempRows = dataRows.filter((row) => row.rowid !== rowid);
     setDataRows(tempRows);
   };

const onModifyRows = (rowid) => {

  const updateRow = dataRows.filter((row) => row.rowid === rowid);


  setModRow({rowid:updateRow[0].rowid,from:updateRow[0].from,to:updateRow[0].to,address:updateRow[0].address,
    country:updateRow[0].country,reason:updateRow[0].reason});

};
   return (<div>
           <div>
            <Form onUpdate={onUpdateDetail} modifyRow={modRow} onModify={onModifyDetail} />
            </div>
            <div>
            <Display dataRows={dataRows} onDelete={onDeleteRows} onModify={onModifyRows}/>
            </div>

           </div>);
 };

 ReactDOM.render(<App />, document.querySelector('#root'));
