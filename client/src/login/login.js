import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Login = () => {
    //const [credentials,setCredentials] =useState ({username:"",pwd:""});
    const [userName,setUserName] = useState("");
    const [pwd,setPwd] = useState("");
    const history = useHistory();

    const onLogin = async (e) => {
        e.preventDefault();
        const res= await fetch ('http://localhost:5000/login',{
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({uName : userName, password : pwd})
        });
        const body = await res.text();
        if(body== "true")
         {
            history.push('/travel');
         }
         else
         {
             alert("fail");
         }
    };

return (
<div classNmae="ui form">
    <div className="ui field" >
        <label>UserName</label>
    <input placeholder ="User name" onChange = {(e) => setUserName(e.target.value)} /> 
    </div>
    <div className="ui field" >
        <label>Password</label>
    <input type="password" placeholder ="Password" onChange = {(e) =>  setPwd(e.target.value)}/> 
    </div>
    <button onClick={onLogin}>Login</button>
</div>
)
};

export default Login;

