import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Login = () => {
    const [credentials,setCredentials] =useState ({username:"",pwd:""});
    const history = useHistory();

    const onLogin = () => {
        if(credentials.username === "travel" && credentials.pwd === "123")
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
    <input placeholder ="User name" onChange = {(e) => setCredentials({...credentials,username:e.target.value})} /> 
    </div>
    <div className="ui field" >
        <label>Password</label>
    <input type="password" placeholder ="Password" onChange = {(e) => setCredentials({...credentials,pwd:e.target.value})}/> 
    </div>
    <button onClick={onLogin}>Login</button>
</div>
)
};

export default Login;

