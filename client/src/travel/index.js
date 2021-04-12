import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import Form from './Form';
import './index.css';



 const Travel = () => {
   const [dataRows,setDataRows] = useState([]);
   const [modRow,setModRow] = useState({rowid:0,from:"",to:"",address:"",country:"",reason:""});

   const loadData = async () => {
     const res = await fetch('http://localhost:5000/travel');
     const body = await res.json();
     setDataRows(body); 
   };

   useEffect(()=>{
     loadData();
   },[]);

   const onModifyDetail = async (newRow) => {
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
    const res= await fetch('http://localhost:5000/travel/update',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(newRow)
    });
    const body =await res.text();
    alert(body);
    setDataRows(tempDataRows);
   };
   
   const onUpdateDetail = async (newRow) => {
     const res=await fetch('http://localhost:5000/travel/add',{
          method : 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body:JSON.stringify(newRow)
     });
     const body= await res.text();
     alert(body);
  setDataRows(dataRows => [...dataRows,newRow]);
   };

   const onDeleteRows =async (rowid) => {
     console.log('index',rowid);
     const tempRows = dataRows.filter((row) => row.rowid !== rowid);
     const res = await fetch('http://localhost:5000/travel/delete',{
       method : 'POST',
       headers : {
         'Content-Type' : 'application/json'
       },
       body : JSON.stringify({rowId:rowid})
     });
     const body = await res.text();
     alert(body);
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

 export default Travel;


